# Vuex Helpers

`vuex-helpers` is a utility library for Vue 3 and Vuex 4, simplifying the use of Vuex's mapper functions. This library provides a set of hooks for Vuex, making it more concise to use Vuex in Vue components.

## language

<a href="./README-zh_CN.md">中文</a></br>
<a href="./README.md">English</a>

## Installation

With npm: `npm install vuex-helpers --save`

## Usage

### 1. `useState`

For mapping Vuex actions to your Vue component:

```javascript
import { useState } from 'vuex-helpers';

const actions = useState(['myAction']);
```

### 2. `useGetters`

For mapping Vuex getters to your Vue component:

```javascript
import { useGetters } from 'vuex-helpers';

const getters = useGetters(['myGetter']);
```

### 4. `useMutations`

For mapping Vuex mutations to your Vue component:

```javascript
import { useMutations } from 'vuex-helpers';

const mutations = useMutations(['myMutation']);
```

### 4. `useActions`

For mapping Vuex actions to your Vue component:

```javascript
import { useActions } from 'vuex-helpers';

const actions = useActions(['myAction']);
```

### Contributions
PRs and Issues are welcome!
