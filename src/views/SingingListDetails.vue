<template>
  <div>
    <!-- 搜索 -->
    <div class="mt-[2vw] flex justify-between items-center">
      <!-- 返回首页 -->
      <div class="flex items-center">
        <router-link to="/">
          <Icon icon="bytesize:arrow-left" class="text-[6vw]" />
        </router-link>
        <span class="ml-[2vw]">歌单</span>
      </div>
      <div class="text-[6vw] flex">
        <Icon icon="ph:magnifying-glass-thin" />
        <Icon icon="ri:more-2-fill" />
      </div>
    </div>
  </div>
</template>
