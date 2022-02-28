<template>
    <div class="col-lg-6 mx-auto">
        <CreateBookForm />
    </div>
</template>
<script>

import CreateBookForm from '@/components/book/CreateBookForm'
import getCollection from '@/api/getCollection'
// firebase imports

import { db } from '@/api/config'
import { doc, deleteDoc, updateDoc} from 'firebase/firestore'

export default {
  name: 'Dashboard',
  components: { CreateBookForm },
  setup() {
    const { documents: books } = getCollection('books')
    const { documents: places } = getCollection('places')

    const handleDelete = (book) => {
      const docRef = doc(db, 'books', book.id)
      deleteDoc(docRef)
    }

    const handleUpdate = (book) => {
      const docRef = doc(db, 'books', book.id)
      updateDoc(docRef, {
        isFav: !book.isFav
      })
    }

    return {books,places, handleDelete, handleUpdate}
  }
}
</script>