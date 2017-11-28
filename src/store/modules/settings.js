import TodoSettings from './settings/todo'

const state = {
  settings: {
    todo: TodoSettings
  },
  config: {
    store: ''
  }
}

const getters = {
  getConfig: (state) => (store) => {
    if (typeof store === 'undefined') {
      return state.config
    }
    return state.config[store]
  },
  getSettings: (state) => (key) => {
    if (typeof key === 'undefined') {
      return state.settings[state.config.store]
    }
    return state.settings[state.config.store][key]
  }
}

const mutations = {
  saveConfig: (state, config) => {
    state.config = config
  },
  saveSetting: (state, payload) => {
    // Payload has to have a payload and value
    state.settings[state.config.store][payload.key] = payload.value
  },
  saveSettings: (state, payload) => {
    state.settings[state.config.store] = payload
  },
  resetSettings: (state, payload) => {

    // Needs a solution where the initial state does not get the same values as the current state

    // console.log(initialSettings, state.settings)
    // for (let f in initialSettings) {
    //   Vue.set(initialSettings[payload.store], f, state.settings[payload.store])
    // }

    // console.log(initialSettings, state.settings.todo)
    // return initialSettings
    // console.log('initial : ', initialSettings)
    // state.settings[payload.store] = initialSettings[payload.store]
    // console.log(initialSettings[payload.store])
  }
}

const actions = {
  setSetting: (context, payload) => {
    context.commit('saveSetting', payload)
  },
  setSettings: (context, payload) => {
    context.commit('saveSettings', payload)
  },
  setConfig: (context, payload) => {
    context.commit('saveConfig', payload)
  },
  resetSettings: (context, payload) => {
    context.commit('resetSettings', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
