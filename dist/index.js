import { computed } from 'vue';
import { createNamespacedHelpers, useStore, mapState, mapGetters, mapMutations, mapActions } from 'vuex';

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
const useState = (moduleName, mapper) => {
    let mapperFn = mapState;
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState;
    }
    else {
        mapper = moduleName;
    }
    return useMapper(mapper, mapperFn); // added assertion here
};
const useGetters = (moduleName, mapper) => {
    let mapperFn = mapGetters;
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters;
    }
    else {
        mapper = moduleName;
    }
    return useMapper(mapper, mapperFn); // added assertion here
};
const useMutations = (moduleName, mapper) => {
    let mapperFn = mapMutations;
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapMutations;
    }
    else {
        mapper = moduleName;
    }
    return useMapper(mapper, mapperFn, true); // added assertion here
};
const useActions = (moduleName, mapper) => {
    let mapperFn = mapActions;
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapActions;
    }
    else {
        mapper = moduleName;
    }
    return useMapper(mapper, mapperFn, true); // added assertion here
};

export { useActions, useGetters, useMutations, useState };
