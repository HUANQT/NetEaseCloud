<template>
  <div class="bg-[rgba(0,0,0,.6)] flex flex-col justify-between h-[100vh]">
    <!-- 导航 -->
    <div class="h-[15vw] w-[100vw] flex items-center px-[4vw] justify-between">
      <Icon
        icon="mingcute:down-fill"
        style="color: white"
        class="text-[6vw]"
        @click="router.push({ name: 'singingListDetails', params: { miunId } })"
      />
      <div class="text-center w-[60vw]">
        <p class="h-[5vw] text-[4vw] text-[#fff] line-clamp-1">
          {{ SongDetail?.name }}
        </p>
        <p class="text-[2.8vw] text-[#BCBFBF] mt-[2vw] font-[400]">
          是二智呀
          <span
            class="px-[1.6vw] py-[0.8vw] text-[#D8DBDB] text-[2vw] rounded-[8px] bg-[#84868B] ml-[1vw]"
            >关注</span
          >
        </p>
      </div>
      <Icon icon="tdesign:share" style="color: white" class="text-[6vw]" />
    </div>
    <!-- 音盘和歌词 -->
    <div class="relative top-[2%] w-[100vw] h-[120vw]">
      <div
        class="absolute top-[10%] left-[50%] z-[10] rotated w-[30vw] h-[40vw]"
      >
        <img
          src="https://admirable-jalebi-ce44af.netlify.app/static/needle-ab.png"
          alt=""
          class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]"
        />
      </div>
      <div
        class="w-[80vw] h-[80vw] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-45%]"
      >
        <div class="absolute w-[80vw] h-[80vw]">
          <img
            src="https://admirable-jalebi-ce44af.netlify.app/static/d7e4e3a244701ee85fecb5d4f6b5bd57.png"
            alt=""
            class="absolute top-0 w-[80vw] h-[80vw]"
          />
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="flex flex-wrap content-end pb-[10vh]">
      <div class="w-[100vw] mt-[5vw] flex justify-evenly items-center"></div>
      <div class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw]">
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">00:10</div>
        <div
          class="flex-1 mx-[2.5vw] vue-slider vue-slider-ltr"
          style="padding: 7px 0px; width: auto; height: 4px"
        >
          <div class="vue-slider-rail">
            <div
              class="vue-slider-process"
              style="
                height: 100%;
                top: 0px;
                left: 0%;
                transition-property: width, left;
                transition-duration: 0s;
                width: 4.34607%;
              "
            ></div>
            <div
              aria-valuetext="10.27411"
              class="vue-slider-dot"
              role="slider"
              aria-valuenow="10.27411"
              aria-valuemin="0"
              aria-valuemax="236.4"
              aria-orientation="horizontal"
              tabindex="0"
              style="
                width: 14px;
                height: 14px;
                transform: translate(-50%, -50%);
                top: 50%;
                transition: left 0s ease 0s;
                left: 4.34607%;
              "
            >
              <div class="vue-slider-dot-handle"></div>
            </div>
          </div>
        </div>
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">03:56</div>
      </div>
      <div class="h-[12.3vw] flex w-[100vw] items-center justify-evenly">
        <div
          class="w-[12vw] h-[12vw] rounded-[50%] bg-[#fff] flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="20px"
            height="20px"
            viewBox="0 0 256 256"
            class="iconify iconify--ph"
          >
            <path
              fill="currentColor"
              d="M240 128a15.74 15.74 0 0 1-7.6 13.51L88.32 229.65a16 16 0 0 1-16.2.3A15.86 15.86 0 0 1 64 216.13V39.87a15.86 15.86 0 0 1 8.12-13.82a16 16 0 0 1 16.2.3l144.08 88.14A15.74 15.74 0 0 1 240 128"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { getSongDetail } from "@/service";
import { useRoute, useRouter } from "vue-router";
import { ref, watchEffect } from "vue";
import { useRequest } from "vue-request";
const route = useRoute();
const router = useRouter();
const songId = route.params.songId;
//歌曲详情
const { data: SongDetail } = useRequest(() =>
  getSongDetail({
    ids: songId,
    cookice: localStorage.getItem("cookie"),
    // 在输出的时候用Service直接获取songs
  })
);

watchEffect(() => {
  console.log(SongDetail?.value);
});
</script>
