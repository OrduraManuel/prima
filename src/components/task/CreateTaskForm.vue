<template>
  <div class="">
    <div class="createTaskForm d-flex">
      <div class="label">
        <input type="text" name="title" v-model="data.taskTitle"  placeholder="Insert task name..." required @keyup.prevent.enter="handleSubmit($event)" />
      </div>
      <div class="props">
        <div class="checkPriority">
          <span class="">High priority</span>
          <input type="checkbox" id="checkPriority" class=" mx-2 mt-3" v-model="taskPriority" value="false"/>
          <label for="checkPriority">
            <i :class="{icon: true, fas: taskPriority, far: !taskPriority }" class="fa-check-square fa-2x my-auto mx-2" ></i>
          </label>
        </div>
        <button type="button" class="btn btn-primary" @click="handleSubmit($event)">Add Task</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue'
import getUser from '@/methods/getUser'

// firebase imports
import { db } from '@/api/config'
import { addDoc, collection} from 'firebase/firestore'

// ciclo for

export default class CreateTaskForm {
  setup() {
    const { user } = getUser()

    const data = reactive({
      taskTitle: String,
      taskPriority: String,
      taskDone: Boolean
    });

    const handleSubmit = async (e: any) => {
      e.preventDefault()
      const colRef = collection(db, 'tasks')
      await addDoc( colRef, {
        taskTitle: data?.taskTitle?.value,
        taskPriority: data?.taskPriority?.value,
        taskDone: false,
        userUid: user?.value?.uid
      })

      // reset the form
      data?.taskTitle?.value = '';
      data?.taskPriority?.value = false;
    }
    return { handleSubmit, data, user }
  }
}
</script>
