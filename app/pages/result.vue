<template>
  <div
    v-if="isAllowed"
    class="bg-[var(--bg-yellow)] min-h-screen flex flex-col items-center gap-15 py-20"
  >
    <h1
      class="text-[var(--primary-brown)] text-[40px] sm:text-5xl font-bold self-start sm:self-center px-6 sm:px-0"
    >
      {{ "你的咖哩人格是..." }}
    </h1>
    <img :src="shareImageUrlMap[completedFlag]" class="max-w-[calc(100vw-15px)] sm:max-w-[726px]" />
    <div
      class="text-[var(--primary-brown)] text-2xl font-normal flex flex-col items-center leading-[36px] px-6"
    >
      <div class="text-center">
        {{ "長按上方結果圖片或滑鼠右鍵另存圖片" }}
        <div
          class="text-[var(--primary-brown)] text-2xl font-normal break-all "
        >
          {{ "立刻將你的測驗結果圖分享至好侍官方FB活動貼文留言處參加抽獎！" }}
        </div>
      </div>
    </div>
    <div class="flex flex-col px-6 gap-10">
      <a href="https://www.facebook.com/house.curry.tw" target="_blank">
         <UiButton
          variant="destructive"
          class="font-bold text-2xl px-4 py-4 sm:px-22 sm:py-4"
        >
          <Icon name="streamline-sharp:gift-2-remix" />
          立即至好侍FB參加抽獎
        </UiButton>
      </a>
      <UiDialog v-model:open="showDialog">
        <UiDialogTrigger as-child>
          <UiButton
            variant="destructive"
            class="font-bold text-2xl px-4 py-4 sm:px-22 sm:py-4"
          >
            <Icon
              name="streamline-sharp:share-link-solid"
            />邀請朋友測驗咖哩人格
          </UiButton>
        </UiDialogTrigger>
        <UiDialogContent
          :show-close-button="false"
          class="bg-[var(--bg-gray)] h-[100vh] w-[100vw] max-w-[944px] sm:max-w-[944px] overflow-y-auto !px-0 sm:!p-6"
        >
          <UiDialogHeader>
            <UiDialogTitle
              @click="showDialog = false"
              class="cursor-pointer text-2xl ml-5 text-left font-bold sm:mb-0 mb-4"
              >←</UiDialogTitle
            >
            <UiDialogDescription as-child>
              <div
                class="flex flex-col p-0 sm:p-10 w-full sm:max-w-[500px] mx-auto text-[var(--primary-brown)]"
              >
                <div class="flex flex-col justify-center items-center w-full">
                  <img src="/images/share.png" class="w-full h-auto" />
                  <div
                    class="bg-white border-[1px] border-solid border-[var(--primary-brown)] text-[var(--primary-brown)] flex flex-col font-medium p-6 gap-2 w-full"
                  >
                    <div class="text-2xl text-left font-bold">
                      本命咖哩大公開！
                    </div>
                    <div class="text-base text-left">
                      測出你的咖哩人格，解鎖你命定的咖哩配方，就有機會獲得 Apple
                      Watch 等大禮！
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap justify-start sm:justify-between items-start mt-6 w-full">
                  <div
                    class="flex flex-col items-center flex-1 cursor-pointer"
                    @click="copyLink"
                  >
                    <img src="/assets/images/copy.png" class="w-auto h-auto" />
                    <span class="text-xs mt-2 text-[#54310F]">複製連結</span>
                  </div>

                  <div
                    class="flex flex-col items-center flex-1 cursor-pointer"
                    @click="shareToFB"
                  >
                    <img src="/assets/images/Facebook.png" />
                    <span class="text-xs mt-2 text-[#54310F]">Facebook</span>
                  </div>

                  <div
                    class="flex flex-col items-center flex-1 cursor-pointer"
                    @click="shareIg"
                  >
                    <img src="/assets/images/Instagram.png" />
                    <span class="text-xs mt-2 text-[#54310F]">Instagram</span>
                  </div>

                  <!-- <div
                    class="flex flex-col items-center flex-1 cursor-pointer"
                  >
                    <img src="/assets/images/LINE.png" />
                    <span class="text-xs mt-2 text-[#54310F]">LINE</span>
                  </div> -->

                  <div
                    class="flex flex-col items-center flex-1 cursor-pointer"
                    @click="shareToThreads"
                  >
                    <img src="/assets/images/threads.png" />
                    <span class="text-xs mt-2 ]">Threads</span>
                  </div>
                </div>
              </div>
            </UiDialogDescription>
          </UiDialogHeader>
          <!-- <UiDialogFooter>
            <UiButton variant="secondary" @click="showDialog = false">
              關閉
            </UiButton>
          </UiDialogFooter> -->
        </UiDialogContent>
      </UiDialog>
    </div>
    <!-- <div
          class="flex items-center gap-1 cursor-pointer border-1 solid border-gray-300 rounded-md px-2 py-1"
          @click="copyLink"
        >
          <div class="text-sm text-gray-500">邀請朋友測驗咖哩人格</div>
        </div> -->
    <div
      class="flex flex-col gap-4 w-full items-center justify-center"
    >
      <div
        class="bg-white rounded-xl w-full max-w-[632px] sm:h-[221px] relative py-8 sm:py-0 mx-auto"
      >
        <div
          class="flex flex-col sm:flex-row items-center h-full px-6 sm:px-10 gap-6 sm:gap-10"
        >
          <div class="flex flex-col justify-center items-center gap-2 shrink-0">
            <img src="/assets/images/water.png" class="w-auto h-auto" />
            <div
              class="text-2xl font-normal text-[var(--primary-brown)] whitespace-nowrap"
            >
              水量指南
            </div>
          </div>

          <div
            class="w-full h-[1px] sm:w-[2px] sm:h-[121px] bg-[var(--primary-brown)]"
          ></div>

          <div
            class="flex flex-col justify-center items-start text-base font-normal text-[var(--primary-brown)] gap-2 w-full"
          >
            <div class="flex flex-col gap-1">
              <div>
                {{ "每1小塊水的用量：" }}
              </div>
              <div>{{ "佛蒙特咖哩塊系列 約120ml/1小塊" }}</div>
              <div>{{ "爪哇咖哩塊系列 約150ml/1小塊" }}</div>
              <div>{{ "北海道白醬料理塊系列 約150ml/1小塊" }}</div>
              <div>{{ "完熟蕃茄燴飯料理塊 約110ml/1小塊" }}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex flex-col font-normal leading-[24px] text-base text-[var(--primary-brown)] w-full max-w-[632px] gap-2 px-6 sm:px-0"
      >
        <div class="self-start font-normal">
          {{ "注意事項：" }}
        </div>
        <ul class="list-disc list-outside ml-5 space-y-2">
          <li>
            若料理塊的數量太少，烹煮起來會比較困難，建議一次烹煮分量為四小塊以上。
          </li>
          <li>
            烹煮時，因食材的數量和種類、鍋子的大小以及火候會有所不同，請以上述水量為基準，並根據個人喜好進行調整，同時參考包裝上的說明。
          </li>
          <li>
            已開封的咖哩塊建議放入食物保鮮盒或密封容器，或是裝進保鮮夾鏈袋，並盡量將空氣擠出來再封口後，放進冰箱冷藏保存，並儘快使用完畢。
          </li>
        </ul>
      </div>
    </div>
    <div class="px-6 flex w-full items-center justify-center">
    <UiButton
      class="w-full sm:w-auto font-bold text-2xl px-4 py-2 sm:px-22 sm:py-4 bg-[var(--primary-brown)] border-[var(--primary-brown)] hover:bg-[var(--primary-brown)]"
    >
      <NuxtLink :to="'/'"> 返回活動首頁 </NuxtLink>

    </UiButton>
    </div>

  </div>
  <div
    v-else
    class="bg-[var(--bg-yellow)] min-h-screen flex flex-col items-center gap-15 py-20"
  ></div>
</template>
<script setup>
import Sweet from "~/assets/images/result5.jpg";
import Balance from "~/assets/images/result1.jpg";
import Spicy from "~/assets/images/result2.jpg";
import Tart from "~/assets/images/result3.jpg";
import Creamy from "~/assets/images/result4.jpg";
import shareImageUrl from "/images/share.png";
import { toast } from "vue-sonner";
const completedFlag = ref(null);
const isAllowed = computed(() => (completedFlag.value ? true : false));

onMounted(() => {
  completedFlag.value = sessionStorage.getItem("quiz_completed");
  if (!isAllowed.value) {
    // 如果沒有完成測驗，導回首頁
    navigateTo("/");
  }
});
onBeforeRouteLeave(() => {
  // 離開頁面前清除完成標記，防止用戶返回後看到結果頁
  if (completedFlag.value) {
  sessionStorage.removeItem("quiz_completed");
  }
});
onUnmounted(() => {
  if (completedFlag.value) {
    sessionStorage.removeItem('quiz_passed')
  }
})
const showDialog = ref(false);
const shareImageUrlMap = {
  'c8eee529-6362-4727-aec2-1b6aad9cabbb': Balance,
  '20dc7e05-042e-4850-897b-4a1e4427260b': Spicy,
  '5a2a5d3c-efcb-43d0-9ff6-38c1086e5cfc': Tart,
  '2ce14ad5-2b20-4cca-9c88-1aa1c44618b5': Creamy,
  '1f09e28c-b0b9-4e18-9d1d-c98c69199682': Sweet,
}
useHead({
  meta: [
    // 這是最核心的設定，確保手機抓到這張「本命咖哩」的分享圖
    { property: 'og:image', content: shareImageUrl },
    { property: 'og:title', content: '咖哩靈魂拌測驗！測出你的咖哩人格' },
    { property: 'og:description', content: '解鎖你命定的咖哩配方，就有機會獲得 Apple Watch 等大禮！' },
    
  ]
})

const ngrokUrl = "https://test.housefindyourcurry.tw/";
// const ngrokUrl = window.location.origin;
// const textToCopy = "測出你的咖哩人格！探索你的命定咖哩，找到最適合你的黃金比例 #心理測驗 #咖哩人格 #好侍咖哩";
const textToCopy = "咖哩靈魂拌測驗！測出你的咖哩人格，解鎖你命定的咖哩配方，就有機會獲得 Apple Watch 等大禮！快來測測看你的咖哩人格是什麼吧！";
const shareUrl = `${ngrokUrl}`;
// const shareUrl = window.location.origin;
const isMobile = computed(() => {
  if (typeof navigator === "undefined") return false;
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
});
const copyText = async (toastM) => {
  await navigator.clipboard.writeText(textToCopy);
  toast.success(toastM);
};
const copyLink = async () => {
  await navigator.clipboard.writeText(shareUrl);
  toast.success("已複製活動網址！快去分享給朋友吧！");
};
const copyLinkandText = async () => {
  await navigator.clipboard.writeText(`${textToCopy}\n\n${shareUrl}`);
  toast.success("已複製活動網址！快去分享給朋友吧！");
};
const timeout = 1000; // 0.5秒後開啟分享視窗，確保複製完成

const shareToLine = () => {
  // 將文字與網址組合成一段內容
  const fullText = `${textToCopy}\n${ngrokUrl}`;

  // 使用 R/share 格式，這是目前最能保證「文字」被塞進去的方法
  const lineUrl = isMobile
    ? `https://line.me/R/share?text=${encodeURIComponent(fullText)}`
    : `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(fullText)}`;

  window.open(lineUrl, "_blank");
};

const shareToFB = async () => {
  try {
    // 1. 自動幫使用者複製文字
    // copyText("已為您複製結果文字！請直接在 FB 貼上即可分享。");
    // if (navigator.share) {
    //   await navigator.share({
    //     title: '分享至 Facebook',
    //     text: textToCopy,
    //     url: shareUrl,
    //   });
    //   return;
    // }

    // 第二次的寫法↓
    // const url = `fb://facewebmodal/f?href=${encodeURIComponent(shareUrl)}`;
    // 第三次的寫法↓
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    if (isMobile.value) {
        window.location.href = url;
      // 如果 2 秒後還在原地，表示沒有成功開啟 App，改開網頁版
      // setTimeout(() => {
      //   window.open(url, "_blank");
      // }, timeout);
      return;
    }
    // 第一次的寫法↓
    window.open(url, "_blank");
  } catch (err) {
    console.error("複製失敗", err);
  }
};

const shareToThreads = () => {
  const text = `${textToCopy}\n\n${shareUrl}`;
  const url = `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
  if (isMobile.value) {
    // 嘗試開啟 Threads App
    window.location.href = url
    // 如果 2 秒後還在原地，表示沒有成功開啟 App，改開網頁版
    setTimeout(() => {
      window.open(url, "_blank");
    }, timeout);
  } else {
  window.open(url, "_blank");
  }
};
// 4. 下載圖片 (針對 IG 最友善的做法)
const shareIg = async () => {
  copyLinkandText();
  if (!isMobile.value) {
    setTimeout(() => {
      // window.open("instagram://story-camera", "_blank");
      window.open('https://www.instagram.com/', '_blank','noopener,noreferrer');
      // window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener,noreferrer');

    }, timeout);
    return;
  }
  const response = await fetch(shareImageUrl, { method: "GET" });
  const blob = await response.blob();
  const file = new File([blob], "share.jpg", { type: "image/jpeg" });
  // 2. 檢查手機是否支援分享檔案
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    await navigator.share({
      files: [file],
      // title: "咖哩靈魂拌測驗：測出你的咖哩人格！",
      // text: "測出你的咖哩人格，解鎖你命定的咖哩配方。",
      // url: shareUrl,  
    });
  } else {
    // 3. 不支援時的保底：直接開啟 IG
    window.location.href = "instagram://story-camera";
  }
};
</script>
<style scoped></style>
