// store/index.ts
import { createStore } from 'vuex';
import user from './modules/user';

const store = createStore({
  strict: true,
  state: {
    platform: 'PC'
  },
  modules: { user },
});

export default store;
