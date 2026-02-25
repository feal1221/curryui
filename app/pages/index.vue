<template>
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <h1>想來點不一樣的咖哩嗎？</h1>
    <div class="flex gap-4 text-center whitespace-pre-wrap">
      {{ "測出你的靈魂拌哩\n黃金比例混搭新滋味，讓好侍咖哩帶你獨自升級！" }}
    </div>
    <UiButton variant="secondary">
      <NuxtLink :to="'/about'"> 馬上拌 </NuxtLink>
    </UiButton>
  </div>
</template>
<script setup></script>
