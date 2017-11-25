<template>
<div>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">Amount of todo's</span>
      </v-card-title>
      <v-card-text>
        <!-- @feature: current diffculty display -->
        <v-container grid-list-md>
          <form>
            <div class="row">
              <v-flex xs6>
                <v-subheader class="pt-3">Daily</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-slider v-model="todoAmount.daily" min="1" max="5" thumb-label step="1" ticks></v-slider>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs6>
                <v-subheader class="pt-3">Monthly</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-slider v-model="todoAmount.monthly" min="1" max="5" thumb-label step="1" ticks></v-slider>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs6>
                <v-subheader class="pt-3">Yearly</v-subheader>
              </v-flex>
              <v-flex xs6>
                <v-slider v-model="todoAmount.yearly" min="1" max="10" thumb-label step="1" ticks></v-slider>
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
  props: ['todoAmount'],
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
      ModalEventBus.$emit('change-settings', this.todoAmount)
      this.dialog = false
    },
    closeDialog() {
      this.dialog = false
      ModalEventBus.$emit('dismiss')
    }
  }
}
</script>
