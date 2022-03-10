<template>
  <div class="forContent">
    <div class="details d-flex">
      <i :class="{icon: true, 'fas': task.taskDone, 'far': !task.taskDone }" class="fa-check-square  my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskDone')"></i>
      <i :class="{icon: true, 'fas': task.taskPriority, 'far': !task.taskPriority }"  class="fa-circle my-auto mx-2" @click="handleUpdate(task, 'tasks', 'taskPriority')"></i>
      <p class="ml-2" >{{ task.taskTitle }}</p>
    </div>
    <div class="toggling">
      <i class="far fa-trash-alt my-auto mx-2" @click="handleDelete(task )"></i>
    </div>
  </div>
</template>

<script lang="ts">
import getCollection from '@/api/getCollection'
// firebase imports

import { db } from '@/api/config'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'
import { ref } from 'vue'

export default {
    name: 'Task',
    mounted(){
      window.addEventListener("resize", this.resizeListener);
    }
    setup() {
      const { documents: tasks } = getCollection('tasks')
      const resListener = ref();

      const handleDelete = (task) => {
        const docRef = doc(db, 'tasks', task.id)
        deleteDoc(docRef)
      }
      const handleUpdate = function(cutMatrice, matrice, args) {
      const docRef = doc(db, matrice, cutMatrice.id) // docRef di Firebase db (importato) + dbMatrice + idMatrice
      function stepDocs(){
        if (args == 'taskPriority') {
          updateDoc(docRef , {
            taskPriority: !cutMatrice.taskPriority
          })
        } if (args == 'taskDone') {
          updateDoc(docRef , {
            taskDone: !cutMatrice.taskDone
          })
        } else (console.log('nient'))
      }

      stepDocs()
    }

    return { tasks, resListener, handleDelete, handleUpdate }

  },
}
</script>
