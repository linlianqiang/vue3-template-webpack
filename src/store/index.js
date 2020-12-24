import { createStore } from 'vuex'
import getters from './getters'
import User from './modules/user'

export default createStore({
    modules: {
        User
    },
    getters
})
