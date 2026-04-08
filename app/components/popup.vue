<template>
  <UiDialog v-model:open="showDialog" :modal="true">
    <UiDialogTrigger as-child>
      <UiButton
        variant="destructive"
        class="px-22 py-4 font-bold text-2xl absolute z-20 bottom-14 sm:bottom-36 left-1/2 -translate-x-1/2 whitespace-nowrap shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] max-[350px]:px-16"
      >
        <Icon name="material-symbols:touch-app" class="text-3xl" />
        開始測驗！
      </UiButton>
    </UiDialogTrigger>
    <UiDialogContent
      :show-close-button="false"
      class="h-[100vh] w-[calc(100vw-16px)] max-w-[944px] sm:max-w-[944px] overflow-y-auto bg-[var(--bg-gray)]"
      @pointer-down-outside.prevent
      @interact-outside.prevent
    >
      <UiDialogHeader>
        <UiDialogTitle
          @click="showDialog = false"
          class="cursor-pointer text-2xl ml-5 text-right font-medium"
          >x</UiDialogTitle
        >
        <UiDialogDescription>
          <div>
            <div
              v-if="pageIndex === 1"
              class="mx-auto flex flex-col justify-center items-center text-base sm:text-2xl font-medium text-[var(--primary-brown)] leading-relaxed sm:leading-[36px] p-0 sm:p-10 text-center"
            >
              <h1
                class="bg-[#FAD35C] px-4 py-4 sm:px-8 sm:py-2 text-2xl text-left sm:text-center"
              >
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
              <div
                class="flex flex-col sm:flex-row-reverse justify-between mt-4 gap-4 sm:gap-40"
              >
                <UiButton
                  variant="destructive"
                  @click="pageIndex = 2"
                  class="w-[250px] h-[64px] text-2xl py-2 px-4 font-medium"
                >
                  繼續
                </UiButton>
                <UiButton
                  @click="pageIndex = 0"
                  class="w-full sm:w-auto h-[64px] text-2xl px-8 sm:px-20 py-2 sm:py-3 font-medium bg-[var(--primary-brown)] border-[var(--primary-brown)] hover:bg-[var(--primary-brown)]"
                >
                  <span class="font-medium inline-flex items-center gap-2">
                  </span>
                  <span class="font-medium text-nowrap">上一題</span>
                </UiButton>
              </div>
            </div>
            <about v-if="pageIndex === 0" />
            <question v-if="pageIndex >= 2" v-model:visible="showDialog" />
          </div>
        </UiDialogDescription>
      </UiDialogHeader>
    </UiDialogContent>
  </UiDialog>
</template>
<script setup>
const showDialog = ref(false);
const pageIndex = ref(0);
provide("pageIndex", pageIndex);
const tempResult = ref([]);
provide("tempResult", tempResult);
watch(pageIndex, (newVal) => {
  // 滾動到頂部
  const dialogContent = document.querySelector('[data-slot="dialog-content"]');
  if (dialogContent) {
    dialogContent.scrollTop = 0;
  }
  if (newVal === 8) {
    // showDialog.value = false;
  }
});
</script>
