<template>
<div>
  <v-toolbar app
             fixed>
    <v-btn v-if="['todo'].indexOf($route.name) > -1"
           :to="{name : 'todo'}"
           icon>
      <v-icon>playlist_add_check</v-icon>
    </v-btn>
    <v-btn v-else
           @click="router.go(-1)"
           icon>
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-toolbar-title>{{appTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn :to="{name : 'settings'}"
           icon>
      <v-icon>settings</v-icon>
    </v-btn>
  </v-toolbar>
</div>

</template>

<script>
export default {
  data: () => ({
    drawer: false,
    router: {}
  }),
  props: [
    'appTitle'
  ],
  mounted() {
    this.router = this.$router
  }
}

</script>
