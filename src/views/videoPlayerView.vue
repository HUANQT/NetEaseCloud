<template>
  <div class="h-[100vh] w-[100vw] bg-black overflow-hidden">
    <!-- 导航 -->
    <div class="w-[90vw] mx-auto mt-[4vw] flex justify-between items-center">
      <!-- 返回 -->
      <router-link to="/community">
        <div>
          <Icon icon="bytesize:arrow-left" class="text-[6vw] text-[#fff]" />
        </div>
      </router-link>
      <div class="text-[6vw] flex">
        <!-- 悬浮窗 -->
        <Icon
          icon="tabler:window-minimize"
          style="color: #fff"
          class="mr-[4vw]"
        />
        <Icon icon="ri:more-2-fill" style="color: #fff" />
      </div>
    </div>
    <!-- 视屏播放 -->
    <div class="w-[100vw] mt-[20vh]">
      <video :src="MvUrl?.url" autoplay preload="auto"></video>
    </div>
    <!-- 介绍 -->
    <div class="w-[90vw] mx-auto h-[30vh] flex text-[#fff] relative mt-[20vw]">
      <div class="w-[80vw] absolute bottom-0">
        <div class="flex-1 mr-[10vw]">
          <!-- 歌手头像 -->
          <div class="flex items-center mb-[3vw]">
            <img
              :src="Detail?.artists[0]?.img1v1Url"
              class="w-[9vw] h-[9vw] rounded-[50%] border-[2px] border-[#ffffff]"
            />
            <span class="mx-[2vw] text-[#ffffff] text-[4vw]">
              {{ Detail?.artists[0]?.name }}
            </span>
            <div
              class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw]"
            >
              <Icon icon="iconamoon:sign-plus-bold" style="color: white" />
            </div>
          </div>
          <!-- 歌手更多mv -->
          <div class="mb-[5vw] flex justify-between">
            <div role="button">
              <h1 class="text-[3.2vw]">
                <span
                  class="w-[7.3vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]"
                >
                  MV
                </span>
                {{ Detail?.name }}
              </h1>
            </div>
            <Icon icon="teenyicons:down-outline" style="color: white" />
          </div>
          <!-- 歌手 -->
          <div class="flex items-center">
            <div>
              <Icon icon="circum:music-note-1" style="color: white" />
            </div>
            <div class="mx-[2vw] text-[3vw] overflow-hidden">
              {{ Detail?.name }}
            </div>
            <div>
              <Icon icon="mdi:heart-outline" style="color: white" />
            </div>
          </div>
        </div>
      </div>
      <!-- 侧边导航 -->
      <div class="absolute right-0">
        <div class="flex flex-col items-center">
          <div class="flex flex-col items-center">
            <div class="text-[5vw]">
              <Icon icon="ant-design:like-outlined" style="color: white" />
            </div>
            <div class="mt-[2vw]">{{ DetailInfo?.likedCount }}</div>
          </div>
          <div class="mt-[2vw] flex flex-col items-center">
            <div class="text-[5vw]">
              <Icon icon="uit:comment-dots" style="color: white" />
            </div>
            <div class="mt-[2vw]">{{ DetailInfo?.commentCount }}</div>
          </div>
          <div class="mt-[2vw] flex flex-col items-center">
            <div class="text-[5vw]">
              <Icon icon="majesticons:share-line" style="color: white" />
            </div>
            <div class="mt-[2vw]">{{ DetailInfo?.shareCount }}</div>
          </div>
          <div class="mt-[2vw] flex flex-col items-center">
            <div class="text-[5vw]">
              <Icon icon="fluent:collections-24-regular" style="color: white" />
            </div>
            <div class="mt-[2vw]">收藏</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 进度条 -->
    <div></div>
    <!-- 评论 -->
    <div
      class="w-[100%] flex items-center justify-between text-[#4d4d4d] px-[4vw] py-[4vw] text-[4vw]"
    >
      发条评论结识有趣的人
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRequest } from "@/hooks/useRequest";
import { ref, watchEffect } from "vue";
import { getMvUrl, getDetailInfo, getDetail } from "@/service";
import { useRoute } from "vue-router";

const route = useRoute();
// 获取我的上页面的id
const videoId = route.params.id;

// 获取视屏链接
const { data: MvUrl } = useRequest(
  () =>
    getMvUrl({
      id: videoId,
    }),
  {
    deps: [],
    manual: false,
    formatResult(response) {
      return response.data.data;
    },
  }
);

// mv点赞数据
const { data: DetailInfo } = useRequest(
  () =>
    getDetailInfo({
      mvid: videoId,
      cookie: "",
    }),
  {
    deps: [],
    manual: false,
    formatResult(response) {
      return response.data;
    },
  }
);

// mv个人数据
const { data: Detail } = useRequest(
  () =>
    getDetail({
      mvid: videoId,
      cookie: "",
    }),
  {
    deps: [],
    manual: false,
    formatResult(response) {
      return response.data.data;
    },
  }
);

watchEffect(() => {
  // console.log(MvUrl.value);
  // console.log(DetailInfo.value);
  // console.log(Detail.value);
  // console.log(videoId);
});
</script>
