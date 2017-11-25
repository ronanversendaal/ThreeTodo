<template>
<div>
  <v-dialog v-model="dialog">
    <v-card>
      <v-card-title>
        <span class="headline">Amount of todo's</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <form>
            <div class="row">
              <v-flex xs10>
                <v-subheader>Daily</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field  v-model="todoAmount.daily"
                                required></v-text-field>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs10>
                <v-subheader>Monthly</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field  v-model="todoAmount.monthly"
                                required></v-text-field>
              </v-flex>
            </div>
            <div class="row">
              <v-flex xs10>
                <v-subheader>Yearly</v-subheader>
              </v-flex>
              <v-flex xs2>
                <v-text-field  v-model="todoAmount.yearly"
                                required></v-text-field>
              </v-flex>
            </div>
          </form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat
               @click.native="dialog = false">Close</v-btn>
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
    }
  }
}
</script>
