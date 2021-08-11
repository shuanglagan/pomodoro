import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const time = parseInt(process.env.VUE_APP_TIME)
const timeBreak = parseInt(process.env.VUE_APP_TIME_BREAK)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sound: 'alarm.mp3',
    list: [],
    finised: [],
    current: '',
    timeleft: time,
    isBreak: false,
    // 0 停止
    // 1 倒數中
    // 2 暫停
    status: 0
  },
  mutations: {
    // state 代表上面的 state，data 代表丟進function 的東西
    selectSound (state, data) {
      state.sound = data
    },
    addList (state, data) {
      state.list.push({
        name: data,
        edit: false,
        model: data
      })
    },
    editList (state, data) {
      state.list[data].edit = true
    },
    changeList (state, data) {
      state.list[data].name = state.list[data].model
      state.list[data].edit = false
    },
    cancellist (state, data) {
      state.list[data].modek = state.list[data].name
      state.list[data].edit = false
    },
    delList (state, data) {
      state.list.splice(data, 1)
    },
    start (state) {
      if (state.isBreak) {
        state.current = '休息一下'
      } else {
        state.current = state.list.shift().name
      }
    },
    changeStatus (state, data) {
      state.status = data
    },
    countdown (state) {
      state.timeleft--
    },
    addFinish (state) {
      state.finised.push(state.current)
      state.current = ''
      if (state.list.length > 0) {
        state.isBreak = !state.isBreak
      }
      state.timeleft = state.isBreak ? timeBreak : time
    }
  },
  getters: {
    list (state) {
      return state.list
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    createPersistedState({
      key: 'pomodoro'
    })
  ]
})
