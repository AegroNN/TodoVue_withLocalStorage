<template>
  <div id="app">
    <TodoMain/>
  </div>
</template>

<script>
import TodoMain from "./components/TodoMain"

export default {
  name: 'App',
  components: {
    TodoMain
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body{
  line-height: 1.4;
}
</style>
