import Vue from "vue";
import Vuex from "vuex";
import Todos from "./modules/Todos.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Todos },
});
