import { computed } from 'vue';
import { useStore, Store, mapState, mapGetters, mapActions, mapMutations, createNamespacedHelpers } from 'vuex';

type ComputedRefProps<T> = {
  [K in keyof T]: ReturnType<typeof computed>;
};

type MappedFunctions<T> = {
  [K in keyof T]: (...args: any[]) => any;
};

const useMapper = <T>(
  mapper: string[] | Record<string, string>,
  mapFn: (fields: string[] | Record<string, string>) => Record<string, (...args: any[]) => any>,
  isFn = false
): T => {
  const store: Store<any> = useStore();
  const storeStateFns: Record<string, (...args: any[]) => any> = mapFn(mapper);
  const storeState: Record<string, any> = {};

  Object.keys(storeStateFns).forEach(keyFn => {
    const fn = storeStateFns[keyFn].bind({ $store: store });
    storeState[keyFn] = isFn ? fn : computed(fn);
  });

  return storeState as T;
};


export const useState = <M extends Record<string, any>, K extends keyof M>(moduleName: string | string[], mapper?: K[]): ComputedRefProps<Pick<M, K | keyof M>> => {
  let mapperFn = mapState;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  } else {
    mapper = moduleName as K[];
  }

  return useMapper(mapper! as string[], mapperFn);  // added assertion here
};

export const useGetters = <M extends Record<string, any>, K extends keyof M>(moduleName: string | string[], mapper?: K[]): ComputedRefProps<Pick<M, K | keyof M>> => {
  let mapperFn = mapGetters;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters;
  } else {
    mapper = moduleName as K[];
  }
  return useMapper(mapper! as string[], mapperFn);  // added assertion here
};

export const useMutations = <M extends Record<string, (...args: any[]) => any>>(moduleName: string | string[], mapper?: (keyof M)[]): MappedFunctions<M> => {
  let mapperFn = mapMutations;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapMutations;
  }
  else {
      mapper = moduleName as (keyof M)[];
  }
  return useMapper(mapper! as string[], mapperFn, true);  // added assertion here
};

export const useActions = <M extends Record<string, (...args: any[]) => any>>(moduleName: string | string[], mapper?: (keyof M)[]): MappedFunctions<M> => {
  let mapperFn = mapActions;
  if (typeof moduleName === 'string' && moduleName.length > 0) {
      mapperFn = createNamespacedHelpers(moduleName).mapActions;
  }
  else {
      mapper = moduleName as (keyof M)[];
  }
  return useMapper(mapper! as string[], mapperFn, true);  // added assertion here
};