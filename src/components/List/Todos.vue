<template>
<div>
  <v-expansion-panel v-for="(todo, index) in currentTodos"
                     :key="todo.title"
                     expand>
    <v-expansion-panel-content v-if="hasActiveGroup(todo)" v-model="todo.active">
      <div slot="header">{{ todo.title }}</div>
      <v-list class="todos px-2 pr-3">
        <transition-group name="slide-y-transition" tag="div" mode="out-in">
          <div v-for="(subItem, subIndex) in todo.items" :key="subItem.title">
            
            <v-divider v-if="subIndex == todoAmount[todo.action]" :key="todo.action"></v-divider>

            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox v-if="subIndex < todoAmount[todo.action]" @click="toggleComplete(index, subIndex)" :disabled="subItem.completed" v-model="subItem.completed"></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title :class="{strikethrough: subItem.completed}">{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn @click="remove(index, subIndex)" small
                       icon>
                  <v-icon>clear</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            </div>
        </transition-group>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>

</template>

<script>
import TodoService from '../../services/TodoService'
import { ModalEventBus } from './../../main'

import StoreService from '../../services/StoreService'

export default {
  mixins: [TodoService, StoreService],
  computed: {
    currentTodos() {
      return this.todos
    }
  },
  created() {
    // Setup store config and load settings
    this.setConfig({
      store: 'period'
    })
    this.loadSettings()
    this.activePeriods = this.getSettings('activePeriods')

    this.setConfig({
      store: 'todo'
    })
    this.loadSettings()
    this.todoAmount = this.getSettings('todoAmount')
    // Modal for adding todos
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
      this.currentTodos[index].items.splice(subIndex, 1)

      this.collapsePanel(this.currentTodos[index])
      this.syncItems()
    },
    toggleComplete (index, subIndex) {
      let completeState = this.currentTodos[index].items[subIndex].completed

      this.currentTodos[index].items[subIndex].completed = !completeState

      // We'll have to do this because of unreactive copmonents after adding, todo: find alternative
      this.$forceUpdate()
      this.syncItems()
    },
    collapsePanel (group) {
      if (group.items.length > 0) {
        group.active = true
      }
      else {
        group.active = false
      }
    },
    hasActiveGroup(group) {
      return (this.activePeriods.hasOwnProperty(group.action) && this.activePeriods[group.action] === true)
    }
  }
}
</script>

<style lang="stylus">
@keyframes strikethrough{
  0%   { width : 0; }
  100% { width: 100%; }
}
.strikethrough {
  position: relative;
}
.strikethrough:after {
  content: ' ';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: white;
  animation-name: strikethrough;
  animation-duration: 0.2s;
  animation-timing-function: ease-out-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards; 
}

</style>
