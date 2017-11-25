<template>
<div>
  <v-expansion-panel v-for="(todo, index) in currentTodos"
                     :key="todo.title"
                     expand>
    <v-expansion-panel-content v-model="todo.active">
      <div slot="header">{{ todo.title }}</div>
      <v-list class="todos px-2 pr-3">

        <v-scale-transition name="out-in">
          <v-list-tile v-for="(subItem, subIndex) in todo.items" :key="subItem.title">
            <v-list-tile-action>
              <v-checkbox></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn @click="remove(index, subIndex)" small
                     icon>
                <v-icon>clear</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-scale-transition>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>

</template>

<script>
import TodoService from '../../services/TodoService'
import { ModalEventBus } from './../../main'

export default {
  mixins: [TodoService],
  computed: {
    currentTodos() {
      return this.todos
    }
  },
  data() {
    return {
    }
  },
  created() {
    ModalEventBus.$on('todo-add', (todo) => {
      var index = this.currentTodos.findIndex(group => {
        return group.title === todo.period
      })
      this.currentTodos[index].items.push(todo)

      this.collapsePanel(this.currentTodos[index])

      this.syncItems()
    })
  },
  mounted() {
    // For collapsing the expansion-panels when they are empty
    for (let group in this.currentTodos) {
      if (this.currentTodos[group].items.length > 0) {
        this.currentTodos[group].active = true
      }
    }
  },
  methods: {
    remove (index, subIndex) {
      this.currentTodos[index].items.shift(subIndex, 1)

      this.collapsePanel(this.currentTodos[index])
      this.syncItems()
    },
    collapsePanel (group) {
      if (group.items.length > 0) {
        group.active = true
      }
      else {
        group.active = false
      }
    }
  }
}
</script>
