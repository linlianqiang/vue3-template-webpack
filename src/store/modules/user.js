import { userLogin } from '@/api/user.js'
import { setStorage } from '@/utils/storage.js'
const User = {
    state: {
        // userName: ''
    },
    mutations: {
        SET_USER_INFO(state, data) {
            // state.userName = data.userName
        }
    },
    actions: {
        async getUserInfo({ commit }, param) {
            const userInfo = await userLogin(param)
            setStorage('userInfo', userInfo)
            // commit('SET_USER_INFO', data)
        }
    }
};

export default User;