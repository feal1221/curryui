<template>
  <!-- <BaseQuestion /> -->
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <div>{{ "長按上方圖片儲存結果" }}</div>
    <UiButton variant="secondary">
      <span> {{ "分享測驗" }} </span>
    </UiButton>
    <UiButton variant="secondary">
      <NuxtLink :to="'/question/1'"> 再玩一次 </NuxtLink>
    </UiButton>
  </div>
</template>
<script setup>
// useSeoMeta({
//   title: `我是【絲滑奶油型】靈魂！ - 咖哩靈魂拌測驗結果`,
//   ogTitle: `測驗結果：我的靈魂是溫潤的絲滑奶油`,
//   ogImage: `https://example.com/images/result-${resultId}.jpg`, // 動態對應結果圖
// })
</script>
