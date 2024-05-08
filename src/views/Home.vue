<template>
  <!-- 背景 -->
  <div
    class="bt-[10ve] dark:from-[#2c1a2b] dark:to-[#1a1c23] bg-gradient-to-b from-[#E6E6FB] to-[#f1f1f1] opacity-0.2"
  >
    <!-- 导航 -->
    <div class="flex justify-between items-center p-[3vw] pl-[1vw]">
      <!-- 侧边栏菜单 -->
      <div @click="showDrawer">
        <Icon icon="fontisto:nav-icon-a" class="text-[5vw]" />
      </div>
      <!-- 侧边栏 -->
      <a-drawer
        v-model:visible="visible"
        style="width: 85vw; background-color: #f1f1f1"
        placement="left"
        :closable="false"
      >
        <!-- 个人信息 -->
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <div
              class="w-[7vw] h-[7vw] rounded-[50%] mr-[2vw] bg-[#f4f4f1] flex items-center justify-center overflow-hidden"
            >
              <a-avatar style="background-color: #f4f4f1" src="">
                <Icon
                  icon="clarity:avatar-solid"
                  class="text-[7vw] text-[#f9dada]"
                />
              </a-avatar>
            </div>
            <span class="dark:text-[#f0f0f0] text-[#383838] text-[3.5vw]">
              <router-link to="/login">立刻登录</router-link>
            </span>
            <Icon icon="ep:arrow-right-bold" />
          </div>
          <Icon icon="mdi:line-scan" class="text-[6vw]" />
        </div>
        <!-- vip -->
        <div
          class="mx-auto w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]"
        >
          <div class="h-[10vw] flex justify-between items-center">
            <h1 class="text-[3.6vw] text-[#ffeeeb]">开通黑胶VIP</h1>
            <div
              class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]"
            >
              会员中心
            </div>
          </div>
          <div class="h-[7vw] border-b-[1px] border-[#494443]">
            <p class="text-[2.73vw]">点击恢复超21项专属特权</p>
          </div>
          <div
            class="h-[11vw] leading-[11vw] flex justify-between items-center mr-[4.45vw]"
          >
            <div class="text-[2.5vw] h-[11vw]">
              受邀专享，黑胶VIP低至0.27元/天!
            </div>
            <div class="scale-50 w-[8vw]">
              <div
                class="w-[22vw] h-[22vw] rounded-[10px] bg-[#e54701] text-[#fff] pl-[3vw] text-[8vw] scale-50"
              >
                受邀专享
              </div>
            </div>
          </div>
        </div>
        <!-- 我的消息 -->
        <div
          class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
          style="pointer-events: auto"
        >
          <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <Icon icon="teenyicons:envelope-outline" />
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                  >我的消息</span
                >
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <Icon icon="streamline:shell" />
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                  >云贝中心</span
                >
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]">签到</span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <Icon icon="majesticons:lightbulb-shine-line" />
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                  >创作者中心</span
                >
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
          </div>
        </div>
        <!--
          音乐服务
         -->
        <div
          class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
          style="pointer-events: auto"
        >
          <div
            class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
          >
            音乐服务
          </div>
          <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  趣测
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]">
                  点击查看今日运势
                </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  云村有票
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  多多西西口袋
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  商城
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  Beat专区
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]">
                  顶尖制作邀你创作
                </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  口袋彩铃
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  游戏专区
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]">
                  音乐浇灌治愈花园
                </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
          </div>
        </div>
        <!-- 其他 -->
        <div
          class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
          style="pointer-events: auto"
        >
          <div
            class="dark:border-b-[#333] text-[#969696] text-[3vw] px-[4vw] py-[3vw] border-b-[0.35vw] border-b-[#E8e8e8]"
          >
            其他
          </div>
          <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  设置
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  深色模式
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  定时关闭
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  个性装扮
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  边听边存
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]"> 未开启 </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  在线听歌免流量
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  音乐黑名单
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]"> 未开启 </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  青少年模式
                </span>
              </div>
              <div class="flex items-center">
                <span class="text-[color:#a7a7a7] text-[3vw]"> 未开启 </span>
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  音乐闹钟
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
          </div>
        </div>
        <!-- 我的订单 -->
        <div
          class="dark:bg-[#2c2c2c] rounded-[15px] bg-[#fff] w-[76vw] mx-auto mt-[4vw]"
          style="pointer-events: auto"
        >
          <div class="px-[4vw]">
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  我的订单
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  优惠卷
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  我的客服
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  分享网易云音乐
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  个人信息收集宇使用清单
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  个人信息第三方共享清单
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  个人信息于隐私保护
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
            <div class="flex items-center justify-between h-[12vw] px-[3.6vw]">
              <div class="flex items-center">
                <span
                  class="dark:text-[#f0f0f0] text-[color:#333333] text-[3.5vw] ml-[2.73vw]"
                >
                  关于
                </span>
              </div>
              <div class="flex items-center">
                <Icon icon="ep:arrow-right-bold" />
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div
          class="dark:bg-[#2c2c2c] h-[12vw] px-[3.6vw] bg-[#fff] w-[76vw] mt-[4vw] rounded-[15px] mx-auto leading-[12vw] text-center text-[3.6vw] text-[#ef4239]"
          style="pointer-events: auto"
        >
          关闭云音乐
        </div>
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
      class="w-[90%] overflow-hidden mx-[5vw]"
      :option="{ scrollY: false, scrollX: true }"
      :dep="HomeBall"
    >
      <div class="flex justify-between w-[200vw]">
        <div
          class="w-[40vw] flex flex-col items-center"
          v-for="item in HomeBall"
          :key="item.id"
        >
          <img :src="item.iconUrl" class="w-[15vw]" />
          <span class="text-[3vw]"> {{ item.name }} </span>
        </div>
      </div>
    </BetterScroll>
    <!-- 推荐歌单 -->
    <div class="w-[90vw] mx-auto mt-[4vh]">
      <!-- 标题 -->
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span>推荐歌单 </span>
          <Icon icon="ep:arrow-right-bold" />
        </div>
        <Icon icon="tdesign:more" />
      </div>
      <!-- 内容 -->
      <BetterScroll
        class="overflow-hidden mt-[6vw]"
        :option="{ scrollY: false, scrollX: true }"
        :dep="Personalized"
      >
        <div class="flex justify-between w-[200vw]">
          <div
            class="flex flex-col items-center mx-[2vw]"
            v-for="item in Personalized"
            :key="item.id"
          >
            <img :src="item.picUrl" class="h-[30vw] rounded-[2vw]" />
            <span class="text-[3vw]"> {{ item.name }} </span>
          </div>
        </div>
      </BetterScroll>
    </div>
    <!-- 新歌新碟\数字专辑 -->
    <div class="w-[90vw] mx-auto mt-[4vh]">
      <!-- 标题 -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <span>新歌新碟\数字专辑 </span>
          <Icon icon="ep:arrow-right-bold" />
        </div>
        <Icon icon="tdesign:more" />
      </div>
      <!-- 内容-->
      <BetterScroll
        class="overflow-hidden mt-[6vw]"
        :option="{ scrollY: false, scrollX: true }"
        :dep="AlbumList"
      >
        <div class="flex justify-between w-[400vw]">
          <div
            class="w-[100vw] flex flex-col items-center mx-[2vw]"
            v-for="item in AlbumList"
            :key="item.albumId"
          >
            <img :src="item.coverUrl" class="" />
            <span class="text-[3vw]"> {{ item.name }} </span>
          </div>
        </div>
      </BetterScroll>
    </div>
    <!-- 排行榜 -->
    <div class="w-[90vw] mx-auto mt-[4vh]">
      <!-- 标题 -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <span>排行榜 </span>
          <Icon icon="ep:arrow-right-bold" />
        </div>
        <Icon icon="tdesign:more" />
      </div>
      <!-- 内容 -->
      <div></div>
    </div>
    <!-- 热门话题 -->
    <div class="w-[90vw] mx-auto mt-[4vh]">
      <!-- 标题 -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <span>热门话题 </span>
          <Icon icon="ep:arrow-right-bold" />
        </div>
        <Icon icon="tdesign:more" />
      </div>
      <!-- 内容 -->
      <div></div>
    </div>
    <!-- 音乐日历 -->
    <div class="w-[90vw] mx-auto mt-[4vh] mb-[10vw]">
      <!-- 标题 -->
      <div class="flex justify-between">
        <div class="flex items-center">
          <span>音乐日历 </span>
          <Icon icon="ep:arrow-right-bold" />
        </div>
        <Icon icon="tdesign:more" />
      </div>
      <!-- 内容 -->
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import BetterScroll from "../components/BetterScroll.vue";

import { ref, defineComponent } from "vue";

import {
  getHomePageData,
  getHomeBall,
  getPersonalized,
  getAlbumList,
  getHotTopic,
} from "../service";

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
      // console.log("获取首页数据", homepageData.value);
    })();

    // 获取首页发现
    const HomeBall = ref([]);
    (async () => {
      HomeBall.value = (await getHomeBall()).data.data;
      // console.log(HomeBall.value);
    })();

    // 获取推荐歌单
    const Personalized = ref([]);
    (async () => {
      Personalized.value = (await getPersonalized(6)).data.result;
      // console.log(Personalized.value);
    })();

    // 新歌新碟\数字专辑
    const AlbumList = ref([]);
    (async () => {
      AlbumList.value = (await getAlbumList(12)).data.products;
      // console.log(AlbumList.value);
    })();
    // getHotTopic
    const HotTopic = ref({});
    (async () => {
      HotTopic.value = await getHotTopic();
      console.log(HotTopic.value);
    })();
    return {
      //获取首页数据
      homepageData,
      // 获取首页发现
      HomeBall,
      // 获取推荐歌单
      Personalized,
      // 新歌新碟\数字专辑
      AlbumList,

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
