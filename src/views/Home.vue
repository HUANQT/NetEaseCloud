<template>
  <!-- 背景 -->
  <div
    class="dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2"
  >
    <!-- 导航 -->
    <div class="flex justify-between items-center p-[3vw] pl-[1vw]">
      <!-- 侧边栏菜单 -->
      <div @click="showDrawer">
        <Icon icon="fontisto:nav-icon-a" class="text-[5vw]" />
      </div>
      <a-drawer
        v-model:visible="visible"
        style="color: red; width: 85vw"
        placement="left"
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-drawer>
      <!-- 搜索框 -->
      <div>
        <a-input
          v-model:value="userName"
          placeholder="Love Is Gone (Acoustic)"
          class="dark:from-[#34304b] dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]"
        >
          <template #prefix>
            <Icon icon="material-symbols:search" class="text-[5vw]" />
          </template>
          <template #suffix>
            <a-tooltip title="Extra information">
              <Icon icon="icon-park-outline:scan-code" />
            </a-tooltip>
          </template>
        </a-input>
      </div>
      <!-- 麦克风 -->
      <Icon icon="iconoir:microphone-speaking" class="text-[6vw]" />
    </div>
    <!-- 轮播图 -->
    <van-swipe
      :autoplay="3000"
      indicator-color="white"
      class="w-[90vw] mx-auto"
    >
      <van-swipe-item
        v-for="item in homepageData?.[0]?.extInfo?.banners"
        :key="item.bannersId"
      >
        <van-image
          width="90vw"
          height="180px"
          class="rounded-[3vw]"
          fit="cover"
          :src="item.pic"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 副导航 -->
    <BetterScroll
      class="w-[90%] overflow-hidden"
      :option="{ scrollY: false, scrollX: true }"
      :dep="HomeBall"
    >
      <div class="flex justify-between w-[200vw]">
        <div
          class="w-[40vw] flex flex-col items-center"
          v-for="item in HomeBall"
          :key="item.id"
        >
          <img :src="item.iconUrl" class="w-[15vw] caret-red-300" />
          <span class="text-[3vw]"> {{ item.name }} </span>
        </div>
      </div>
    </BetterScroll>
  </div>
</template>
<script lang="ts">
import BetterScroll from "../components/BetterScroll.vue";

import { ref, defineComponent } from "vue";

import { getHomePageData, getRecommend, getHomeBall } from "../service";

export default defineComponent({
  components: { BetterScroll },
  setup() {
    const visible = ref<boolean>(false);
    const userName = ref<string>("");
    const showDrawer = () => {
      visible.value = true;
    };
    // 自定义函数 --获取首页数据
    const homepageData = ref({});
    (async () => {
      homepageData.value = (await getHomePageData()).data.data.blocks;
      console.log("获取首页数据", homepageData.value);
    })();

    // 获取首页发现
    const HomeBall = ref([]);
    (async () => {
      HomeBall.value = (await getHomeBall()).data.data;
      console.log(HomeBall.value);
    })();

    // 每日推荐
    const Recommend = ref({});
    (async () => {
      Recommend.value = await getRecommend();
      console.log(Recommend.value);
    })();
    return {
      //获取首页数据
      homepageData,
      // 获取首页发现
      HomeBall,

      visible,
      showDrawer,
      userName,
    };
  },
});
</script>

<style>
.ant-input {
  background-color: rgba(0, 0, 0, 0);
}

.van-image__img {
  border-radius: 10px;
}
</style>
