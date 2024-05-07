<template>
  <div>count: {{ count }}</div>
  <div>index: {{ index }}</div>
  <co-button @click="updateCount">更新count</co-button>
  <co-button @click="updateIndex">更新index</co-button>
  <co-button @click="stopWatchCount">取消监听count</co-button>
  <co-button @click="updateO">更新o.a.b.c.d</co-button>
</template>
<script>
import { ref, watch, watchEffect } from "vue";
export default {
  setup() {
    const count = ref(123);
    const index = ref(234);
    const o = ref({
      a: {
        b: {
          c: {
            d: 123,
          },
        },
      },
    });
    const updateCount = () => count.value++;
    const updateIndex = () => index.value--;
    const stopWatchCount = watch(
      [count],
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
        console.log("count changed!!");
      },
      {
        // 该watch的毁掉函数初始化执行一次
        immediate: true,
        // 深度监听
        deep: true,
      }
    );
    // watch的第一个参数表示你监听的数据源
    // 第一个参数规范：ref 或 () => ref.value
    // watch(count, () => {
    //   console.log("count更新了");
    // });
    // watch(
    //   () => count.value,
    //   () => {
    //     console.log("count更新了");
    //   }
    // );
    // 多个数据变化后执行的逻辑是相通的
    // watch([count, () => index.value], () => {
    //   console.log("index/count更新");
    // });
    const updateO = () => o.value.a.b.c.d++;
    // const updateO = () => (o.value = 123);
    watch(
      [o],
      () => {
        console.log("o被更新了！");
      },
      { deep: true }
    );
    return { count, updateCount, index, updateIndex, stopWatchCount, updateO };
  },
};
</script>
