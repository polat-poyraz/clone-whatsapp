import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    thisUser: undefined,
    users: [
      {
        id: 0,
        name: 'React',
        avatar: 'https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png',
        last_message: '',
        messages: [],
        class: '',
      },
      {
        id: 1,
        name: 'Vue',
        avatar: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR.jpg',
        last_message: 'Merhaba',
        messages: [],
        class: '',
      },
      {
        id: 2,
        name: 'Angular',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
        last_message: 'Merhaba',
        messages: [],
        class: '',
      },
      {
        id: 3,
        name: 'Javascript',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        last_message: '',
        messages: [],
        class: '',
      },
      {
        id: 4,
        name: 'Nuxt',
        avatar: 'https://miro.medium.com/max/512/1*dOizsWycMALIUfqbpNvaMQ.png',
        last_message: '',
        messages: [],
        class: '',
      },
      {
        id: 5,
        name: 'Go',
        avatar: 'https://miro.medium.com/max/1200/1*i2skbfmDsHayHhqPfwt6pA.png',
        last_message: '',
        messages: [],
        class: '',
      }
    ],
    me: {
      name: 'Polat',
      surname: 'Poyraz',
      avatar: 'https://i.pinimg.com/originals/be/a7/c0/bea7c0cbe785ede2b4523dd7c75220d4.jpg'
    }
  },
  getters: {
    users (state) {
      return state.users
    },
    me (state) {
      return state.me
    },
    messages (state) {
      return state.users[state.thisUser]
    },
    thisUser (state) {
      return state.thisUser
    }
  },
  mutations: {
    chatMutation (state, data) {
      state.thisUser = data
    },
    sendMessage (state, block) {
      state.users[state.thisUser].messages.push(block)
    },
    classClear (state) {
      for (let i = 0; i < state.users.length; i++){
        if (state.users[i].id !== state.thisUser){
          state.users[i].class = ""
        }
      }
    },
    removeMessage (state, block) {
      if (confirm('Uyarı : Bu mesajı silerseniz birdaha eri getiremezsiniz!')) {
        state.users[block.user].messages.splice(block.index, 1)

        // Update
        for (let i = 0; i < state.users[block.user].messages.length; i++) {
          state.users[block.user].messages[i].id = i
        }
      }
    },
    botChat (state) {
      const userMessages = state.users[state.thisUser].messages

      setTimeout (() => {
        if (userMessages.length <= 1) {
          userMessages.push({
            id: userMessages.length,
            date: `${new Date().getHours()}:${new Date().getMinutes()}`,
            message: `Hello I am ${state.users[state.thisUser].name}`,
            mode: 'get-message'
          })
        }
      }, 1300)
    },
  },
  actions: {
    CHAT_MUTATİON ({ commit }, data) {
      commit("chatMutation", data)
      commit("classClear")
      // bot chat function
    },
    SEND_MESSAGE ({ commit }, block) {
      commit("sendMessage", block)
      commit("botChat")
    }
  },
  modules: {
  }
})
