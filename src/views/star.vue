<template>
  <div>{{ a }}</div>
  <co-button @click="updateA">update A</co-button>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const a = ref(123);
    const updateA = () => a.value++;
    // watchEffect是不需要手动指定监听数据的
    // 优点：
    // 自动收集监听数据源
    // watchEffect默认执行第一次
    // 缺点：无法确定监听数据更新前后的值 只能获取更新后的最新值！！
    const stopWatch = watchEffect(() => {
      console.log("a.value:", a.value);
    });
    return { a, updateA, stopWatch };
  },
};
</script>
