// store/modules/user.ts
export interface UserInfo {
  name: string;
  userId: string;
}

interface State {
  userInfo: UserInfo;
}

export default {
  namespaced: true,
  state: {
    userInfo: {
      name: '',
      userId: '',
    }
  } as State,

  getters: {
    getUserId: (state: State) => state.userInfo.userId,
  },

  mutations: {
    setUserInfo: (state: State, userInfo: UserInfo) => (state.userInfo = userInfo),
  },

  actions: {
    getUserInfo: ({ commit }: { commit: (mutation: string, data: UserInfo) => void }) => new Promise(resolve => {
      setTimeout(() => {
        const data = {
          name: '张三',
          userId: '1',
        };
        resolve(data);
        commit('setUserInfo', data);
      }, 2000)
    })
  },
};
