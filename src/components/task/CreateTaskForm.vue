<template>
  <p class="headingTasks">New task</p>
  <form @submit.prevent="handleSubmit" class="createTaskForm d-flex">
    <div class="label">
      <input type="text" name="title" v-model="taskTitle"  placeholder="Insert task title..." required>
    </div>
    <div class="props">
      <div class="checkPriority">
        <span class="">High priority</span>
        <input type="checkbox" id="checkPriority" class=" mt-3" v-model="taskPriority" value="false"/>
        <label for="checkPriority">
          <i :class="{icon: true, fas: taskPriority, far: !taskPriority }" class="fa-check-square fa-2x my-auto mx-2" ></i>
        </label>
      </div>  
        <button type="button" class="btn btn-primary" @click=(handleSubmit)>Add Task</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/methods/getUser'

// firebase imports
import { db } from '@/api/config'
import { addDoc, collection} from 'firebase/firestore'

// ciclo for

export default {
  setup() {
    const { user } = getUser()
    const taskTitle = ref('')
    const taskPriority = ref('')
    const taskDone = ref('')

    const handleSubmit = async () => {
      const colRef = collection(db, 'tasks')
      await addDoc( colRef, {
        taskTitle: taskTitle.value,
        taskPriority: taskPriority.value,
        taskDone: false,
        userUid: user.value.uid
      })

      // reset the form
      taskTitle.value = ''
      taskPriority.value = false
    }
    return { handleSubmit, taskTitle, taskPriority, taskDone, user}
  }
}
</script>
