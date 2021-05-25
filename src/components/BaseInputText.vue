<template>
  <div class="new-todo-container">
    <button class="toggle-add">+</button>
    <input class="new-todo" autofocus autocomplete="off" placeholder="添加一个任务" v-model="newTodo" @keydown.enter="addTodo">
  </div>
</template>

<script>
import "../css/index.css";
export default {
  name:'BaseInputText',
  data(){
    return{
      newTodo:''
    }
  },
  methods:{
    addTodo: function () {
      let value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.$emit('addTodo',value);
      this.newTodo = ''
    },
  }
}
</script>

<style>
.new-todo-container{
  margin-bottom: 10px;
}
</style>