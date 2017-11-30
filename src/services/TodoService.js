import { LocalStorage } from 'quasar'

var TodoService = {

  data() {
    return {
      todos: [
        {
          action: 'daily',
          title: 'Daily',
          active: false,
          items: []
        },
        {
          action: 'monthly',
          title: 'Monthly',
          active: false,
          items: []
        },
        {
          action: 'yearly',
          title: 'Yearly',
          active: false,
          items: []
        }
      ]
    }
  },
  created() {
    if (!LocalStorage.has('todos')) {
      this.resetTodos()
    }
  },
  mounted() {
    this.getTodos()
  },
  methods: {
    syncItems(stores) {
      LocalStorage.set('todos', this.todos)
    },
    getTodos() {
      this.todos = LocalStorage.get.item('todos')
      this.completed = LocalStorage.get.item('todos-completed')
    },
    resetTodos(store) {
      // Set the default groups with empty items.
      var defaults = this.todos

      LocalStorage.set('todos', defaults)
      if (store) {
        LocalStorage.set('todos-' + store, defaults)
      }
    }
  }
}
export default TodoService
