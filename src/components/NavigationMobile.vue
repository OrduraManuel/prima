<template>
    <nav class="navbar NavigationMobile">
        <div class="container-fluid navItems my-auto">
          <ul class="">
            <router-link tag="li" to="/Dashboard"> 
              <i class="fas  fa-1x fa-th-large">
                <span class="mx-4">Dashboard</span>
              </i> 
            </router-link>
            <router-link tag="li" to="/Calendar"> 
              <i class="fas  fa-calendar-alt">
                <span class="mx-4">Calendar</span>
              </i> 
            </router-link>
            <router-link tag="li" to="/Teams"> 
              <i class="fas  fa-users">
                <span class="mx-4">Teams</span>
              </i> 
            </router-link>
            <router-link tag="li" to="/Charts"> 
              <i class="fas  fa-chart-pie-alt">
                <span class="mx-4">Charts</span>
              </i> 
            </router-link>
          </ul>
        </div>
    </nav>    
</template>

<script>
import getUser from '../methods/getUser'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'
// firebase imports
import { auth } from '@/api/config'
import { signOut } from 'firebase/auth'
export default {
  setup() {
    const { user } = getUser()
    const router = useRouter()
    const handleClick = () => {
      signOut(auth)
    }
    watchEffect(() => {
      if (!user.value) {
        router.push('/login')
      }
    })
    return { handleClick, user }
  }
}
</script>
