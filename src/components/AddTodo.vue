<template>
  <div>
    <div class="input-group mb-3">
      <input
        v-model="newTodo.title"
        type="text"
        class="form-control"
        placeholder="Enter Todo Title"
        aria-describedby="basic-addon2"
      />
      <span class="input-group-text bg-primary text-white" id="basic-addon2" @click="addTodoHandler()">Add Todo</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            newTodo: {
                title: '',
            }
        }
    },
    methods: {
        addTodoHandler() {
            this.addTodo(this.newTodo);
            this.newTodo.title = ''
        },
        ...mapActions(['addTodo'])
    },
}
</script>

<style>

</style>