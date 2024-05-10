<template>
  <div>login</div>
  <ol>
    <li v-for="item in HomePageData" :key="item.blockCode">
      {{ item.blockCode }}
    </li>
  </ol>
</template>
<script>
import { useRequest } from "../hooks/useRequest.js";

import { getHomePageData } from "../service";

export default {
  async setup() {
    const { data: HomePageData, run } = useRequest(getHomePageData, {
      formateResult: (res) => res.data.data.blocks,
    });
    await run();
    return { HomePageData };
  },
};
</script>
