<template>
  <div class="addTodo">
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Enter a Task">
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.title);
      this.title = '';
    }
  }
}
</script>

<style scoped>
  .addTodo {
    margin: 20px 0;
  }
  form {
    display: flex;
  }
  input[type=text] {
    flex: 10;
    padding: 10px;
    border: #41b883 1px solid;
  }
  input[type=submit] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: none;
  }
</style>