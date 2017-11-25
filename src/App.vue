<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <v-app dark>
      <app-header :appTitle="appTitle"></app-header>
      <v-content>
        <v-slide-x-transition name="out-in">
          <router-view></router-view>
        </v-slide-x-transition>
      </v-content>
  </v-app>
  </div>
</template>

<script>
/*
 * Root component
 */
import AppHeader from '@/AppHeader'

export default {
  data: () => ({
    appTitle: 'ThreeTodo'
  }),
  props: {
    source: String
  },
  components: {
    AppHeader
  }
}
</script>

<style lang="stylus">
@import '~variables'

</style>
