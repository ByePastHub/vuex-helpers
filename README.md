# Vuex Helpers

`vuex-helpers` is a utility library for Vue 3 and Vuex 4, simplifying the use of Vuex's mapper functions. This library provides a set of hooks for Vuex, making it more concise to use Vuex in Vue components.

## Language

<a href="./README-zh_CN.md">中文</a></br>
<a href="./README.md">English</a>

## Installation

With npm: `npm install @bye_past/vuex-helpers --save`

## Usage
### Get started

#### use
```javascript
import { useState, useGetters, useMutations, useActions } from '@bye_past/vuex-helpers';

const { platform } = useState(['platform']); // no namespace module
const { userInfo, loading } = useState('user', ['userInfo', 'loading']); // user namespace module
const { getUserId } = useGetters('user', ['getUserId']);
const { setUserInfo } = useMutations('user', ['setUserInfo']);
const { getUserInfo } = useActions('user', ['getUserInfo']);

// The return values ​​of useState and useGetters are all responsive data
```
#### Store
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

For mapping Vuex actions to your Vue component:

```javascript
import { useState } from 'vuex-helpers';

const actions = useState(['myAction']);
```

### 2. `useGetters`

For mapping Vuex getters to your Vue component:

```javascript
import { useGetters } from 'vuex-helpers';

const getters = useGetters(['myGetter']);
```

### 4. `useMutations`

For mapping Vuex mutations to your Vue component:

```javascript
import { useMutations } from 'vuex-helpers';

const mutations = useMutations(['myMutation']);
```

### 4. `useActions`

For mapping Vuex actions to your Vue component:

```javascript
import { useActions } from 'vuex-helpers';

const actions = useActions(['myAction']);
```

### Contributions
PRs and Issues are welcome!
