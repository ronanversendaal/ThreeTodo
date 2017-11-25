<template>
<div>
  <v-dialog v-model="dialog"
            max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Add Todo</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <form>
            <v-flex xs12>
              <v-text-field v-model="newTodo.title" label="Name"
                            required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-select v-model="newTodo.period"
                        label="Period"
                        required
                        :items="['Daily', 'Monthly', 'Yearly']"></v-select>
            </v-flex>
          </form>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat
               @click.native="dialog = false">Close</v-btn>
        <v-btn color="primary darken-1"
               flat
               @click.prevent="submitTodo" >Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-btn color="primary"
           fixed
           fab
           bottom
           right
           dark
           slot="activator">
      <v-icon>add</v-icon>
    </v-btn>
  </v-dialog>
</div>

</template>

<script>
import { ModalEventBus } from './../../main'

export default {
  data: () => {
    return {
      newTodo: {
        title: '',
        period: ''
      },
      dialog: false
    }
  },
  created: () => {
    ModalEventBus.$on('open', () => {
      this.dialog = true
    })
  },
  methods: {
    submitTodo() {
      ModalEventBus.$emit('todo-add', this.newTodo)

      this.dialog = false
      this.newTodo = {}
    }
  }
}
</script>
