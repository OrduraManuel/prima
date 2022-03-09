import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// firebase imports
import { auth } from '../src/api/config'
import { onAuthStateChanged } from 'firebase/auth'
import "bootstrap/dist/css/bootstrap.min.css"

let app

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})