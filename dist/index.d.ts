import { computed } from 'vue';
type ComputedRefProps<T> = {
    [K in keyof T]: ReturnType<typeof computed>;
};
type MappedFunctions<T> = {
    [K in keyof T]: (...args: any[]) => any;
};
export declare const useState: <M extends Record<string, any>, K extends keyof M>(moduleName: string | string[], mapper?: K[] | undefined) => ComputedRefProps<Pick<M, K | keyof M>>;
export declare const useGetters: <M extends Record<string, any>, K extends keyof M>(moduleName: string | string[], mapper?: K[] | undefined) => ComputedRefProps<Pick<M, K | keyof M>>;
export declare const useMutations: <M extends Record<string, (...args: any[]) => any>>(moduleName: string | string[], mapper?: (keyof M)[] | undefined) => MappedFunctions<M>;
export declare const useActions: <M extends Record<string, (...args: any[]) => any>>(moduleName: string | string[], mapper?: (keyof M)[] | undefined) => MappedFunctions<M>;
export {};
