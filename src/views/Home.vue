<template>
  <div>
    Home
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="item in homepageData?.[0]?.extInfo?.banners"
        :key="item.bannersId"
      >
        <van-image width="100vw" height="160px" fit="cover" :src="item.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { ref } from "vue";
import { getHomePageData } from "../service";

export default {
  setup() {
    const homepageData = ref({});
    // 自定义函数
    (async () => {
      homepageData.value = (await getHomePageData()).data.data.blocks;
      // homepageDragonball.value = (await getDragonball()).data.datai
      console.log(homepageData.value);
    })();
    return { homepageData };
  },
};
</script>
