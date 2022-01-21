import Vue from "vue";
import Vuex from "vuex";
import lineProfile from "@/store/lineProfile";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    lineProfile,
  },
});
