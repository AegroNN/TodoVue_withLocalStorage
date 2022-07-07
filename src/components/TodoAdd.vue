<template>
    <div class="Add">
        <input type="text" class="Input" v-model="title" @keyup.enter="$emit('addTask',title)">
        <input type="button" value="Ekle" class="Button" @click="$emit('addTask',title)">
    </div>
</template>

<script>
export default {
    name:"TodoAdd",
    data(){
        return{
            title:''
        }
    },
    props:["Tasks"]
}
</script>

<style scoped>
.Add{
    display: flex;
}
.Input{
    outline: none;
    background: #f2f2f2;
    box-sizing: border-box;
    flex: 12;
    padding: 5px;
}
.Button{
    flex: 2;
    text-transform: uppercase;
    outline: none;
    background:blue;
    color: white;
    border: none;
    box-sizing: border-box;
    padding: 10px;
    cursor: pointer;
}
.Button:hover,
.Button:active,
.Button:focus{
    background-color:darkblue;
}
</style>