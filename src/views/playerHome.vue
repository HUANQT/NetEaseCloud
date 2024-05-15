<template>
  <div class="bg-[rgba(0,0,0,.6)]">
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
