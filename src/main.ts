import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// firebase imports
import { auth } from './api/config'
import { onAuthStateChanged } from 'firebase/auth'
import "bootstrap/dist/css/bootstrap.min.css"

let app: any;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App).use(router).mount('#app')
  }
})