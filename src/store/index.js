// https://vuex.vuejs.org/
import Vuex from "vuex";


// https://www.npmjs.com/package/axios

// Import axios/index.js singleton instance
import axios from "../axios/index.js";


export default new Vuex.Store({
  // https://vuex.vuejs.org/guide/state.html

  state: {
    user: null,
    users: [],
    token: null,
  },

  // https://vuex.vuejs.org/guide/mutations.html

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setUsers(state, users) {
      state.users = users;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTokenFromSession(state) {
      state.token = sessionStorage.getItem("Token");
    },
  },

  // https://vuex.vuejs.org/guide/actions.html

  actions: {
    async getUsers(context) {
      if (context.state.users.length < 1) {
      try {
        const response = await axios.get("/users");
        context.commit("setUsers", response.data);
      } catch (error) {
        console.log(error);
        router.push("/login");
      }
    }
    },
  },

  // https://vuex.vuejs.org/guide/getters.html
  getters: {
    Users: (state) => state.users,
  },
});
