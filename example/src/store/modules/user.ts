// store/modules/user.ts
interface UserInfo {
  name: string;
  userId: string;
}

interface State {
  userInfo: UserInfo;
  loading: boolean
}

export default {
  namespaced: true,
  state: {
    userInfo: {
      name: '',
      userId: '',
    },
    loading: false
  } as State,

  getters: {
    getUserId: (state: State) => state.userInfo.userId,
    isLogin: (state: State) => !!state.userInfo.userId,
  },

  mutations: {
    setUserInfo: (state: State, userInfo: UserInfo) => (state.userInfo = userInfo),
    setLoading: (state: State, loading: boolean) => (state.loading = loading),
  },

  actions: {
    getUserInfo: ({ commit }: { commit: (mutation: string, data: any) => void }) => new Promise(resolve => {
      commit('setLoading', true)
      setTimeout(() => {
        const data = {
          name: '张三',
          userId: '1',
        };
        resolve(data);
        commit('setUserInfo', data);
        commit('setLoading', false)
      }, 2000)
    })
  },
};
