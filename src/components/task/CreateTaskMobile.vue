<template>
<div>
    <div class="createTaskMobile btn" data-bs-toggle="modal" data-bs-target="#newMobileTask">
        <p class="my-auto">New Task</p>
        <i class="fas fa-solid fa-plus mx-2 my-auto"></i>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="newMobileTask" tabindex="-1" aria-labelledby="newMobileTaskLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newMobileTaskLabel">New Task</h5>
                <button type="button" class="taskClose" data-bs-dismiss="modal" aria-label="Close">
                    <i class="far fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="label">
                    <input type="text" name="title" v-model="taskTitle"  placeholder="Insert task name..." required >
                </div>
            </div>
            <div class="modal-footer props">
                <div class="checkPriorityM">
                    <span class="">High priority</span>
                    <input type="checkbox" id="checkPriorityM" class=" mx-2 mt-3" v-model="taskPriority" value="false"/>
                    <label for="checkPriorityM">
                        <i :class="{icon: true, fas: taskPriority, far: !taskPriority }" class="fa-check-square fa-2x my-auto mx-2" ></i>
                    </label>
                </div> 
                <button type="button" class="btn btn-primary px-4" data-bs-dismiss="modal" aria-label="Close" @click="handleSubmit($event)">ADD</button>
            </div>
            </div>
        </div>
    </div>
</div>
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

    const handleSubmit = async (e) => {
      e.preventDefault()
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