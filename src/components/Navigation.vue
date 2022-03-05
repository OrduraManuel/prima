<template>
  <div class="Navigation" v-if="ready">
    <nav>
      <div class="heading px-3">
        <h1>My Track</h1>
      </div>
      <Loggedin class="my-4"/>
        <div class="navItem">
          <ul class="">
            <router-link tag="li" to="/Dashboard"> 
              <i class="fas fa-1x fa-th-large">
              </i> 
              <span class="mx-4 d-flex justify-content-center">Dashboard </span>
              <div class="info px-2">{{tasks.filter(task => task.taskDone == true).length}}/{{tasks.length}}</div>
            </router-link>
            <router-link tag="li" to="/Calendar"> 
              <i class="fas  fa-calendar-alt">
               
              </i> 
               <span class="mx-4">Calendar</span>
            </router-link>
            <router-link tag="li" to="/Teams"> 
              <i class="fas  fa-users">
                
              </i> 
              <span class="mx-4">Teams</span>
            </router-link>
            <router-link tag="li" to="/Charts"> 
              <i class="fas  fa-chart-pie-alt">
                
              </i> 
              <span class="mx-4">Charts</span>
            </router-link>
            <router-link tag="li" to="/Setting" class="mt-auto"> 
              <i class="fas  fa-cog">
                
              </i> 
              <span class="mx-4">Setting</span>
            </router-link>
          </ul>
          

           
        </div>
        
    </nav>

    <!-- show user email -->
    
  </div>

</template>

<script>

import getCollection from '@/api/getCollection'
// User imports
import Loggedin from '@/components/Loggedin'

export default {
  setup() {

    const { documents: tasks } = getCollection('tasks') 

    return { tasks }
  },
  computed: {
    ready(){
      return this.tasks != null
    }
  },
  components: { Loggedin}
}
</script>

<style>
.Navigation nav {
  display: flex;
  align-items: center;
}
.Navigation nav h1 {
  margin-right: auto;
  margin-bottom: 0;
}
.Navigation nav a {
  margin-left: 16px;
  color: #2c3e50;
}
.Navigation nav button {
  margin-left: 16px;
}
.Navigation nav a.router-link-exact-active {
  color: #0ec58e;
}
.Navigation nav + p {
  margin-top: 0;
  margin-bottom: 30px;
}
</style>