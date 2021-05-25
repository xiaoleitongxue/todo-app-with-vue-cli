<template>

  <section class="main" v-cloak>
    <BaseInputText @addTodo="pushNewTodo"/>
    <div v-show="todos.length">
      <footer class="footer">
				<span class="todo-count">
              {{ remaining }}个剩余
				</span>
        <ul class="filters">
          <li>
            <router-link to="/all">全部</router-link>
          </li>
          <li>
            <router-link to="/active">进行中</router-link>
          </li>
          <li>
            <router-link to="/completed">已完成</router-link>
          </li>
        </ul>
        <button class="clear-completed" @click="clearCompleted">
          清除已完成
        </button>
      </footer>
      <ul class="todo-list">
        <TodoListItem
            v-for="todo in filteredTodos"
            v-bind:todo="todo"
            v-bind:key="todo.id"
            @removeTodo="removeTodo"
            @doneEdit="doneEdit"
            @cancelEdit="cancelEditTodo"
            @completed="completed"
        />
      </ul>

    </div>
  </section>

</template>

<script>
import BaseInputText from "@/components/BaseInputText";
import TodoListItem from "@/components/TodoListItem";
import {todoStorage} from "@/js/store";
import "../css/index.css";


let filters = {
  all: function (todos) {
    return todos;
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed;
    });
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed;
    });
  }
}
export default {
  name: 'TodoList',
  components: {TodoListItem, BaseInputText},
  data() {
    return {
      todos: todoStorage.fetch(),
      editedTodo: null,
      next_id: 0,
      visibility: this.$route.name || 'all'
    }
  },
  watch: {
    todos: {
      deep: true,
      handler: todoStorage.save
    },
    $route(to) {
      console.log('to', to);
      this.visibility = to.name
      console.log('visibility', this.visibility);
    }
  },

  computed: {
    filteredTodos: function () {
      return filters[this.visibility](this.todos)
    },
    remaining: function () {
      return filters[this.visibility](this.todos).length
    }
  },
  methods: {
    pushNewTodo: function (value) {
      this.todos.push({id: this.next_id, title: value, completed: false})
      this.next_id++;
    },
    removeTodo: function (todo) {
      console.log(todo)
      let index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    },
    doneEdit: function (todo) {
      let index = this.todos.indexOf(todo)
      this.todos[index].title = todo.title;
    },
    cancelEditTodo: function (todo) {
      let index = this.todos.indexOf(todo)
      this.todos[index].title = todo.title;
    },
    completed: function (todo) {
      let index = this.todos.indexOf(todo)
      this.todos[index].completed = todo.completed;
    },
    clearCompleted: function () {
      this.todos = filters.active(this.todos);
    }
  }
}

</script>

<style>

</style>