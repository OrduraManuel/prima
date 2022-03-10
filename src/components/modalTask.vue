<template>
  <!-- Modal -->
<Teleport to="body" v-if="taskInfo">
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title d-flex" id="exampleModalLabel">
            <i :class="{icon: true, 'fas': taskInfo.taskPriority, 'far': !taskInfo.taskPriority }"
              class="fa-circle my-auto mx-2" @click="emitTask(taskPriority)"></i>
            Task</h5>
            <button type="button" class="taskClose" data-bs-dismiss="modal" aria-label="Close">
              <i class="far fa-times"></i>
            </button>
        </div>
        <div class="modal-body">
          {{taskInfo.taskTitle}}
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="handleDelete(taskInfo)">delete</button>
          <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="emitTask(taskDone)" v-if="taskInfo.taskDone == false">complete</button>
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal" @click="emitTask(taskDone)" v-if="taskInfo.taskDone == true">to do</button>
        </div>
      </div>
    </div>
  </div>
</Teleport>
</template>

<script>
export default {
  setup(props){
    console.log('sono dentro')
    console.log(props.taskInfo, 'questa è taskinfo')
  },
  emits: ['emitTask'],
  methods:{
    emitTask(value){
      this.$emit("emitTask", value)
    }
  },
  props: {
    taskInfo : Object
  }

}
</script>

