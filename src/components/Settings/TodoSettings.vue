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
                       @click="setDaily">
            <v-list-tile-content>
              <v-list-tile-title>Amount of tasks</v-list-tile-title>
              <v-list-tile-sub-title>Change the amount of days per period 
                {{getSettings('todoAmount').daily}}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>

<script>
import { LocalStorage } from 'quasar'
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'setSetting',
      'setSettings',
      'setConfig'
    ]),
    setDaily(key, value) {
      this.getSettings('todoAmount').daily++
      this.saveSettings()
    },
    loadSettings() {
      var storedSettings = LocalStorage.get.item('settings-' + this.getConfig().store)

      this.setSettings(storedSettings)
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
  },
  created() {
    this.setConfig({
      store: 'todo'
    })
    this.loadSettings()
  }
}

</script>
