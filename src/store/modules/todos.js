import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20');  
    this.todos = response.data;
    commit('setTodos', response.data);
  },

  async addTodo({ commit}, title ) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    });
    commit('addTodo', response.data);
  },

  async deletoTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('deleteTodo', id);
  }

};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  addTodo: (state, todo) => state.todos.unshift(todo),
  deleteTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
  state,
  getters,
  actions,
  mutations
};
