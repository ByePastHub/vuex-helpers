<script setup lang="ts">
import { useState, useGetters, useMutations, useActions } from '@bye_past/vuex-helpers';

// useState、useGetters 返回值都是响应式数据
const { platform } = useState(['platform']); // 没有命名空间模块
const { userInfo, loading } = useState('user', ['userInfo', 'loading']); // user命名空间模块
const { getUserId } = useGetters('user', ['getUserId']);
const { setUserInfo } = useMutations('user', ['setUserInfo']);
const { getUserInfo } = useActions('user', ['getUserInfo']);

setUserInfo({ name: '获取中...', userId: '' })
getUserInfo()

console.log('platform', platform.value)
console.log('userInfo: ', userInfo, 'loading: ',loading.value)
console.log('getUserId', getUserId.value)
console.log('-----------------')

setTimeout(() => {
  console.log('platform', platform.value)
  console.log('userInfo: ', userInfo, 'loading: ',loading.value)
  console.log('getUserId', getUserId.value)
}, 2100)
</script>

<template>
  <main>
    <div>platform: {{ platform }}</div>
    <div>name: {{ userInfo.name || '--' }}</div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
