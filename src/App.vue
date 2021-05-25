<template>
  <div>
    <header class="header">
      <span class="logo"
        >To Do <img class="logo-img" src="../src/assets/todo-logo.png"
      /></span>
    </header>
    <div class="todoapp">
      <TodoList />
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
<script>
import TodoList from "@/components/TodoList";
import "./css/index.css";

export default {
  components: { TodoList },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>