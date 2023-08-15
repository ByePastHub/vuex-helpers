import { computed } from 'vue';
import { useStore } from 'vuex';

const useMapper = (mapper, mapFn, isFn = false) => {
  const store = useStore();

  const storeStateFns = mapFn(mapper);
  const storeState = {};
  Object.keys(storeStateFns).forEach(keyFn => {
    const fn = storeStateFns[keyFn].bind({ $store: store });
    storeState[keyFn] = isFn ? fn : computed(fn);
  });

  return storeState;
};

export default useMapper;
