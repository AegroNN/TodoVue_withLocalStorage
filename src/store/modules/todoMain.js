import axios from "axios";
import exp from "constants";

const state = {
    task:[
        {
            title:"Ilk gorev",
            complete:false
        },
        {
            title:"Deneme gorev",
            complete:true
        }
    ]
};

const getters= {
    tasks:(state)=> state.task
};

const actions= {};

const mutations= {};

export default{
    state,
    getters,
    actions,
    mutations
}
