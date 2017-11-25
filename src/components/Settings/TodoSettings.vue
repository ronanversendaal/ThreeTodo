<template>
<div>
  <v-container fluid
               pa-0
               fill-height>
    <v-layout>
      <v-flex d-block>
        <v-list three-line
                subheader>
          <v-subheader>General settings</v-subheader>
          <v-list-tile avatar
                       v-ripple
                       @click.native.stop="setTodoAmount">
            <v-list-tile-content>
              <v-list-tile-title>Amount of tasks</v-list-tile-title>
              <v-list-tile-sub-title>Change the amount of days per period
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <todo-amount-modal :todoAmount="getSettings('todoAmount')"></todo-amount-modal>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>

<script>
import StoreService from '../../services/StoreService'
import TodoAmountModal from '../Modal/Settings/TodoSettings/TodoAmountModal'

import { ModalEventBus } from './../../main'

export default {
  mixins: [
    StoreService
  ],
  components: {
    TodoAmountModal
  },
  methods: {
    setTodoAmount(key, value) {
      ModalEventBus.$emit('open', true)
    }
  },
  created() {
    // Setup store config an load settings
    this.setConfig({
      store: 'todo'
    })
    this.loadSettings()

    // Modal actions for reloading/saving settings on opening/closing
    ModalEventBus.$on('dismiss', () => {
      this.loadSettings()
    })
    ModalEventBus.$on('change-settings', (key) => {
      this.saveSettings()
    })
  }
}

</script>
