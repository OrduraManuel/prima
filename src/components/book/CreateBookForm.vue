<template>
  <h3 class="title">Add a New Book</h3>
  <form @submit.prevent="handleSubmit" class="createBookForm">
    <div class="containerFirst">
      <div class="label">
        <label for="title">Book title:</label>
        <input type="text" name="title" v-model="title"  placeholder="Inserisci il titolo del libro" required>
        <label for="title py-3">Book author:</label>
        <input type="text" name="author" v-model="author" placeholder="Inserisci l'autore del libro" required>
      </div>
      <div class="checkLove" :class="{cta: !isFav, ctaLove: isFav}">
        <span class="mb-2">Did you love this book?</span>
         <i :class="{icon: true, fas: isFav, far: !isFav }" class="fa-heart fa-2x my-auto" ></i>
        <input type="checkbox" id="checkLove" class=" mt-3" v-model="isFav" value="true"/>
        <label for="checkLove">checkLove</label>
      </div>
    </div>
    <div class="containerSecond my-4">
        <div class="label">
          <label for="title">Where is?</label>
          <select v-model="local" id="isPlace">
            <option disabled value="">Seleziona una posizione</option>
            <option v-for="place in places" :value="place.id" :key="place.id">
              {{place.local}}
            </option>  
          </select>
          <label for="title">Get notes?</label>
          <textarea rows="" cols="40" name="notes" v-model="notes">
          </textarea>
        </div>
      <div class="checkRead" :class="{cta: !isRead, ctaRead: isRead}">
        <span class="mb-2">Did you read this book?</span>
         <i :class="{icon: true, 'fa-eye': isRead, 'fa-eye-slash': !isRead }" class="far fa-2x my-auto" ></i>
        <input type="checkbox" id="checkRead" class=" mt-3" v-model="isRead" value="true"/>
        <label for="checkRead">checkRead</label>
      </div>        
      
    </div>


    <button>Add Book</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/methods/getUser'

// firebase imports
import { db } from '@/api/config'
import { addDoc, collection} from 'firebase/firestore'

// ciclo for
import getCollection from '@/api/getCollection'

export default {
  setup() {
    const { user } = getUser()
    const title = ref('')
    const author = ref('')
    const isFav = ref('')
    const isRead = ref('')
    const local = ref('')
    const notes = ref('')

    const { documents: places } = getCollection('places')

    
    const handleSubmit = async () => {
      const colRef = collection(db, 'books')
      await addDoc( colRef, {
        title: title.value,
        author: author.value,
        isFav: isFav.value,
        isRead: isRead.value,
        local: local.value,
        notes: notes.value,
        userUid: user.value.uid
      })

      // reset the form
      title.value = ''
      author.value = ''
      local.value = ''
      notes.value = ''
      isFav.value = false
      isRead.value = false
    }
  
    return { handleSubmit, places, title, author, isFav, isRead, local, notes, user}
    
  }
  
}
</script>
