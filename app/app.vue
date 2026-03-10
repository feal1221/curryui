<template>
  <curry-bar />
  <div>
    <NuxtPage />
    <Teleport to="body">
      <UiSonner 
        position="top-center"
        :style="{ zIndex: '99999', position: 'fixed', left: '50%', transform: 'translateX(-50%)' }"
        :toast-options="{ 
          style: { 
            background: 'white',
            color: 'black',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          } 
        }"
      />
    </Teleport>
  </div>
</template>
<script setup>
useSeoMeta({
  title: '咖哩靈魂拌測驗：你是哪種秘密食材？',
  ogTitle: '咖哩靈魂拌測驗',
  description: '面對咖哩的世紀爭議，你的「拌哩」哲學是什麼？快來測測你的靈魂秘密食材！',
  ogDescription: '透過 6 題性格直覺測驗，找出最能代表你生活態度的咖哩風味。',
  // ogImage: 'https://example.com/quiz-cover.jpg', // 替換成你的測驗封面圖
  twitterCard: 'summary_large_image',
})
</script>
