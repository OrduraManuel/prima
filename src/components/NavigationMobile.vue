<template>
    <nav class="navbar NavigationMobile" v-if="user">
        <div class="container-fluid navItems px-0 my-auto">
          <ul class="">
            <router-link tag="li" to="/Dashboard"> 
              <i class="fas   fa-th-large">
              </i> 
              <span class="mx-1">Dashboard</span>
            </router-link>
            <router-link tag="li" to="/Calendar"> 
              <i class="fas  fa-calendar-alt"> 
              </i> 
              <span class="mx-1">Calendar</span>
            </router-link>
            <router-link tag="li" to="/Teams"> 
              <i class="fas  fa-users">
              </i> 
              <span class="mx-1">Teams</span>
            </router-link>
            <router-link tag="li" to="/Charts"> 
              <i class="fas  fa-chart-pie-alt">
              </i> 
              <span class="mx-1">Charts</span>
            </router-link>
            <router-link tag="li" to="/Setting"> 
              <i class="fas  fa-cog">
              </i> 
              <span class="mx-1">Setting</span>
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
