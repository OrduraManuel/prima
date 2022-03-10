<template>
<div class="container" v-if="ready">
  <div class="row home">
    <div class="containerTasks containerForm">
      <p class="headingTasks mb-4">New task</p>
      <CreateTaskMobile class="d-lg-none"/>
      <CreateTaskForm class="d-none d-lg-block"/>
    </div>
    <div class="containerTasks containerProgress">
      <p class="headingTasks">In Progress<span>{{tasks.filter(task => task.taskDone == false).length}}</span></p>
      <li v-for="task in taskNotDone" :key="task.id"  class="lobbyTask"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="T = task"> 
        <div class="forContent" >
          <div class="details d-flex">
            <i :class="{icon: true, 'fas': task.taskDone, 'far': !task.taskDone }" 
                class="fa-check-square  my-auto mx-2" 
                @click="handleUpdate(task, 'tasks', 'taskDone')"></i>
            <i :class="{icon: true, 'fas': task.taskPriority, 'far': !task.taskPriority }" 
                class="fa-circle my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskPriority')"></i>
            <p class="ml-2">{{  dotDescr(task.taskTitle) }} </p>
          </div>
          <div class="toggling">
            <i class="far fa-trash-alt my-auto mx-2" 
            @click.stop="handleDelete(task)"></i>
          </div>
        </div>
      </li>
    </div>
    <div class="containerTasks containerDone">
      <p class="headingTasks">Done <span >{{tasks.filter(task => task.taskDone == true).length}}</span></p>
      <li v-for="task in taskDone" :key="task.id"  class="lobbyTask"  data-bs-toggle="modal" data-bs-target="#exampleModal" @click="T = task"> 
        <div class="forContent" >
          <div class="details d-flex">
            <i :class="{icon: true, 'fas': task.taskDone, 'far': !task.taskDone }" 
                class="fa-check-square  my-auto mx-2" 
                @click="handleUpdate(task, 'tasks', 'taskDone')"></i>
            <i :class="{icon: true, 'fas': task.taskPriority, 'far': !task.taskPriority }" 
                class="fa-circle my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskPriority')"></i>
            <p class="ml-2">{{  dotDescr(task.taskTitle) }} </p>
          </div>
          <div class="toggling">
            <i class="far fa-trash-alt my-auto mx-2" 
            @click.stop="handleDelete(task)"></i>
          </div>
        </div>
      </li>
    </div>
  </div>
  <modalTask  :taskInfo="T" v-if="T  && resListener < 991" @emitTask="handleUpdate(T, 'tasks', 'taskDone')" /> 
</div>

</template>

<script>
import getCollection from '@/api/getCollection'

import CreateTaskForm from '@/components/task/CreateTaskForm'
import CreateTaskMobile from '@/components/task/CreateTaskMobile'

import modalTask from '@/components/modalTask'


// firebase imports

import { db } from '@/api/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: { CreateTaskForm, CreateTaskMobile, modalTask },
  computed : {
    //managed longest title
    dotDescr(){
      return (value) =>{
        if(value.length > 50){
          return value.substring(0,50) + '...'
        }else{
          return value
        }
      }
    },
    //
    ready(){
      return this.tasks != null
    },
    // filtering loop DONE
    taskDone(){
      if(this.tasks && this.tasks.length){
        return this.tasks.filter(task => task.taskDone)
      }return []
    },
    // filtering loop NOT DONE
    taskNotDone(){
      if(this.tasks && this.tasks.length){
        return this.tasks.filter(task => !task.taskDone)
      }return []
    }
  },
  methods:{
    // resize managed
    resizeListener(){
      this.resListener = window.innerWidth
    }
  },
  setup() {
    // Firestore
    const { documents: tasks } = getCollection('tasks')
    // filtering Loop
    const T = ref({});


    // Resize managed
    const resListener = ref(0);

    // declaration CRUD
    const handleDelete = (task) => {
      const docRef = doc(db, 'tasks', task.id)
      deleteDoc(docRef)
    }
    const handleUpdate = function(cutMatrice, matrice, args) {
      const docRef = doc(db, matrice, cutMatrice.id) // docRef di Firebase db (importato) + dbMatrice + idMatrice
      function stepDocs(){
        if(args == 'taskPriority'){
          updateDoc(docRef , {
            taskPriority: !cutMatrice.taskPriority
          })
        }if(args == 'taskDone'){
          updateDoc(docRef , {
            taskDone: !cutMatrice.taskDone
          })
        }else(console.log('nient'))
      }
      stepDocs()
    }

    return {tasks, T,  resListener, handleDelete, handleUpdate}
  },
  // resize managed
  mounted(){
    window.addEventListener("resize", this.resizeListener);
  }

}
</script>
<style scoped>

.fas{
  color: red!important;
  transform: scale(1.5);
  padding: 0% 2%;
}
.fas.fa-check-square {
  color: green!important;
}
.far{
  transform: scale(1.5);
  padding: 0% 2%;
  position: relative;
}
.far.fa-check-square:after{
  content:'';
  position:absolute;
  transform: translate(-50%, 50%);
  top:0%;
  right:30%;
  width: 20%;
  height:50%;
  background: #141B2C; 
  transition: all .25s;
}
.far.fa-check-square:hover:after{
  background: #c7c9cf;
  top:-25%;
  right:25%;
  width: 25%;
  height:75%;
  cursor: pointer;
  transition: all .4s;
}
.far.fa-cirle:after{
  content:'';
  position:absolute;
  transform: translate(-50%, -50%);
  top:50%;
  right:20%;
  width: 30%;
  height:30%;
  background: red;
  transition: all .25s;
}

</style>

