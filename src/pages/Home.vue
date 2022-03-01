<template>
<div class="container">
  <div class="row home">
    <div class="containerTasks containerForm">
      <CreateTaskForm />
    </div>
    <div class="containerTasks containerProgress">
      <p class="headingTasks">In Progress</p>
      <li v-for="task in tasks" :key="task.id" v-show="!task.taskDone" class="lobbyTask">
          <div class="forContent" v-if="!task.taskDone">
            <div class="details d-flex">
              <i :class="{icon: true, 'fas': task.taskDone, 'far': !task.taskDone }" 
                  class="fa-check-square  my-auto mx-2" 
                  @click="handleUpdate(task, 'tasks', 'taskDone')"></i>
              <i :class="{icon: true, 'fas': task.taskPriority, 'far': !task.taskPriority }" 
                  class="fa-circle my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskPriority')"></i>
              <p class="ml-2" @click="testone(task)">{{ task.taskTitle }}</p>
            </div>
            <div class="toggling">
              <i class="far fa-trash-alt my-auto mx-2" 
              @click="handleDelete(task)"></i>
            </div>
          </div>
      </li>
    </div>
    <div class="containerTasks containerDone">
      <h6 class="headingTasks">Done</h6>
      <li v-for="task in tasks" :key="task.id" v-show="task.taskDone" class="lobbyTask">
        <div class="forContent"  v-if="task.taskDone">
          <div class="details d-flex">
            <i :class="{icon: true, 'fas': task.taskDone, 'far': !task.taskDone }" 
                class="fa-check-square  my-auto mx-2" 
                @click="handleUpdate(task, 'tasks', 'taskDone')"></i>
            <i :class="{icon: true, 'fas': task.taskPriority, 'far': !task.taskPriority }" 
                class="fa-circle my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskPriority')"></i>
            <p class="ml-2" @click="testone(task)">{{ task.taskTitle }}</p>
          </div>
          <div class="toggling">
            <i class="far fa-trash-alt my-auto mx-2" 
            @click="handleDelete(task)"></i>
          </div>
        </div>
      </li>
    </div>
  </div>
</div>
</template>

<script>

import CreateTaskForm from '@/components/task/CreateTaskForm'
import getCollection from '@/api/getCollection'
// firebase imports

import { db } from '@/api/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default {
  name: 'Home',
  components: { CreateTaskForm },
  computed : {
    dotDescr(value){
      if(value.length > 10){
        return value.substring(0,10) + '...'
      }else{
        return value
      }
    },
    testone(el){
      return console.log(el, 'stramonazza')
    }
  },
  setup() {
    const { documents: tasks } = getCollection('tasks') 

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

    return {tasks, handleDelete, handleUpdate}
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

