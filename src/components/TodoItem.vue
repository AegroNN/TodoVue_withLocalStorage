<template>
    <div class="Item" v-bind:class="{'isComplete':task.complete}"> 
        <input type="checkbox" @change="$emit('Checked')"/>         
        <p> {{task.title}}</p>
        <button class="Delete" @click="$emit('DeleteItem', task.index)">X</button>    
    </div>
</template>

<script>

export default {
    name:"TodoItem",
    props:["task"]
}
</script>

<style scoped>
.Item{
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin:5px 0 5px;
    border-radius: 8px;
}

.isComplete{
    text-decoration: line-through;
    color:green;
}
.Delete{
    background: #ff0000;
    color:white;
    padding: 5px 9px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    float: right;
}
</style>