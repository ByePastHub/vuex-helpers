# Vuex Helpers

`vuex-helpers` 是一个用于 Vue 3 和 Vuex 4 的辅助库，简化了 Vuex 的 mapper 函数的使用。该库为 Vuex 提供了一组钩子函数，使得在 Vue 组件中使用 Vuex 更加简洁。


## 语言

<a href="./README-zh_CN.md">中文</a></br>
<a href="./README.md">English</a>

## 安装

使用 npm：`npm install @bye_past/vuex-helpers --save`

## 使用

### 快速上手

#### 使用
```javascript
import { useState, useGetters, useMutations, useActions } from '@bye_past/vuex-helpers';

const { platform } = useState(['platform']); // 没有命名空间模块
const { userInfo, loading } = useState('user', ['userInfo', 'loading']); // user命名空间模块
const { getUserId } = useGetters('user', ['getUserId']);
const { setUserInfo } = useMutations('user', ['setUserInfo']);
const { getUserInfo } = useActions('user', ['getUserInfo']);

// useState、useGetters 返回值都是响应式数据
```
#### store
```typescript
// store/index.ts
import { createStore } from 'vuex';

const store = createStore({
  strict: true,
  state: {
    platform: 'PC'
  },
  modules: {
    user: {
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
    }
  },
});

interface UserInfo {
  name: string;
  userId: string;
}

interface State {
  userInfo: UserInfo;
  loading: boolean
}

export default store;
```

### 1. `useState`

用于将 Vuex actions 映射到 Vue 组件：

```javascript
import { useState } from 'vuex-helpers';

const actions = useState(['myAction']);
```

### 2. `useGetters`

用于将 Vuex getters 映射到 Vue 组件：

```javascript
import { useGetters } from 'vuex-helpers';

const getters = useGetters(['myGetter']);
```

### 3. `useMutations`

用于将 Vuex mutations 映射到 Vue 组件：

```javascript
import { useMutations } from 'vuex-helpers';

const mutations = useMutations(['myMutation']);
```

### 4. `useActions`

用于将 Vuex actions 映射到 Vue 组件：

```javascript
import { useActions } from 'vuex-helpers';

const actions = useActions(['myAction']);
```

### 贡献
欢迎提交 PR 和 Issues！
