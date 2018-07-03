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
              <v-flex xs12>
                <!-- @todo item via settings -->
                <v-select style="capitalize" v-model="newTodo.period"
                clearable
                          label="Period"
                          required
                          :items="activePeriodsArray"></v-select>
              </v-flex>
              <v-text-field clearable v-model="newTodo.title" label="Name"
                            required></v-text-field>
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
import StoreService from '../../services/StoreService'
import _ from 'lodash'

export default {
  mixins: [StoreService],
  data() {
    return {
      activePeriodsArray: [],
      newTodo: {
        title: '',
        period: '',
        completed: false
      },
      dialog: false
    }
  },
  created() {
    ModalEventBus.$on('open', () => {
      this.dialog = true
    })

    this.setConfig({
      store: 'period'
    })
    this.loadSettings()
    this.activePeriods = this.getSettings('activePeriods')

    // Sorting active periods for dropdown
    Object.keys(this.activePeriods).reduce((r, e) => {
      if (this.activePeriods[e] === true) {
        return this.activePeriodsArray.push(_.startCase(_.toLower(e)))
      }
    }, {})
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
