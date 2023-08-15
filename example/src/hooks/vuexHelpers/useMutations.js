import { mapMutations, createNamespacedHelpers } from 'vuex';
import useMapper from './useMapper';

const useState = (moduleName, mapper) => {
  let mapperFn = mapMutations;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};

export default useState;
