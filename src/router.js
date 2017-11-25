import Vue from 'vue'
import VueRouter from 'vue-router'

import Todo from '@/Todo.vue'

Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
 */
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  routes: [
    { name: 'todo', path: '/todo', component: Todo, icon: 'playlist_add_check', menu: true },
    { name: 'settings',
      path: '/settings',
      component: load('Settings'),
      icon: 'settings',
      menu: false,
      children: [
        {
          name: 'settings.todo',
          path: 'todo',
          component: load('Settings/TodoSettings')
        },
        {
          name: 'settings.period',
          path: 'period',
          component: load('Settings/PeriodSettings')
        }
      ] },
    { path: '*', redirect: { name: 'todo' } }
  ]
})
