<template>
<div>
  <v-container fluid
               pa-0
               fill-height>
    <v-layout>
      <v-flex d-block>
        <v-list three-line
                subheader>
          <v-slide-x-transition name="out-in">
            <router-view></router-view>
          </v-slide-x-transition>
          <v-list-tile avatar
                       v-ripple 
                       :to="{name: 'settings.todo'}">
            <v-list-tile-content>
              <v-list-tile-title>General settings</v-list-tile-title>
              <v-list-tile-sub-title>Change the settings for your todo's</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile avatar
                       v-ripple
                       :to="{name : 'settings.period'}">
            <v-list-tile-content>
              <v-list-tile-title>Period settings</v-list-tile-title>
              <v-list-tile-sub-title>Change time related settings</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-divider></v-divider>
        <v-list three-line
                subheader>
          <v-subheader>Other settings</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-action>
              <v-checkbox></v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
              <v-list-tile-sub-title>Allow notifications/reminders at the beginning of a period</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</div>

</template>

<script>

</script>

<style>
</style>
