<template>
  <div class="bg-[#FDFBFC] h-[100vh] pb-[12vw]">
    <div class="flex h-[19vw] items-center justify-between px-[5.5vw]">
      <Icon icon="ep:arrow-left-bold" style="color: #000" @click="asb" />
      <div class="text-[4vw] text-[#696969]">游客登录</div>
    </div>
    <img
      src="https://admirable-jalebi-ce44af.netlify.app/static/logo.fill.svg"
      alt=""
      class="w-[38vw] mx-auto mt-[7vw] mb-[9vw]"
    />
    <div v-if="confirmLogin">
      <h1 class="h-[17vw] leading-[17vw] text-center text-[4vw] text-[#04090C]">
        扫描成功
      </h1>
      <p class="text-[#0F1619] text-[3.4vw] text-center">请在手机上确认登录</p>
    </div>
    <div class="relative" v-else>
      <img
        class="w-[40vw] h-[40vw] m-auto relative z-[1]"
        :src="LoginQrCreate?.qrimg"
      />
      <div class="text-[3vw] text-[#100A09] text-center mt-[10vw]">
        使用
        <span class="text-[#2C6AA1] mx-[1.5vw]"> 网易云音乐APP </span>
        扫码登录
      </div>
    </div>
    <div class="fixed bottom-0"></div>
  </div>
  <div v-if="checkglaft" @click="refresh">点击刷新</div>
</template>
<script setup>
import { useRequest } from "@/hooks/useRequest.js";
import { useRouter } from "vue-router";
import { getLoginQrKey, getLoginQrCreate, getLoginQrCheck } from "@/service";
import { ref, watchEffect, onMounted, onUnmounted } from "vue";
// 判断
const router = useRouter();
const glaft = ref(true);
const confirmLogin = ref(false);
const checkglaft = ref(false);
const LoginQrCheckSet = ref(null);
// 时间戳
const generateTimestamp = () => new Date().getTime();

// 获取二维码key
const { data: LoginQrKey, run: keyrun } = useRequest(
  () => getLoginQrKey({ timestamp: generateTimestamp() }),
  {
    formatResult(response) {
      return response.data.data.unikey;
    },
    manual: true,
  }
);

// 获取二维码图片
const { data: LoginQrCreate, run: imgrun } = useRequest(
  () =>
    getLoginQrCreate({
      qrimg: 1,
      key: LoginQrKey?.value,
      timestamp: generateTimestamp(),
    }),
  {
    formatResult(response) {
      return response.data.data;
    },
    manual: true,
  }
);

// 登录检测
const { data: LoginQrCheck, run: checkrun } = useRequest(
  () =>
    getLoginQrCheck({
      key: LoginQrKey?.value,
      timestamp: generateTimestamp(),
    }),
  {
    formatResult(response) {
      return response.data;
    },
    manual: true,
  }
);

onMounted(() => {
  // 当我组件挂载完成重新获取key
  keyrun();
  LoginQrCheckSet.value = setInterval(() => {
    // 执行登录检测
    checkrun();
  }, 5000);
});

watchEffect(() => {
  // 当我的key值不为空并且只执行一次后
  if (LoginQrKey.value && glaft.value) {
    // 执行二维码图片
    imgrun();
    glaft.value = false;
  }

  // 手机确认
  if (LoginQrCheck?.value?.code === 802) {
    confirmLogin.value = true;
  } else if (LoginQrCheck?.value?.code === 803) {
    // 缓存cookie
    window.localStorage.setItem("cookie", LoginQrCheck?.value?.cookie);
    // 跳转页面
    router.push({ path: "/" });
  } else if (LoginQrCheck?.value?.code === 800) {
    // 清除定时器
    clearInterval(LoginQrCheckSet.value);
    LoginQrCheckSet.value = null;
    checkglaft.value = true;
    // 点击事件
  }
  console.log(LoginQrCheck?.value?.code);
});

const asb = () => {
  // 清除定时器
  clearInterval(LoginQrCheckSet.value);
  LoginQrCheckSet.value = null;
  router.push({ path: "/" });
};
</script>
