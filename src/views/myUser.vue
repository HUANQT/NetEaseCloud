<template>
  <div ref="ele" class="w-[300px] h-[400px] bg-orange-400">
    <i @click="toggle"
      >{{ isFullscreen ? "退出" : "进入" }}全屏{{ isFullscreen }}</i
    >
  </div>
  <button @click="toggle">进入ele全屏</button>
  <button @click="run">进入ele全屏</button>
</template>
<script>
import { ref, watchEffect } from "vue";
import { useRequest } from "../hooks/useRequest.js";
import { getHomePageData } from "../service";
export default {
  setup() {
    const ele = ref();

    const { data, run } = useRequest(getHomePageData, {
      manual: true,
      // 格式化整理
      formateResult(response) {
        return response.data.data.blocks;
      },
    });
    // watchEffect(() => console.log(data.value?.data.data.blocks));
    watchEffect(() => console.log(data.value));
    return { run };
  },
};
</script>
