<template>
  <div class="row">
    <div class="col-3">
      <select class="form-select" v-model="limit" @change="filterTodos(limit)" aria-label="Default select example">
        <option selected>Select limit</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            limit: null,
        }
    },
    methods: mapActions(['filterTodos']),
};
</script>

<style>
</style>