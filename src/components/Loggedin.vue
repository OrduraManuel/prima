<template>
    <div class="Loggedin" v-if="user">
        <div v-if="user" class="user">
            <div class="infoUser my-auto">
                <p v-if="user" class="">Logged in as:</p>
                <p>{{ user.email }}</p>
            </div>
          <button class="btn my-auto" @click="handleClick">Logout</button>
        </div>
        <!-- logged out users -->
        <div v-if="!user">
          <router-link to="/login">Login</router-link>
          <router-link to="/signup">Signup</router-link>
        </div>
    </div>
</template>

<script>

import getUser from '../methods/getUser'
import { useRouter } from 'vue-router'
import { watchEffect } from 'vue'

// firebase imports
import { auth } from '@/api/config'
import { signOut } from 'firebase/auth'

export default {
    name: 'Loggedin',
    setup() {
        console.log('loggedin')

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
        },
    computed: {
        ready(){
        return this.user != null
        }
    }
}
</script>
