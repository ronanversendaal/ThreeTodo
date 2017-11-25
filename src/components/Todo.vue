<template>
<div>
  <v-container fluid
               pa-0>
    <v-layout row>
      <v-flex xs12
              d-block>
        <list-todos></list-todos>
      </v-flex>
      <modal-todo-add></modal-todo-add>
    </v-layout>
  </v-container>
</div>

</template>

<script>
import ListTodos from './List/Todos'
import ModalTodoAdd from './Modal/TodoAdd'

export default {
  components: {
    ListTodos,
    ModalTodoAdd
  },
  created() {
    // this.getTodos()
  }
}
</script>


<style lang="stylus">
@import '~variables'

</style>
