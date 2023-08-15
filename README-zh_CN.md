# Vuex Helpers

`vuex-helpers` 是一个用于 Vue 3 和 Vuex 4 的辅助库，简化了 Vuex 的 mapper 函数的使用。该库为 Vuex 提供了一组钩子函数，使得在 Vue 组件中使用 Vuex 更加简洁。


## language

<a href="./README-zh_CN.md">中文</a></br>
<a href="./README.md">English</a>

## Installation

使用 npm：`npm install vuex-helpers --save`

## Usage

### 1. `useState`

用于将 Vuex actions 映射到 Vue 组件：

```javascript
import { useState } from 'vuex-helpers';

const actions = useState(['myAction']);
```

### 2. `useGetters`

用于将 Vuex getters 映射到 Vue 组件：

```javascript
import { useGetters } from 'vuex-helpers';

const getters = useGetters(['myGetter']);
```

### 3. `useMutations`

用于将 Vuex mutations 映射到 Vue 组件：

```javascript
import { useMutations } from 'vuex-helpers';

const mutations = useMutations(['myMutation']);
```

### 4. `useActions`

用于将 Vuex actions 映射到 Vue 组件：

```javascript
import { useActions } from 'vuex-helpers';

const actions = useActions(['myAction']);
```

### 贡献
欢迎提交 PR 和 Issues！
