<template>
  <div :style="{ backgroundColor: randomColor }" class="h-[100vh]">
    <div class="py-[2vw] w-[90vw] mx-auto">
      <!-- 导航 -->
      <div class="flex justify-between items-center text-[#fff]">
        <div class="flex items-center">
          <router-link to="/">
            <Icon icon="bytesize:arrow-left" class="text-[6vw]" />
          </router-link>
          <span class="ml-[2vw]">歌单</span>
        </div>
        <div class="text-[6vw] flex">
          <Icon icon="ph:magnifying-glass-thin" />
          <Icon icon="ri:more-2-fill" />
        </div>
      </div>
      <!-- 歌单介绍 -->
      <div class="flex justify-between mt-[8vw]">
        <!-- 图片 -->
        <div>
          <img
            :src="PlaylistDetail?.playlist?.coverImgUrl"
            class="rounded-[5vw] w-[25vw]"
          />
        </div>
        <!-- 名称 -->
        <div class="pr-[12vw]">
          <p class="text-[#fff] text-[3.6vw] leading-[4.9vw] font-[800]">
            {{ PlaylistDetail?.playlist?.name }}
          </p>
          <div class="h-[10.5vw] flex items-center">
            <img
              alt=""
              class="w-[6vw] h-[6vw] rounded-[50%]"
              :src="PlaylistDetail?.playlist?.creator?.avatarUrl"
            />
            <span
              class="text-[2.73vw] ml-[2vw] mr-[1.5vw] text-[#fff] opacity-50"
            >
              {{ PlaylistDetail?.playlist?.creator?.nickname }}</span
            >
            <span
              class="px-[2vw] py-[1.25vw] rounded-[50px] text-[2.2vw] text-[#fff] opacity-50 bg-opacity-20 bg-[#fff] flex items-center pr-[3.5vw]"
            >
              + 关注
            </span>
          </div>
          <!-- 标签 -->
          <div class="flex">
            <div
              class="ml-[2vw]"
              v-for="item in PlaylistDetail?.playlist?.algTags"
              :key="item.value"
            >
              <div
                class="flex items-center justify-center pl-[2.5vw] pr-[1.5vw] py-[0.7vw] bg-opacity-20 bg-[#fff] text-[#fff] rounded-[4px] mr-[1.4vw]"
              >
                <span class="text-[2.2vw]"> {{ item }} </span>
                <Icon icon="mingcute:right-fill" style="color: white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 副标签 -->
      <p
        class="h-[4vw] flex items-center w-[90vw] overflow-hidden mt-[3.8vw] justify-between"
      >
        <span
          class="text-[#fff] opacity-50 text-[2.8vw] whitespace-nowrap w-[83vw] overflow-hidden"
        >
          {{ PlaylistDetail?.playlist?.description }}
        </span>
        <Icon icon="mingcute:right-fill" style="color: white" />
      </p>
      <!-- 显示隐藏 -->
      <div
        class="absolute right-[3.4vw] top-[15vw] w-[6vw] h-[6vw] rounded-[50%] bg-opacity-20 bg-[#fff] flex items-center justify-center"
      >
        <Icon icon="mingcute:down-fill" style="color: white" />
      </div>
      <!-- 分享 -->
      <div class="flex items-center mt-[3.5vw]">
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 text-[#f8fefe] text-[3vw]"
        >
          <Icon
            icon="majesticons:share"
            style="color: white"
            class="mr-[1vw] text-[5vw]"
          />
          {{ PlaylistDetail?.playlist?.shareCount }}
        </div>
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-opacity-20 bg-[#fff] font-[800] flex-1 mx-[3vw] text-[#f8fefe] text-[3vw]"
        >
          <Icon
            icon="iconoir:chat-bubble-solid"
            style="color: white"
            class="mr-[1vw] text-[5vw]"
          />
          {{ PlaylistDetail?.playlist?.commentCount }}
        </div>
        <div
          class="flex items-center justify-center h-[9.9vw] rounded-[200px] bg-[#ff2658] font-[800] flex-1 text-[#f8fefe] text-[3vw]"
        >
          <Icon
            icon="mage:star"
            style="color: white"
            class="mr-[1vw] text-[5vw]"
          />
          {{ PlaylistDetail?.playlist?.subscribedCount }}
        </div>
      </div>
    </div>
    <!-- 列表 -->
    <div class="bg-[#fff] h-[100vh] rounded-t-[4vw] px-[4vw]">
      <!-- 头部 -->
      <nav class="a1 h-[13vw] flex items-center justify-between">
        <div class="flex items-center">
          <Icon
            icon="mage:play-circle-fill"
            style="color: #ff0000"
            class="text-[7vw]"
          />
          <span class="text-[#25272C] text-[3.7vw] ml-[3.9vw] mr-[2.3vw]"
            >播放全部</span
          >
          <span class="text-[#8C9094] text-[2.7vw]"
            >({{ PlaylistDetail?.playlist?.tracks?.length }})</span
          >
        </div>
        <div class="flex items-center text-[6vw]">
          <Icon icon="heroicons:arrow-down-tray-20-solid" class="mr-[4vw]" />
          <Icon icon="mage:playlist-add" />
        </div>
      </nav>
      <!-- 歌曲列表 -->
      <div v-for="item in PlaylistDetail?.playlist?.tracks" :key="item.id">
        <div class="flex items-center h-[14vw]">
          <div
            class="w-[4vw] text-[#bfbfbf] text-[3vw] text-center mr-[3.52vw] font-medium"
          >
            1
          </div>
          <div
            class="font-medium text-[3.6vw] w-[64vw]"
            @click="SongID(item.id)"
          >
            <div
              class="text-[3.6vw] text-ellipsis overflow-hidden whitespace-nowrap w-[50vw] text-[#949797]"
            >
              <span class="text-ellipsis text-[#000]">{{ item.name }}</span>
            </div>
            <div
              class="w-[64vw] text-ellipsis overflow-hidden whitespace-nowrap text-[#808080] text-[2.8vw] flex items-center"
            >
              <span
                class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[red] font-[800] text-[3vw] text-[red] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]"
                >vip</span
              >
              <span
                class="w-[8.5vw] h-[6vw] rounded-[3px] border-[1px] border-[#60BDEF] text-[3vw] text-[#60BDEF] text-center leading-[6vw] scale-50 ml-[-2vw] mr-[-1vw]"
                >试听</span
              >
              <span>{{ item.al.name }}</span>
            </div>
          </div>
          <Icon
            icon="mage:play-square"
            class="text-[5vw] text-[#B3B3B3] mt-[-2vw]"
          />
          <Icon
            icon="ri:more-2-fill"
            class="ml-[4.6vw] text-[5vw] text-[#B3B3B3] mt-[-2vw]"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import { getPlaylistDetail } from "@/service";
import { useRequest } from "@/hooks/useRequest";

const router = useRouter();
const route = useRoute();
const miunId = route.params.DationId;
const gleft = ref(true);
//  随机数颜色
const randomColor = ref("");
const randomNumberColor = () => {
  const letters = "012356789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// 获取歌单详情列表
const { data: PlaylistDetail, run: PlaylistDetailrun } = useRequest(
  () =>
    getPlaylistDetail({
      id: miunId,
      cookice: "",
    }),
  {
    manual: true,
    formatResult(response) {
      return response.data;
    },
  }
);

// 点击事件
const SongID = (songId) => {
  console.log(songId);
  router.push({ name: "playerHome", params: { miunId, songId } });
};

watchEffect(() => {
  console.log(miunId);
  randomColor.value = randomNumberColor();
  if (miunId && gleft.value) {
    PlaylistDetailrun();
    gleft.value = false;
  }
  console.log(PlaylistDetail?.value);
});
</script>
