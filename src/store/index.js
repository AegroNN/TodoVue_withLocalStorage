import vuex from'vuex'
import vue from 'vue'
import todoMain from './modules/todoMain'

vue.use(vuex);

export default new vuex.Store({
    modules:{
        todoMain
    }
});