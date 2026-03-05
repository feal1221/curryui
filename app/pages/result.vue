<template>
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <div>{{ "長按上方圖片儲存結果" }}</div>
    <UiDialog v-model:open="showDialog">
      <UiDialogTrigger>
        <UiButton variant="secondary"> 分享測驗結果給好友 </UiButton>
      </UiDialogTrigger>
      <UiDialogContent>
        <UiDialogHeader>
          <UiDialogTitle>分享結果至</UiDialogTitle>
          <UiDialogDescription>
            <div class="flex gap-2 flex-wrap">
              <Line class="cursor-pointer" @click="shareToLine" />
              <FB class="cursor-pointer mt-1.5" @click="shareToFB" />
              <Threads
                class="cursor-pointer mt-1.5 ml-1"
                @click="shareToThreads"
              />
              <Ig
                v-if="isMobile"
                class="cursor-pointer mt-2 ml-2"
                @click="downloadImage"
              />
              <div
                class="mt-2 p-1 h-8 text-center text-sm text-gray-500 cursor-pointer border-1 solid border-gray-300 rounded-md"
                @click="copyText('已複製文字，快去貼上分享吧！')"
              >
                複製文字
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
    <div class="flex gap-2">
      <UiButton variant="secondary">
        <NuxtLink :to="'/question/1'"> 再玩一次 </NuxtLink>
      </UiButton>
      <div
        class="flex items-center gap-1 cursor-pointer border-1 solid border-gray-300 rounded-md px-2 py-1"
        @click="copyLink"
      >
        <Copy />
        <div class="text-sm text-gray-500">複製測驗連結</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import shareImageUrl from "@/assets/F.jpg";
import FB from "@/assets/Fb.vue";
import Line from "@/assets/LineLogo.vue";
import Threads from "@/assets/Threads.vue";
import Ig from "@/assets/Ig.vue";
import Copy from "@/assets/Copy.vue";
import { toast } from "vue-sonner";
const showDialog = ref(false);
// useSeoMeta({
//   title: `我是【絲滑奶油型】靈魂！ - 咖哩靈魂拌測驗結果`,
//   ogTitle: `測驗結果：我的靈魂是溫潤的絲滑奶油`,
//   ogImage: `https://example.com/images/result-${resultId}.jpg`, // 動態對應結果圖
// })

// const ngrokUrl = "http://172.20.10.2:8080";
const ngrokUrl = "https://grilla-estella-noneducationally.ngrok-free.dev/api";
const textToCopy = "我是月光花，一起來測你是哪種花朵? #心理測驗 #月光花";
const shareUrl = `${ngrokUrl}/share/${123}`;
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const copyText = async (toastM) => {
  await navigator.clipboard.writeText(textToCopy);
  toast.success(toastM);
};
const copyLink = async () => {
  const url = window.location.origin
  await navigator.clipboard.writeText(url);
  toast.success("複製成功！快去分享給朋友吧！");
};
const timeout = 500; // 0.5秒後開啟分享視窗，確保複製完成

const shareToLine = () => {
  // 將文字與網址組合成一段內容
  const fullText = `${textToCopy}\n${ngrokUrl}/share/123`;

  // 使用 R/share 格式，這是目前最能保證「文字」被塞進去的方法
  const lineUrl = isMobile
    ? `https://line.me/R/share?text=${encodeURIComponent(fullText)}`
    : `https://social-plugins.line.me/lineit/share?text=${encodeURIComponent(fullText)}`;

  window.open(lineUrl, "_blank");
};

const shareToFB = async () => {
  try {
    // 1. 自動幫使用者複製文字
    copyText("已為您複製結果文字！請直接在 FB 貼上即可分享。");
    // if (navigator.share) {
    //   await navigator.share({
    //     title: '分享至 Facebook',
    //     text: textToCopy,
    //     url: shareUrl,
    //   });
    //   return;
    // }
    // 2. 開啟 FB 分享視窗
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    setTimeout(() => {
      window.open(url, "_blank");
    }, timeout);
  } catch (err) {
    console.error("複製失敗", err);
  }
};

const shareToThreads = () => {
  const text = `${textToCopy}\n\n${shareUrl}`;
  const url = `https://www.threads.net/intent/post?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};
// 4. 下載圖片 (針對 IG 最友善的做法)
const downloadImage = async () => {
  copyText("已為您複製結果文字！請直接在 IG 貼上即可分享。");
  // IG 的限時動態跳轉協議
  const response = await fetch(shareImageUrl, { method: "GET" });
  const blob = await response.blob();
  const file = new File([blob], "result.jpg", { type: "image/jpeg" });

  // 2. 檢查手機是否支援分享檔案
  setTimeout(async () => {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: "我的測驗結果",
        text: "快來看看我的測驗結果！",
      });
    } else {
      // 3. 不支援時的保底：直接開啟 IG
      window.location.href = "instagram://story-camera";
    }
  }, timeout);
};
</script>
