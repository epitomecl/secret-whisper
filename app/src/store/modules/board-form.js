const state = {
  id: '',
  title: '',
  created_at: null
}

const getters = {
  formData: state => {
    return {
      id: state.id,
      title: state.title,
      created_at: state.created_at      
    }
  }
}

const mutations = {
  setContent (state, data) {
    state.id = data.id
    state.content = data.content
    state.created_at = new Date()
  },  
  clear() {
    state.id = ''
    state.content = ''
    state.created_at = null
  }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}