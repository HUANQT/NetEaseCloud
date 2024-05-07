<template>
  <div
    :class="['btn', `btn-${type}`, { 'btn-round': round }]"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>
<script>
export default {
  emits: ["click"],
  setup(props, context) {
    const trigger = () => context.emit("click");
    return { trigger };
  },
  // context.expose 组件私有化 不能外界访问
  props: {
    // type 具备默认值: default
    // type 可选参数：default、primary、success、info、warning、danger
    type: {
      default: "default",
      // 自定义验证
      validator(value) {
        // 返回true 验证通过
        // 返回false 验证失败
        return [
          "primary",
          "success",
          "info",
          "warning",
          "danger",
          "default",
        ].includes(value);
      },
    },
    round: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.btn {
  user-select: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.btn:active {
  color: #3a8ee6;
  border-color: #3a8ee6;
  outline: none;
}
</style>
