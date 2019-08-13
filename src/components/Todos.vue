<template>
  <div class="todos">
    <div class="todo" v-for="todo in allTodos" :key="todo.id">
      {{todo.title}}
      <i @click="deletoTodo(todo.id)" class="fas fa-trash-alt"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "Todos",
  methods: {
    ...mapActions(['fetchTodos', 'deletoTodo']),
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .todos i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: #fff;
  }

  @media(max-width: 500px) {
    .todos {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>