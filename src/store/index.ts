import { createStore } from "vuex";
import axios from "axios";
import router from '../router/index'
import config from "../../config";
import { IUser } from "../types/User.inteface";


const serverUrl = config.serverUrl

export default createStore({
  state() {
    return{
      user: {
        name: "",
        player_id: 0
      } as IUser,
      message: "" as string
    }
  },
  mutations: {
    updateUser(state: any, {name, player_id}){
      state.user.name = name;
      state.user.player_id = player_id;
    },
    updateMessage(state: any, message: string){
      state.message = message;
    }
  },
  actions: {
    signUp({ commit }, {name, password}){
      axios.post(`${serverUrl}auth_player`,{
          "world_id": 0,
          name,
          password
        }   
      )
      .then(response => {
        debugger;
        const data = response.data
        const user = {
          name,
          player_id: data.player_id
        }
        if (data.status === "succsess"){
          commit("updateUser", user)
          router.push("game");
        }
      })
      .catch(error => {
        // DEV
        console.log(error)
        commit("updateMessage", "Oh, something went wrong") 
      });
    }
  },
  getters: {}
});
