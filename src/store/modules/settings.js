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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
