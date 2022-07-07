import Vuex from'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
           tasks:[
                {
                    title:"Ilk gorev",
                    complete:false
                },
                {
                    title:"Deneme gorevi",
                    complete:false
                }
            ]
         }
    }
)
