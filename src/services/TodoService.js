import { LocalStorage } from 'quasar'

var TodoService = {

  data() {
    return {
      todos: []
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
    syncItems() {
      LocalStorage.set('todos', this.todos)
    },
    getTodos() {
      this.todos = LocalStorage.get.item('todos')
    },
    resetTodos() {
      // Set the default groups with empty items.
      LocalStorage.set('todos', [
        {
          action: 'dailies',
          title: 'Daily',
          active: false,
          items: []
        },
        {
          action: 'monthlies',
          title: 'Monthly',
          active: false,
          items: []
        },
        {
          action: 'yearlies',
          title: 'Yearly',
          active: false,
          items: []
        }
      ])
    }
  }
}
export default TodoService
