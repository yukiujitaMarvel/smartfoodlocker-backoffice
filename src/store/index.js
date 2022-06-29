export const state = () => ({
  users: [
    {
      id: 1,
      name: 'sato',
      email: 'sato@sample.com',
      memo: 'サンプル1',
    },
    {
      id: 2,
      name: 'suzuki',
      email: 'suzuki@sample.com',
      memo: 'サンプル2',
    },
    {
      id: 3,
      name: 'tanaka',
      email: 'tanaka@sample.com',
      memo: 'サンプル3',
    },
    {
      id: 4,
      name: 'takahashi',
      email: 'takahashi@sample.com',
      memo: 'サンプル4',
    },
    {
      id: 5,
      name: 'watanabe',
      email: 'watanabe@sample.com',
      memo: 'サンプル5',
    },
    {
      id: 6,
      name: 'ito',
      email: 'ito@sample.com',
      memo: 'サンプル6',
    },
    {
      id: 7,
      name: 'yamamoto',
      email: 'yamamoto@sample.com',
      memo: 'サンプル7',
    },
    {
      id: 8,
      name: 'nakamura',
      email: 'nakamura@sample.com',
      memo: 'サンプル8',
    },
    {
      id: 9,
      name: 'kobayashi',
      email: 'kobayashi@sample.com',
      memo: 'サンプル9',
    },
    {
      id: 10,
      name: 'kato',
      email: 'kato@sample.com',
      memo: 'サンプル10',
    }
  ]
})

export const getters = {
  getUsers (state) {
    return state.users
  },
}

export const mutation = {
  addUser (state, payload) {
    state.users.push(payload.user)
  },
  updateUser (state, payload) {
    state.users.forEach((user, index) => {
      if (user.id === payload.user.id) {
        state.users.splice(index, 1, payload.user)
      }
    })
  },
  removeUser (state, payload) {
    state.users.forEach((user, index) => {
      if (user.id === payload.user.id) {
        state.users.splice(index, 1)
      }
    })
  }
}