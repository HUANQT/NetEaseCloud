<template>
  <div class="bg-[#f4f4f4] h-[100vh]">
    <div class="w-[90vw] mx-auto overflow-hidden">
      <!-- 搜索 -->
      <div class="mt-[2vw] flex justify-between items-center">
        <!-- 返回首页 -->
        <router-link to="/">
          <div>
            <Icon icon="bytesize:arrow-left" class="text-[4vw]" />
          </div>
        </router-link>
        <!-- 搜索框 -->
        <div class="border bg-white rounded-[4vw] w-[70vw] flex items-center">
          <Icon icon="ph:magnifying-glass-thin" class="text-[4vw] ml-[1vw]" />
          <van-field
            v-model="searchMinu"
            placeholder="请输入搜索关键词"
            style="width: 50vw; padding: 2vw 1vw"
            :border="false"
          />
        </div>
        <!-- 搜索按钮 -->
        <div @click="Cloudsearchrun"><span>搜索</span></div>
      </div>
      <!-- 搜索数据 -->
      <div
        v-if="searchMinu"
        class="w-[100vw] absolute bg-white h-[100vh] left-0"
      >
        <ul v-for="item in Cloudsearch" :key="item.id">
          <li class="my-[2vw] border-b flex items-center">
            <Icon icon="ph:magnifying-glass-thin" class="text-[4vw] ml-[1vw]" />

            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <!-- 热门分类 -->
      <div class="mt-[3vw]">
        <div class="flex items-center">
          <span>字体图标</span>
          <span class="mx-[2vw]">歌手</span>
          <span class="text-[#f1f1f1]">|</span>
        </div>
      </div>
      <!-- 猜你喜欢 -->
      <div class="mt-[3vw] flex justify-between">
        <span>猜你喜欢</span>
        <Icon
          icon="ic:sharp-refresh"
          style="color: #acafae"
          class="text-[6vw]"
        />
      </div>
      <!-- 搜索历史 -->
      <div class="flex justify-between flex-wrap">
        <div
          class="mt-[3vw] bg-[#fff] flex items-center rounded-[5vw]"
          v-for="item in SearchHot"
          :key="item.first"
        >
          <span class="px-[2vw] py-[2vw]"> {{ item.first }} </span>
        </div>
      </div>
      <!-- 榜单 -->
      <BetterScroll :option="{ scrollY: false, scrollX: true }" :dep="Toplist">
        <div
          class="w-[60vw] bg-white rounded-[6vw] mt-[2vw] ml-[2vw] pr-[6vw] pl-[4vw]"
          v-for="item in Toplist"
          :key="item.id"
        >
          <div class="pt-[2vw] border-b">
            {{ item.name }}
          </div>
          <ul v-for="item in PlaylistDetail" :key="item.id">
            <li>{{ item.name }}</li>
          </ul>
        </div>
      </BetterScroll>
    </div>
  </div>
</template>
<script setup>
import BetterScroll from "../components/BetterScroll.vue";

import {
  getCloudsearch,
  getSearchHot,
  getToplist,
  getPlaylistDetail,
} from "../service";
import { useRequest } from "../hooks/useRequest.js";
import { ref, watchEffect, watch, onMounted } from "vue";

// 搜索
const searchMinu = ref("");
const { data: Cloudsearch, run: Cloudsearchrun } = useRequest(
  () => getCloudsearch({ keywords: searchMinu.value, limit: "10" }),
  {
    manual: true,
    formatResult(response) {
      return response.data.result.songs;
    },
  }
);

// 热搜列表(简略)
const { data: SearchHot } = useRequest(getSearchHot, {
  formatResult(response) {
    return response.data.result.hots;
  },
});

// 排行
const { data: Toplist } = useRequest(getToplist, {
  formatResult(response) {
    // 取五个
    return response.data.list.slice(0, 5);
  },
});
// 排行详情
let selectedId = ref(Toplist.value?.map?.id);
// 获取排行里的id 传给id
const { data: PlaylistDetail } = useRequest(
  () =>
    getPlaylistDetail({
      // 获取排行当中id
      id: "19723756",
    }),
  {
    formatResult(response) {
      return response.data.playlist.tracks.slice(0, 20);
    },
  }
);

watchEffect(() => {
  console.log(selectedId.value);
  // // 搜索
  // console.log(Cloudsearch.value);
  // // 热搜列表(简略)
  // console.log(SearchHot.value);
  // 排行
  console.log(Toplist.value);
  // 排行详情
  console.log(PlaylistDetail.value);
});
</script>
