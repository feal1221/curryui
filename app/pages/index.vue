<template>
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <h1>想來點不一樣的咖哩嗎？</h1>
    <div class="flex gap-4 text-center whitespace-pre-wrap">
      {{ "測出你的靈魂拌哩\n黃金比例混搭新滋味，讓好侍咖哩帶你獨自升級！" }}
    </div>
    <UiButton variant="destructive">
      <NuxtLink :to="'/about'"> 開始測驗！ </NuxtLink>
    </UiButton>
    <div>分享測驗結果至個人社群平台就有機會獲得獎品！</div>

  </div>
</template>
<script setup></script>
