import { mapActions, createNamespacedHelpers } from 'vuex';
import useMapper from './useMapper';

const useState = (moduleName, mapper) => {
  let mapperFn = mapActions;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapActions;
  } else {
    mapper = moduleName;
  }
  return useMapper(mapper, mapperFn, true);
};

export default useState;
