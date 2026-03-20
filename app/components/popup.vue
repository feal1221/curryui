<template>
  <UiDialog v-model:open="showDialog" :modal="true">
    <UiDialogTrigger>
      <UiButton
        variant="destructive"
        class="px-20 py-3 font-bold text-2xl absolute z-20 bottom-36 left-1/2 -translate-x-1/2"
      >
        <Icon name="material-symbols:touch-app" class="text-3xl" />
        開始測驗！
      </UiButton>
    </UiDialogTrigger>
    <UiDialogContent
      :show-close-button="false"
      class="h-[927px] w-[944px] max-w-[944px] sm:max-w-[944px] overflow-y-auto bg-[var(--bg-gray)]"
      @pointer-down-outside.prevent
      @interact-outside.prevent
    >
      <UiDialogHeader>
        <UiDialogTitle></UiDialogTitle>
        <UiDialogDescription>
          <div
            v-if="pageIndex === 0"
            class="flex flex-col justify-center items-center text-2xl font-medium text-[var(--primary-brown)] leading-[36px] p-25"
          >
            <h1 class="bg-[#FAD35C] px-8 py-2">
              {{ "咖哩拌動靈魂，調配你的命定配方" }}
            </h1>
            <br />
            <div>形形色色的咖哩，就像不同樣貌的靈魂。</div>
            <br />
            <div>有人喜歡探索香料的層次…</div>
            <div>有人偏愛醇厚濃郁的口感…</div>
            <div>有人習慣拌著飯吃，也有人選擇不拌</div>
            <br />

            <div>但不論偏好什麼風味</div>
            <div>每個人心裡，都有一種屬於自己的完美比例</div>
            <div>正是象徵你的處世哲學。</div>
            <br />

            <div>六個問題</div>
            <div>測出你靈魂中的「拌哩」哲學</div>
            <div>揭開你的咖哩混搭黃金比例。</div>
            <br />

            <UiButton
              variant="destructive"
              @click="pageIndex = 1"
              class="w-full sm:w-60 text-base sm:text-2xl py-2 sm:py-3 px-12"
            >
              繼續
            </UiButton>
          </div>
          <about v-if="pageIndex === 1" />
          <question v-if="pageIndex >= 2" />
        </UiDialogDescription>
      </UiDialogHeader>
    </UiDialogContent>
  </UiDialog>
</template>
<script setup>
const showDialog = ref(false);
const pageIndex = ref(0);
provide("pageIndex", pageIndex);
</script>
