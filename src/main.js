// vue2 对vue是全量引用 不能做到按需引用
// vue3 api模块化 兼容所有vue2的语法
import { createApp } from "vue";

import { Swipe, SwipeItem, Image } from "vant";
import "vant/lib/index.css";

import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(Swipe).use(SwipeItem).use(Image).mount("#app");
