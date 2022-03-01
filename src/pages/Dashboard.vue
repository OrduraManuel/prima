<template>
    <div class="col-lg-6 mx-auto">
        <CreateTaskForm />
    </div>
</template>
<script>

import CreateTaskForm from '@/components/task/CreateTaskForm'
import getCollection from '@/api/getCollection'
// firebase imports

import { db } from '@/api/config'
import { doc, deleteDoc, updateDoc} from 'firebase/firestore'

export default {
  name: 'Dashboard',
  components: { CreateTaskForm },
  setup() {
    const { documents: tasks } = getCollection('tasks')
    const { documents: places } = getCollection('places')

    const handleDelete = (task) => {
      const docRef = doc(db, 'tasks', task.id)
      deleteDoc(docRef)
    }

    const handleUpdate = (task) => {
      const docRef = doc(db, 'tasks', task.id)
      updateDoc(docRef, {
        taskPriority: !task.taskPriority
      })
    }

    return {tasks,places, handleDelete, handleUpdate}
  }
}
</script>