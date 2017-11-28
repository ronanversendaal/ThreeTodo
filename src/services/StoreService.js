import { LocalStorage } from 'quasar'
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

import settings from '../store/modules/settings'

const initialSettings = _.clone(settings.state.settings)

var StoreService = {
  methods: {
    ...mapActions([
      'setSetting',
      'setSettings',
      'setConfig',
      'resetSettings'
    ]),
    loadSettings() {
      var storedSettings = LocalStorage.get.item('settings-' + this.getConfig().store)
      if (storedSettings) {
        return this.setSettings(storedSettings)
      }
      else {
        // If there are no loaded settings, create these.
        return this.saveSettings(true)
      }
    },
    saveSettings(initial) {
      if (initial) {
        // Return settings to its initial state
        LocalStorage.set('settings-' + this.getConfig().store, initialSettings[this.getConfig().store])
      }
      else {
        LocalStorage.set('settings-' + this.getConfig().store, this.getSettings())
      }
    }
  },
  computed: {
    ...mapGetters([
      'getConfig',
      'getSettings'
    ])
  }
}
export default StoreService
