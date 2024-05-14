<template>
  <div>
    key: {{ LoginQrKey }} code:{{ LoginQrCheck?.code }}
    <img class="w-[40vw] h-[40vw]" :src="LoginQrCreate?.qrimg" />
  </div>
  <!--  -->
  <div v-if="checkglaft" @click="refresh">点击刷新</div>
</template>
<script setup>
import { useRequest } from "@/hooks/useRequest.js";
import router from "@/router";
import { getLoginQrKey, getLoginQrCreate, getLoginQrCheck } from "@/service";
import { ref, watchEffect, onMounted, onUnmounted } from "vue";
// 判断
const glaft = ref(true);
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
    console.log("请确认");
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
    refresh = () => {
      // 清除定时器
      clearInterval(LoginQrCheckSet.value);
      LoginQrCheckSet.value = null;
      // 重新请求key
      keyrun();
      glaft.value = true;
      checkglaft.value = false;
    };
  }
  console.log(LoginQrCheck);
});
onUnmounted(() => {
  // 清除定时器
  if (loginCheckInterval) {
    clearInterval(loginCheckInterval);
  }

  // 可能还有其他需要清理的资源，比如取消未完成的网络请求等
  // ...
});
</script>
