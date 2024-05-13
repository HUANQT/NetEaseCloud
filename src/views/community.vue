<template>
  <div>
    <!-- 标题 -->
    <div>
      <span class="text-[6vw] flex justify-center">MV排行榜</span>
    </div>
    <!-- 导航  -->
    <van-tabs v-model:active="active">
      <van-tab title="内地" />
      <van-tab title="港台" />
      <van-tab title="欧美" />
      <van-tab title="韩国" />
      <van-tab title="日本" />
      <div
        class="padding20X paddingX14 van-bgcolor-white mt-[4vw]"
        v-for="item in MvAll"
        :key="item.id"
        @click="mvsingerId(item.id)"
      >
        <div class="w-[90vw] mx-auto">
          <img :src="item.cover" alt="" class="rounded-[4vw]" />
          <div class="pl-[2vw]">
            <div class="mt-[2vw]">
              {{ item.name }}
            </div>
            <div class="text-[2vw] ml-[4vw] mb-[4vw]">
              {{ item.artistName }}
            </div>
          </div>
        </div>
      </div>
    </van-tabs>
    <!-- 底部导航 -->
    <div class="fixed bottom-0">
      <div class="w-[100vw] h-[5vh] bg-white flex justify-around">
        <div class="mt-[2vw]">
          <router-link to="/" :class="{ 'text-red-500': $route.path === '/' }">
            <div class="flex flex-col items-center">
              <Icon icon="ri:netease-cloud-music-fill" />
              <span> 首页 </span>
            </div>
          </router-link>
        </div>
        <div class="mt-[2vw]">
          <router-link
            to="/community"
            :class="{ 'text-red-500': $route.path === '/community' }"
          >
            <div class="flex flex-col items-center">
              <Icon icon="icon-park-outline:ranking-list" />
              <span> 排行榜 </span>
            </div>
          </router-link>
        </div>
        <div class="mt-[2vw]">
          <router-link
            to="/myUser"
            :class="{ 'text-red-500': $route.path === '/myUser' }"
          >
            <div class="flex flex-col items-center">
              <Icon icon="ph:user-light" />
              <span> 我的 </span>
            </div>
          </router-link>
        </div>
        <div class="mt-[2vw]">
          <router-link to="/">
            <div class="flex flex-col items-center">
              <Icon icon="gridicons:reader-following-conversation" />
              <span> 关注 </span>
            </div>
          </router-link>
        </div>
        <div class="mt-[2vw]">
          <router-link to="/">
            <div class="flex flex-col items-center">
              <Icon icon="iconoir:community" />
              <span> 社区 </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect, watch, onMounted } from "vue";
import { getMvAll } from "../service";
import { useRequest } from "../hooks/useRequest.js";
import { useRouter } from "vue-router";
const router = useRouter();

const active = ref(0);
const mvName = ref(["内地", "港台", "欧美", "韩国", "日本"]);
const area = ref("内地");
const { data: MvAll, run: fnMvData } = useRequest(
  () => getMvAll({ limit: "50", area: area.value, cookie: "" }),
  {
    deps: [area],
    manual: true,
    formatResult(response) {
      return response.data.data;
    },
  }
);

// 点击事件
const mvsingerId = (id) => {
  // 获取我点击的MvAll.id
  console.log("Clicked ID", id);
  // 带着id跳转到videoPlayerView页面
  router.push({ name: "videoPlayerView", params: { id } });
};

// 监听active的变化
watch(active, (newActive) => {
  // 更新area的值为mvName中对应索引的值
  area.value = mvName.value[newActive];
  // 重新发送fnMvData请求
  fnMvData();
});

onMounted(() => {
  fnMvData();
});
</script>
