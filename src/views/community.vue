<template>
  <div>
    <!-- 标题 -->
    <div>
      <span class="text-[6vw] flex justify-center">MV排行榜</span>
    </div>
    <!-- 导航  -->
    <van-tabs v-model="active" animated title-active-color="#000">
      <van-tab name="内地" title="内地">
        <div class="padding20X paddingX14 van-bgcolor-white">内容1</div>
      </van-tab>
      <van-tab name="港台" title="港台">
        <div class="padding20X paddingX14 van-bgcolor-white">内容2</div>
      </van-tab>
      <van-tab name="欧美" title="欧美">
        <div class="padding20X paddingX14 van-bgcolor-white">内容3</div>
      </van-tab>
      <van-tab name="韩国" title="韩国">
        <div class="padding20X paddingX14 van-bgcolor-white">内容4</div>
      </van-tab>
      <van-tab name="日本" title="日本">
        <div class="padding20X paddingX14 van-bgcolor-white">内容4</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref, watchEffect } from "vue";

import { useRequest } from "../hooks/useRequest.js";

import { getMvAll } from "../service";

const active = "港台";
const { data: MvAll, run } = await useRequest(() =>
  getMvAll({ limit: "50", area: "内地", cookie: "" })
);
watchEffect(() => console.log(MvAll.value));
</script>
