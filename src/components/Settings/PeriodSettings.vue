<template>
<div>
  <v-container fluid
               pa-0
               fill-height>
    <v-layout>
      <v-flex d-block>
        <v-list three-line
                subheader>
          <v-subheader>Period settings</v-subheader>
          <v-list-tile avatar
                       v-ripple
                      @click.native.stop="setActivePeriodsAmount">
            <v-list-tile-content>
              <v-list-tile-title>Active periods</v-list-tile-title>
              <v-list-tile-sub-title>Daylies, Monthlies, Yearlies</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar
                       v-ripple
                       three-line>
            <v-list-tile-content>
              <v-list-tile-title>Retain todo's</v-list-tile-title>
              <v-list-tile-sub-title>Whether your incomplete tasks will persist after the period expires</v-list-tile-sub-title>
            </v-list-tile-content>
              <v-list-tile-action>
                <v-switch></v-switch>
              </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <active-period-settings-modal :activePeriods="getSettings('activePeriods')"></active-period-settings-modal>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>

<script>
import StoreService from '../../services/StoreService'
import ActivePeriodSettingsModal from '../Modal/Settings/PeriodSettings/ActivePeriodSettingsModal'

import { ModalEventBus } from './../../main'
export default {
  mixins: [
    StoreService
  ],
  components: {
    ActivePeriodSettingsModal
  },
  methods: {
    setActivePeriodsAmount(key, value) {
      ModalEventBus.$emit('open', true)
    }
  },
  created() {
    // Setup store config an load settings
    this.setConfig({
      store: 'period'
    })
    this.loadSettings()

    // Modal actions for reloading/saving settings on opening/closing
    ModalEventBus.$on('dismiss', () => {
      this.saveSettings(true)
    })
    ModalEventBus.$on('change-settings', (key) => {
      this.saveSettings()
    })
  }
}

</script>
