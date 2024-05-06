// vue3不需要整个导入
// 实例 模式
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
