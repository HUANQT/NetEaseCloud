<template>
  <router-view />
  <!-- 底部导航 -->
  <!-- <div class="fixed bottom-0">
    <div class="w-[100vw] h-[5vh] bg-red-300 flex justify-around">
      <div>
        <router-link to="/"> 首页 </router-link>
      </div>
      <div>
        <router-link to="/Mine"> 排行榜 </router-link>
      </div>
      <div>
        <router-link to="/Mine"> 我的 </router-link>
      </div>
      <div>
        <router-link to="/Mine"> 关注 </router-link>
      </div>
      <div>
        <router-link to="/Mine"> 社区 </router-link>
      </div>
    </div>
  </div> -->
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
});
</script>
