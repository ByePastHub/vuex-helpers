<script setup lang="ts">
import type { UserInfo } from '@/store/modules/user'
import { useState, useGetters, useMutations, useActions } from 'vuex-helpers';

const { platform } = useState(['platform']);
const { userInfo } = useState('user', ['userInfo']) as unknown as { userInfo: UserInfo};
const { getUserId } = useGetters('user', ['getUserId']);
const { setUserInfo } = useMutations('user', ['setUserInfo']);
const { getUserInfo } = useActions('user', ['getUserInfo']);

setUserInfo({ name: '获取中...', userId: '' })
getUserInfo()
setTimeout(() => {
  console.log('platform', platform.value)
  console.log('userInfo', userInfo)
  console.log('getUserId', getUserId.value)
}, 2100)

console.log('platform', platform.value)
console.log('userInfo', userInfo)
console.log('getUserId', getUserId.value)
console.log('-----------------')
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
