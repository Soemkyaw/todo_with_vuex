<template>
  <div class="container">
    <h3 class="text-center mt-5">Todo List</h3>
    <AddTodo></AddTodo>
    <FilterByLimit></FilterByLimit>
    <div class="row">
      <div class="col-4 my-3" v-for="todo in myTodos" :key="todo.id">
        <b-card 
          @dblclick="toggleCompleted(todo)"
          :bg-variant="isComplete(todo.completed)" align="center">
          <b-card-text class="d-flex justify-content-between">
            <span>{{ todo.title }}</span>
            <span @click="deleteTodo(todo.id)"
              ><b-icon icon="trash-fill" class="text-danger"></b-icon
            ></span>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import FilterByLimit from "./FilterByLimit";
import AddTodo from "./AddTodo";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    FilterByLimit,
    AddTodo,
  },
  computed: mapGetters(["myTodos"]),
  methods: {
    toggleCompleted(todo) {
      todo.completed = !todo.completed;
      this.updateTodo(todo);
    },
    isComplete(complete) {
      return complete === true ? "success-subtle" : "primary-subtle";
    },
    ...mapActions(["getTodos", "deleteTodo","updateTodo"]),
  },
  mounted() {
    this.getTodos();
  },
};
</script>

<style>
</style>