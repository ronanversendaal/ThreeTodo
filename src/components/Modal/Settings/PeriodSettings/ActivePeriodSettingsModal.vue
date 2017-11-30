<template>
<div>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">Set the active periods</span>
      </v-card-title>
      <v-card-text>
        <!-- @feature: current diffculty display -->
        <v-container grid-list-md>
          <form>
            <div class="row">
              <v-flex xs9>
                <v-subheader>Daily</v-subheader>
              </v-flex>
              <v-flex xs3>
                <v-switch class="pt-2" v-model="activePeriods.daily"></v-switch>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs9>
                <v-subheader>Monthly</v-subheader>
              </v-flex>
              <v-flex xs3>
                <v-switch class="pt-2" v-model="activePeriods.monthly"></v-switch>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs9>
                <v-subheader>Yearly</v-subheader>
              </v-flex>
              <v-flex xs3>
                <v-switch  class="pt-2" v-model="activePeriods.yearly"></v-switch>
              </v-flex>
            </div>
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat
               @click.native="closeDialog()">Close</v-btn>
        <v-btn color="primary darken-1"
               flat
               @click.prevent="submit" >Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</div>

</template>

<script>
import { ModalEventBus } from './../../../../main'

export default {
  props: ['activePeriods'],
  data() {
    return {
      dialog: false
    }
  },
  created() {
    ModalEventBus.$on('open', () => {
      this.dialog = true
    })
  },
  methods: {
    submit() {
      ModalEventBus.$emit('change-settings', this.activePeriods)
      this.dialog = false
    },
    closeDialog() {
      this.dialog = false
      ModalEventBus.$emit('dismiss')
    }
  }
}
</script>
