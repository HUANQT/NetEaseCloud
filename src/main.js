// vue2 对vue是全量引用 不能做到按需引用
// vue3 api模块化 兼容所有vue2的语法
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";
import Button from "./components/button.vue";
import Input from "./components/Input.vue";

import Antd from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";

const app = createApp(App);
app.component("Icon", Icon);
app.component("Button", Button);
app.component("Input", Input);

app.use(Antd).use(router).mount("#app");
