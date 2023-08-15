import { computed } from 'vue';
import { useStore, mapGetters, mapActions, mapMutations, createNamespacedHelpers } from 'vuex';

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

export const useState = (moduleName, mapper) => {
  let mapperFn = mapActions;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};

export const useGetters = (moduleName, mapper) => {
  let mapperFn = mapGetters;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn);
};

export const useMutations = (moduleName, mapper) => {
  let mapperFn = mapMutations;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};

export const useActions = (moduleName, mapper) => {
  let mapperFn = mapActions;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};
