import { LocalStorage } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

var StoreService = {
  methods: {
    ...mapActions([
      'setSetting',
      'setSettings',
      'setConfig'
    ]),
    loadSettings() {
      var storedSettings = LocalStorage.get.item('settings-' + this.getConfig().store)
      if (storedSettings) {
        this.setSettings(storedSettings)
      }
    },
    saveSettings() {
      LocalStorage.set('settings-' + this.getConfig().store, this.getSettings())
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
