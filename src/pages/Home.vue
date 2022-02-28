<template>
  <div class="home col-md-6 mx-auto ">
    <ul>
      <li v-for="book in books" :key="book.id">
        <div class="forContent" >
          <div class="details">
            <h3 @click="handleDelete(book)">{{ book.title }}</h3>
            <p>By {{ book.author }} </p>
          </div>
          <div v-for="place in places" :key="place.id" class=" mx-2">
            <div v-if="book.local == place.id">
              {{place.local}}
            </div>
          </div>
          <div class="toggling">
            <i :class="{icon: true, 
            'fas': book.isFav, 'far': !book.isFav }" 
            class="fa-heart my-auto" @click="handleUpdate(book, 'books', 'isFav')"></i>

            <i :class="{icon: true, 
            'fa-eye': book.isRead, 'fa-eye-slash': !book.isRead }" 
            class="far my-auto" @click="handleUpdate( book, 'books', 'isRead')"></i>
          </div>
        </div>
        <div class="notes bg-warning p-2" v-if="book.notes">
          <span > {{ book.notes }} </span>
        </div> 
      </li>

    </ul>
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
  name: 'Home',
  components: { CreateBookForm },
  setup() {
    const { documents: books } = getCollection('books')
    const { documents: places } = getCollection('places')

    const handleDelete = (book) => {
      const docRef = doc(db, 'books', book.id)
      deleteDoc(docRef)
    }
    const handleUpdate = function(cutMatrice, matrice, args) {
      const docRef = doc(db, matrice, cutMatrice.id) // docRef di Firebase db (importato) + dbMatrice + idMatrice
      function stepDocs(){
        if(args == 'isFav'){
          updateDoc(docRef , { 
            isFav: !cutMatrice.isFav
          })
        }
        if(args == 'isRead'){
          updateDoc(docRef , { 
            isRead: !cutMatrice.isRead
          })
        }else(console.log('nient'))
      }
      stepDocs()
    }
    return {books, places, handleDelete,  handleUpdate}
  }
}
</script>
<style scoped>
.fas{
  color: red!important;
  transform: scale(1.5);
  padding: 0% 2%;
}
.fa-eye{
  color: green!important;
  transform: scale(1.5);
  padding: 0% 2%;
}
.far{
  transform: scale(1.5);
  padding: 0% 2%;
}

</style>