<template>
    <div class="Main">
        <TodoHeader/>
        <TodoAdd v-bind:Tasks="tasks" v-on:addTask="addTask"/>
        <div v-bind:key="index" v-for="(task,index) in tasks">
            <TodoItem v-bind:task="task" v-on:Checked="Checked(index)" v-on:DeleteItem="DeleteItem(index)"/>
        </div>
    </div>
</template>


<script>
import TodoAdd from "./TodoAdd"
import TodoHeader from "./TodoHeader"
import TodoItem from "./TodoItem"

// import Cookies from 'vue-cookies'


export default {
    name: "TodoMain",

    components: {
        TodoAdd,
        TodoHeader,
        TodoItem
    },
    computed:{
        tasks(){
            return this.$store.state.tasks
        }
    },
    created(){
        if(localStorage.getItem('tasks')){
            try{
                this.tasks=JSON.parse(localStorage.getItem("tasks") || '[]')
            }
            catch(e){
                console.log("LocalStorage'da kayit bulunamadi...")
            }
        }
    },
    methods:{
        Checked(index){
            this.tasks[index].complete = !this.tasks[index].complete
            console.log(this.tasks.complete)
        },
        DeleteItem(index){
            this.tasks.splice(index,1)
            localStorage.setItem('tasks',JSON.stringify(this.tasks))
        },
        addTask(title){
            if(title!=''){
            const newTask ={
                title:title,
                complete:false
            }
            this.tasks.push(newTask)
            localStorage.setItem('tasks',JSON.stringify(this.tasks))
            this.title=''
            }
            else{
                alert("Lutfen bos birakmayiniz...")
            }
        }
    }
}
</script>

<style scoped>

.Main{
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
}

</style>