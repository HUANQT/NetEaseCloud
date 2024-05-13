<template>
  <div>
    key: {{ LoginQrKey }} code:{{ LoginQrCheck }}
    <img class="w-[40vw] h-[40vw]" :src="LoginQrCreate?.qrimg" />
  </div>
</template>
<script setup>
import { useRequest } from "@/hooks/useRequest.js";
import { getLoginQrKey, getLoginQrCreate, getLoginQrCheck } from "@/service";
import { ref, watchEffect, onMounted, onUpdated } from "vue";
// 获取二维码key
const { data: LoginQrKey } = useRequest(getLoginQrKey, {
  formatResult(response) {
    return response.data.data.unikey;
  },
});

console.log(LoginQrKey);
// 获取二维码图片
const { data: LoginQrCreate } = useRequest(
  () => getLoginQrCreate({ qrimg: 1, key: LoginQrKey.value }),
  {
    formatResult(response) {
      return response.data.data;
    },
  }
);
console.log(LoginQrCreate);

// 登录检测
const { data: LoginQrCheck } = useRequest(() => getLoginQrCheck(LoginQrKey), {
  formatResult(response) {
    return response.data;
  },
});
// LoginQrCheckSet.value = setInterval(() => {
//   // 执行登录检测
//   LoginQrCheckrun();
//   console.log(LoginQrCheck?.value?.code);
// }, 3000)

const LoginQrCheckSet = ref(null);

watchEffect(() => {
  console.log(LoginQrKey.value);
  console.log(LoginQrCreate?.value);
  console.log(LoginQrCreate?.value);
  // if (LoginQrCheck?.value?.code === 800) {
  //   console.log("二维码失效");
  //   // 关闭定时器，
  //   if (LoginQrCheckSet.value) {
  //     clearInterval(LoginQrCheckSet.value);
  //     LoginQrCheckSet.value = null;
  //   }
  //   // 重新请求
  //   LoginQrKeyrun();
  // LoginQrCreaterun();
  // LoginQrCheckrun();
  // } else if (LoginQrCheck?.value?.code === 802) {
  //   console.log("等待确认");
  // } else if (LoginQrCheck?.value?.code === 803) {
  // }
});
onMounted(() => {});
</script>
