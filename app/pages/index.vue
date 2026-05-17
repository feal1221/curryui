<template>
  <curry-bar />
  <div
    class="flex flex-col justify-center items-center gap-4 mt-0 sm:mt-4 bg-[var(--bg-yellow)] min-h-[788px] sm:min-h-[875px] pt-12 "
  >
    <!-- 活動測驗 -->
    <section
      class="bg-[#F09020] w-full min-h-[740px] sm:min-h-[820px] relative overflow-hidden"
      id="test"
    >
      <img
        src="/assets/images/bg-yellow.png"
        class="absolute top-24 left-1/2 -translate-x-1/2 w-[933px] sm:-top-24 sm:w-[1953px] h-auto max-w-none"
      />
      <img
        src="/assets/images/veg.png"
        class="hidden sm:block w-[90vw] 2xl:w-[85vw] absolute z-20 top-6 left-2 w-22 sm:w-auto sm:top-[1%] sm:left-[6%]"
      />
      <img
        src="/assets/images/vegPhone.png"
        class="block absolute sm:hidden w-[95vw] max-w-[352px] left-1/2 top-[-1%] -translate-x-1/2 z-2"
      />

      <NuxtImg
        src="/images/top-title.png"
        class="left-1/2 -translate-x-1/2 absolute top-58 sm:top-32 w-[95vw] max-w-[680px] md:max-w-auto z-30"
        format="webp"
      />
      <NuxtImg 
        src="/images/Rectangle.png"
        class="absolute z-20 top-[12%] left-[34%] w-29 sm:w-40 lg:w-[214px] -rotate-[16.76deg] sm:top-[3%] sm:left-[45%] lg:top-[5%] lg:left-[54%] xl:left-[66%] 2xl:left-[66%] "
        format="webp" 
        quality="80"
      />
      <NuxtImg 
        src="/images/Rectangle-1.png"
        class="absolute z-20 top-[20%] left-[64%] w-29 sm:w-40 lg:w-[214px] rotate-[22.42deg] sm:top-[5%] lg:top-[8%] xl:top-[20%] sm:left-[72%] lg:left-[76%] xl:left-[80%] pr-1 2xl:left-[76%]"
        format="webp" 
        quality="80"
      />
      <div class="">
        <popup />
      </div>
    </section>
  </div>
</template>
<script setup>
import watchImage from "~/assets/images/watch.png";
import airpodImage from "~/assets/images/airpod.png";
import speakerImage from "~/assets/images/speaker.png";
import roofImage from "~/assets/images/roof.png";

onMounted(() => {
  sessionStorage.clear();
});
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const download = async () =>{
  const excel = await useApi("/results/exportExcel", {
      method: "GET",
        // responseType: "blob"
    });
    // const blob = excel; //
    // let fileName = 'results.xlsx'; // 預設檔名
    // const url = window.URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.href = url;

    // link.setAttribute('download', fileName);
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // window.URL.revokeObjectURL(url);
}

const activity = [
  {
    title: "活動期間",
    content: ["測驗時間：2026年4月10日(五)至2026年5月7日(四) 23:59止"],
    notices: [" 時間判別以本活動網站系統為準"],
    linkkk: true,
  },
  {
    title: "活動辦法",
    content: [
      "活動期間於此活動網站完成咖哩人格測驗，並將測驗結果圖分享至個人FB、IG或Threads(不限貼文或限時動態)，截圖分享畫面上傳至台灣好侍FB粉專指定貼文下方，即可參加抽獎！",
    ],
    notices: [
      " 活動參加次數不可累計！",
      " 每人僅有乙次得獎機會，以第一個抽中獎品為主。",
      " 參加本活動未正確填寫資料，主辦單位將取消其參加及兌獎資格。",
      " 得獎者未滿18歲需提交法定代理人同意書及檢附證明文件，若無法於兌獎時提交視同放棄兌獎資格。",
      " 個人資料僅限台灣好侍食品「2026 測出你的咖哩人格」線上人格測驗活動使用。",
    ],
  },
  {
    title: "活動獎品",
  },
];
const rewards = [
  {
    name: "Apple Watch Series 11",
    value: "12,900",
    url: watchImage,
  },
  {
    name: "AirPods Pro 3",
    value: "7,490",
    url: airpodImage,
  },
  {
    name: "Marshall Middleton II \n攜帶式藍牙喇叭",
    value: "11,900",
    url: speakerImage,
  },
];
const curryList = [
  { name: "佛蒙特咖哩塊系列\n(甜味/中辣/辣味)", url: '/images/curry101.jpg' },
  { name: "爪哇咖哩塊系列\n(中辣/辣味/香辛辣)", url: '/images/curry105.jpg' },
  { name: "素食咖哩塊", url: '/images/curry104.jpg' },
  { name: "完熟蕃茄燴飯料理塊", url: '/images/curry102.jpg' },
  { name: "北海道白醬系列\n(原味/奶油玉米)", url: '/images/curry103.jpg' },
  { name: "美味嚴選調理包系列", url: '/images/curry108.png' },
  { name: "咖哩調理包系列", url: '/images/curry107.png' },
];
</script>
<style scoped>
.roof {
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: repeat-x;
  background-size: auto;
  background-position: top left;
  width: 100%;
  height: 79px;
}
</style>
