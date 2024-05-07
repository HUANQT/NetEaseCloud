<script>
import { ref } from "vue";

export default {
  //model配置项影响的是该组件在使用v-model指令的时候
  //展开的属性绑定的名称和事件绑定的名称
  // model: {
  //   //属性名
  //   // prop: "value",
  //   //事件名
  //   event: "abc",
  // },
  setup(props, { emit }) {
    const isPasswordVisible = ref(false);
    const inputHandler = () => emit("abc", "123456");
    return { isPasswordVisible, inputHandler };
  },
  props: {
    value: {
      required: true,
      type: String,
    },
    clearable: {
      default: false,
      type: Boolean,
    },
    // false 是文本框 true表示是密码框
    showPassword: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    isClearable() {
      return this.clearable && this.value.length > 0;
    },
    type() {
      if (this.showPassword && !this.isPasswordVisible) {
        return "password";
      } else {
        return "text";
      }
    },
  },
};
</script>
<template>
  <div class="ipt relative">
    <!-- 原生输入框的属性 都不需要在prop里面声明 好处就是通过v-bind="$attrs"语法可以批量绑定 而不需要对每一个属性单独去考虑 -->
    <input
      v-bind="$attrs"
      class="ipt-inner"
      :value="value"
      @input="inputHandler"
      :type="type"
    />
    <span
      @click="$emit('input', '')"
      class="icon-[ooui--clear] absolute right-[5%] top-[35%]"
      v-show="isClearable"
      >45</span
    >
    <div
      v-show="showPassword"
      @click="isPasswordVisible = !isPasswordVisible"
      class="absolute right-[1%] top-[35%]"
    >
      <span v-if="isPasswordVisible" class="icon-[heroicons-outline--eye]"
        >12</span
      >
      <span v-else class="icon-[mdi--eye-off-outline]">1</span>
    </div>
  </div>
</template>
<style scoped>
.ipt {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100vw;
}
.ipt-inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
}
.ipt-inner:focus {
  outline: none;
  border-color: #409eff;
}
.ipt-inner:hover {
  border-color: #c0c4cc;
}
</style>
