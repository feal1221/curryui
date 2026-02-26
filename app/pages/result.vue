<template>
  <!-- <BaseQuestion /> -->
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <div>{{ "長按上方圖片儲存結果" }}</div>
    <UiDialog v-model:open="showDialog">
      <UiDialogTrigger>
        <UiButton variant="secondary"> 分享測驗 </UiButton>
      </UiDialogTrigger>
      <UiDialogContent>
        <UiDialogHeader>
          <UiDialogTitle>這是對話框標題</UiDialogTitle>
          <UiDialogDescription>
            這是對話框內容，可以放任何你想要的東西！
          </UiDialogDescription>
        </UiDialogHeader>
        <UiDialogFooter>
          <UiButton variant="secondary" @click="showDialog = false">
            關閉
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
    <UiButton variant="secondary">
      <NuxtLink :to="'/question/1'"> 再玩一次 </NuxtLink>
    </UiButton>
  </div>
</template>
<script setup>
const showDialog = ref(false);
// useSeoMeta({
//   title: `我是【絲滑奶油型】靈魂！ - 咖哩靈魂拌測驗結果`,
//   ogTitle: `測驗結果：我的靈魂是溫潤的絲滑奶油`,
//   ogImage: `https://example.com/images/result-${resultId}.jpg`, // 動態對應結果圖
// })
</script>
