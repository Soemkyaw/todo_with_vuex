import axios from "axios";
export default {
  state: {
    todos: [],
  },
  getters: {
    myTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
    },
    deleteTodo(state, deleteId) {
      state.todos = state.todos.filter((todo) => {
        return todo.id != deleteId;
      })
    },
    updateTodo(state,newTodo) {
      state.todos.forEach((todo) => {
        if (todo.id === newTodo.id) {
          todo = newTodo;
        }
      })
    }
  },
  actions: {
    async getTodos({ commit }) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      let todos = res.data;
      commit("setTodos", todos);
    },
    async addTodo(context, newTodo) {
      let res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTodo
      );
      context.commit("addTodo", res.data);
    },
    async deleteTodo(context, deleteId) {
      await axios.put(`https://jsonplaceholder.typicode.com/todos/${deleteId}`);
      context.commit('deleteTodo', deleteId);
    },
    async filterTodos(context,limit){
      let res = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      context.commit('setTodos', res.data);
    },
    async updateTodo(context,todo) {
      let res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);
      context.commit('updateTodo', res.data);
    }

  },
};
