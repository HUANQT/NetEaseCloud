<template>
  <div class="bg-[#F1F1F1] pb-[10vh]">
    <!-- 背景图片 -->
    <div class="relative bg-[#F1F1F1]">
      <img :src="UserAccount?.backgroundUrl" class="h-[35vh] w-[100vw]" />
      <!-- 导航 -->
      <div class="absolute top-[4vw] left-[5vw]">
        <div class="flex justify-between w-[90vw] mx-auto">
          <!-- 返回 -->
          <div>返回</div>
          <!-- 更多 -->
          <div>更多</div>
        </div>
      </div>
    </div>
    <!-- 用户资料 -->
    <div class="relative h-[15vh]">
      <div
        class="rounded-[5vw] h-[15vh] absolute top-[-6vw] w-[90vw] left-[5vw] bg-[#F1F1F1]"
      >
        <div
          class="absolute top-[-10vw] left-[32vw] flex flex-col items-center"
        >
          <!-- 头像 -->
          <img
            :src="UserAccount?.avatarUrl"
            class="rounded-[50%] w-[20vw] h-[20vw]"
          />
          <!-- 名称 -->
          <div class="mt-[2vw] text-[6vw]">
            {{ UserAccount?.nickname }}
          </div>
          <!-- 关注粉丝等级 -->
          <div class="text-[3vw] text-[#9396A2]">
            <span>{{ SuerFollows?.length }} 关注</span>
            <span class="mx-[2vw]">{{ SuerFollowds?.length }} 粉丝</span>
            <span>LV.{{ UserLevel?.level }}</span>
          </div>
          <!-- ip生日村龄 -->
          <div class="flex text-[2vw] text-[#9396A2] my-[2vw]">
            <span class="p-[1vw] rounded-[5vw] bg-white">ip</span>
            <span class="p-[1vw] rounded-[5vw] mx-[4vw] bg-white">00后</span>
            <span class="p-[1vw] rounded-[5vw] bg-white">村龄</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 编辑资料 -->
    <div class="flex justify-between w-[40vw] mx-auto">
      <div
        class="border-[0.4vw] rounded-[3vw] p-[1vw] text-[3vw]"
        @click="router.push({ name: 'edit' })"
      >
        编辑资料
      </div>
    </div>
    <div>
      <van-tabs v-model:active="activeName" background="#f1f1f1">
        <van-tab title="主页" name="a">
          <!-- 音乐品味 -->
          <div class="mt-[1vw] w-[90vw] mx-auto bg-white rounded-[5vw]">
            <div class="pl-[4vw] pt-[3vw]">音乐品味</div>
            <div class="flex justify-around py-[2vw]">
              <div class="bg-cyan-400 w-[25vw] rounded-[5vw]">
                <div class="pl-[2vw] pt-[1vw]">
                  <div class="text-[2.5vw] text-[#ccc]">我喜欢的</div>
                  <div class="text-[#5A565D]">首</div>
                </div>
              </div>
              <div class="bg-cyan-400 w-[25vw] rounded-[5vw]">
                <div class="pl-[2vw] pt-[1vw]">
                  <div class="text-[2.5vw] text-[#ccc]">累计听歌</div>
                  <div class="text-[#5A565D]">首</div>
                </div>
              </div>
              <div class="bg-cyan-400 w-[25vw] rounded-[5vw]">
                <div class="pl-[2vw] pt-[1vw]">
                  <div class="text-[2.5vw] text-[#ccc]">本周关键词</div>
                  <div class="text-[#5A565D]">属于你的音乐档案</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 创建歌单 -->
          <div class="mt-[4vw] w-[90vw] mx-auto bg-white rounded-[5vw]">
            <div class="pl-[4vw] pt-[3vw]">
              <span>创建歌单</span>
              <span class="text-[#ccc] text-[3vw] ml-[1vw]"
                >({{ UserPlaylist?.length }}个)</span
              >
            </div>
            <div class="pb-[4vw]">
              <ul
                class="px-[4vw] pb-[4vw]"
                v-for="itme in UserPlaylist"
                :key="itme.id"
              >
                <li class="flex mb-[1.5vw]">
                  <div class="relative pt-[0.6vw] mr-[2.6vw]">
                    <img
                      :src="itme?.coverImgUrl"
                      class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                    />
                    <div
                      class="dark:bg-[#434343] w-[9vw] h-[4vw] bg-[#ddd] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[6px] z-[1]"
                    ></div>
                  </div>
                  <div class="flex flex-wrap items-center flex-1 py-[1vw]">
                    <p
                      class="dark:text-[#E6E6E6] w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1"
                    >
                      {{ itme?.name }}
                    </p>
                    <p
                      class="dark:text-[#B7B7B7] w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1"
                    >
                      {{ itme?.trackCount }}，播放{{ itme?.playCount }}次
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- 添加的歌单 -->
          <div class="mt-[4vw] w-[90vw] mx-auto bg-white rounded-[5vw]">
            <div
              class="dark:bg-[#2C2C2C] w-[100%] bg-[#fff] rounded-[15px] pt-[5vw] mb-[3.7vw]"
            >
              <p
                class="dark:text-[#ECECEC] text-[#2a3146] font-semibold text-[4vw] mb-[4.4vw] mx-[4vw]"
              >
                收藏的歌单<span
                  class="dark:text-[#A1A1A1] text-[#9599a3] text-[2.7vw] ml-[1.6vw] font-[200]"
                  >(0个)</span
                >
              </p>
              <ul class="px-[4vw] pb-[4vw]"></ul>
              <div></div>
            </div>
          </div>
          <!-- 基本信息 -->
          <div class="mt-[4vw] w-[90vw] mx-auto bg-white rounded-[5vw]">
            <div
              class="dark:bg-[#2C2C2C] w-[92vw] h-[50vw] bg-[#fff] rounded-[15px]"
            >
              <nav
                class="h-[15vw] flex items-center justify-between mx-[3.8vw]"
              >
                <div class="dark:text-[#ECECEC] text-[4vw] text-[#333]">
                  基本信息
                </div>
                <div
                  class="dark:text-[#ECECEC] dark:border-[#474747] text-[2.6vw] border-[1px] border-[#E7E7E7] rounded-[200px] px-[2.7vw] py-[1.5vw] text-[#333]"
                >
                  领取村名证
                </div>
              </nav>
              <div
                class="dark:text-[#ADADAD] h-[25vw] text-[3vw] text-[#666] flex flex-wrap mx-[3.8vw]"
              >
                <div class="w-[100%]">
                  村龄：<span class="dark:text-[#E3E3E3]"
                    >4年 (2020年1月注册)</span
                  >
                </div>
                <div class="w-[100%]">
                  性别：<span class="dark:text-[#E3E3E3]">男</span>
                </div>
                <div class="w-[100%]">
                  年龄：<span class="dark:text-[#E3E3E3]">00后 摩羯座</span>
                </div>
              </div>
              <div
                class="dark:border-[#434343] border-t-[1px] border-[#EAEAEA] text-[3vw] text-[#999] flex items-center justify-center h-[9vw]"
              >
                查看全部<svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="0.46em"
                  height="1em"
                  viewBox="0 0 208 456"
                  class="iconify iconify--ps ml-[1vw] text-[2.5vw] font-[800]"
                >
                  <path
                    fill="currentColor"
                    d="M9 388q8 4 15 4q11 0 17-6l162-186L41 14Q26-1 11 12Q-4 29 9 42l137 156L9 354q-13 19 0 34"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="动态" name="b">动态</van-tab>
        <van-tab title="博客" name="c">博客</van-tab>
      </van-tabs>
    </div>
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
<script setup>
import { useRequest } from "@/hooks/useRequest.js";
import { useRouter } from "vue-router";
const router = ref(useRouter());
import {
  getUserAccount,
  getUserLevel,
  getSuerFollows,
  getSuerFollowds,
  getUserDetail,
  getUserPlaylist,
} from "@/service";
import { ref, watchEffect, onMounted } from "vue";
const cookie = ref(null);
const activeNames = ref(["1"]);
// 用户信息
const { data: UserAccount, run: UserAccountrun } = useRequest(
  () => getUserAccount({ cookie: cookie?.value }),
  {
    formatResult(response) {
      return response.data.data.profile;
    },
    manual: true,
  }
);

// 用户等级
const { data: UserLevel, run: UserLevelrun } = useRequest(
  () => getUserLevel({ cookie: cookie.value }),
  {
    formatResult(response) {
      return response.data.data;
    },
    manual: true,
  }
);

// 关注
const { data: SuerFollows, run: SuerFollowsrun } = useRequest(
  () =>
    getSuerFollows({
      uid: UserAccount?.value?.userId,
    }),
  {
    formatResult(response) {
      return response.data.follow;
    },
    manual: true,
  }
);
// 粉丝
const { data: SuerFollowds, run: SuerFollowdsrun } = useRequest(
  () =>
    getSuerFollowds({
      uid: UserAccount?.value?.userId,
    }),
  {
    formatResult(response) {
      return response.data.followeds;
    },
    manual: true,
  }
);

// 用户详情
const { data: UserDetail, run: UserDetailrun } = useRequest(
  () => getUserDetail({ uid: UserAccount?.value?.userId }),
  {
    formatResult(response) {
      return response.data;
    },
    manual: true,
  }
);

// 创建的歌单
const { data: UserPlaylist, run: UserPlaylistrun } = useRequest(
  () =>
    getUserPlaylist({
      uid: UserAccount?.value?.userId,
      cookie: cookie?.value,
    }),
  {
    formatResult(response) {
      return response.data.playlist;
    },
    manual: true,
  }
);

onMounted(() => {
  // cookie
  cookie.value = localStorage.getItem("cookie");
  UserAccountrun();
});

const falget = ref(true);
watchEffect(() => {
  // console.log("用户信息", UserAccount.value);
  // console.log(UserAccount?.value);
  if (UserAccount?.value?.userId && falget.value) {
    UserLevelrun();
    SuerFollowsrun();
    SuerFollowdsrun();
    UserDetailrun();
    UserPlaylistrun();
    falget.value = false;
  }
  // console.log("用户等级", UserLevel?.value);
  // console.log("关注", SuerFollows?.value);
  // console.log("粉丝", SuerFollowds?.value);
  console.log("用户详情", UserDetail?.value);
  console.log("创建的歌单", UserPlaylist?.value);
});
</script>
