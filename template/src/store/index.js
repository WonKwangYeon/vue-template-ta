import Vue from "vue";
import Vuex from "vuex";
import constants from "../constants";
import axios from "axios";

axios.defaults.withCredentials = true;
const request = axios.create({
  baseURL : "URL", 
  timeout: 2000
});
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    example: []
  },
  getters: {
    getExample(state) {
      return state.example;
    }
  },
  mutations: {
    setExample(state, payload) {
        state.example = payload;
    }
  },
  actions: {
    async getExampleApi(context) {
      try {
        context.state.example = [];
        const { data } = await request.get(constants.api.example)

        if (data.length > 0) {
          context.commit("setExample", data);
        }
      } catch (e) {
        console.log(e)
      }
    },
    async setExampleApi(context, example) {
      try {
        const { status } = await request.post(constants.api.example, example);
        if (status === 200) {
          context.commit()
        }
      } catch (e) {
        console.log(e)
      }
    },
    async updateExampleApi(context) {
      try {
        const { status } = await request.put(constants.api.example);
        if (status === 200) {
          context.commit()
        }
      } catch (e) {
        console.log(e)
      }
    },
    async deleteExampleApi(context) {
      try {
        const { status } = await request.delete(constants.api.example);
        if (status === 200) {
          context.commit()          
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
});
export default store;
