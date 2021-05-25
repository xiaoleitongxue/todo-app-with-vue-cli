<template>
    <li class="todo" v-bind:class="{completed:todo.completed,editing:todo==editedTodo}">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="todo1.completed" @click="completed(todo1)">
        <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
        <button class="destroy" @click="removeTodo(todo)"></button>
      </div>
      <input class="edit" type="text" v-if="editedTodo" v-model="editedTodo.title" @blur="doneEdit(editedTodo)" @keyup.enter="doneEdit(editedTodo)" @keyup.esc="cancelEdit(todo)">
    </li>
</template>

<script>
import "../css/index.css";
export default {
  name: 'TodoListItem',
  props:{
    todo:{
      type:Object,
    }
  },
  data(){
    return{
      beforeEditCache:null,
      editedTodo:null,
      todo1:this.todo
    }
  },
  methods:{
    removeTodo: function (todo) {
      this.$emit('removeTodo',todo);
    },
    editTodo: function (todo) {
      this.beforeEditCache = todo;
      this.editedTodo = todo;
    },
    doneEdit: function (editedTodo) {
      //若editedTodo为空，则表示不在修改状态，直接返回
      if (!this.editedTodo) {
        return;
      }
      console.log(this.editedTodo)
      this.editedTodo = null;
      editedTodo.title = editedTodo.title.trim();
      //若修改后todo为空,直接移除
      if (!editedTodo.title) {
        this.removeTodo(editedTodo);
      }
      this.$emit('doneEdit',editedTodo);
    },
    cancelEdit: function (todo) {
      this.editedTodo = null;
      todo = this.beforeEditCache;
      this.$emit('cancelEditTodo',todo)
    },
    completed: function(todo){
      todo.completed = !todo.completed;
      this.$emit('completed',todo);
    }
  }

}
</script>

<style>

</style>