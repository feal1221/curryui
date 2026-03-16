<template>
  <div
    class="flex flex-col justify-center items-center gap-4 mt-4 bg-[var(--bg-yellow)] min-h-screen px-4 py-20"
  >
    <h1>想來點不一樣的咖哩嗎？</h1>
    <div class="flex gap-4 text-center whitespace-pre-wrap">
      {{ "測出你的靈魂拌哩\n黃金比例混搭新滋味，讓好侍咖哩帶你獨自升級！" }}
    </div>
    <UiButton variant="destructive" class="font-bold">
      <NuxtLink :to="'/about'"> 開始測驗！ </NuxtLink>
    </UiButton>
    <div
      class="flex gap-4 text-center whitespace-pre-wrap p-4 flex-col text-[var(--primary-brown)]"
    >
      <h1 class="text-5xl font-bold leading-16 whitespace-pre-wrap">
        {{ "分享你的咖哩人格測驗結果至個人FB或IG動態牆\n並截圖上傳到"
        }}<span class="text-[#C81F19]">{{
          "好侍官方FB粉專抽獎活動貼文留言\n"
        }}</span
        >{{ "就有機會獲得\nApple Watch、 AirPods 3、Marshell 藍牙喇叭！" }}
      </h1>
      <svg viewBox="0 0 1000 200" preserveAspectRatio="xMidYMid meet">
        <text
          x="500"
          y="120"
          text-anchor="middle"
          dominant-baseline="middle"
          class="svg-curry-title"
          stroke-linejoin="round"
        >
          測出你的咖哩人格活動規則
        </text>
      </svg>
      <template v-for="a in activity" :key="a.title">
        <div class="font-medium self-start flex flex-col">
          <div class="text-3xl self-start my-4">
            {{ a.title }}
          </div>
          <ul
            class="list-disc list-outside text-left text-lg self-start text-2xl ml-8 my-4"
          >
            <li v-for="c in a.content" :key="c">{{ c }}</li>
          </ul>
          <div class="self-start text-base text-left" v-for="n in a.notices" :key="n">
            *{{ n }}
          </div>
        </div>

      </template>
    </div>
  </div>
</template>
<script setup>
const activity = [
  {
  title: "活動期間",
  content: [
    "測驗時間：",
  ],
  notices:[
    " 時間判別以本活動網站系統為準",
    " 得獎公布日期：預計2026年5月8日(五)當天公布"
  ]
},
{
title: "活動辦法",
content: [
  "活動期間於此活動網站完成咖哩人格測驗，並將測驗結果圖分享至個人Facebook或IG(不限貼文或限時動態)，截圖分享畫面上傳至台灣好侍FB粉轉指定貼文下方，即可參加抽獎！"],
notices:[
  " 活動參加次數不可累計！",
  " 每人僅有乙次得獎機會，重複登錄將取消參加資格。",
  " 參加本活動者如未滿18歲(西元2007年6月5日以後出生)或未正確填寫資料，主辦單位將取消其參加及兌獎資格。",
  " 個人資料僅限台灣好侍食品「2026 測出你的咖哩人格」線上人格測驗活動使用。"
]},
{
  title: "活動獎品",}
]
</script>
<style scoped>
.svg-curry-title {
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  font-size: 48px;
  fill: var(--primary-brown); /* 填充顏色 = 黑色文字 */
  stroke: white; /* 描邊顏色 = 白色邊框 */
  stroke-width: 16px; /* 完美圓潤粗邊框厚度 */
  stroke-linejoin: round; /* 讓邊角變圓滑 */
  /* ⭐️ 魔法在這裡：告訴瀏覽器「先畫外框，再畫內層文字」 */
  paint-order: stroke fill;
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));
}
.c-title {
  position: relative; /* 讓偽元素可以絕對定位在它下方 */
  color: var(--primary-brown); /* 主文字顏色 */
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -5px;
  margin: 0;
  line-height: 1.4;
  word-break: keep-all;
  z-index: 1; /* 確保主文字在最上層 */
}

/* 魔法在這裡：創造一個一模一樣的文字疊在底下當邊框 */
.c-title::before {
  content: attr(data-storke); /* 讀取 HTML 裡的 data-storke 內容 */
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1; /* 墊在主文字下方 */

  /* 這裡設定你要的完美平滑粗邊框，數值可以盡情調大不會吃字 */
  -webkit-text-stroke: 15px white;

  /* 把偽元素本身的文字顏色設為與邊框同色，或透明 */
  color: white;
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));
}

.curry-title {
  font-size: clamp(2rem, 6vw, 4rem);
  font-weight: 900;
  /* 稍微拉近字距，幫助白邊更容易黏合在一起 */
  letter-spacing: -5px;
  margin: 0;

  /* 秘訣一：用非常密集的 text-shadow 打造厚實且圓潤的白框 */
  /* 這裡把擴散範圍拉大到 4px 和 5px，確保字與字之間的縫隙被白邊填滿 */
  text-shadow:
    0px -5px 0 white,
    0px 5px 0 white,
    -5px 0px 0 white,
    5px 0px 0 white,
    -4px -4px 0 white,
    4px -4px 0 white,
    -4px 4px 0 white,
    4px 4px 0 white,
    -2px -5px 0 white,
    2px -5px 0 white,
    -5px -2px 0 white,
    5px -2px 0 white,
    -2px 5px 0 white,
    2px 5px 0 white,
    -5px 2px 0 white,
    5px 2px 0 white;

  /* 秘訣二：使用 drop-shadow 產生貼紙般的整體外陰影 */
  /* 它會追蹤上面 text-shadow 產生的不規則邊界，投射出完美的連續陰影 */
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));

  line-height: 1.4;
  word-break: keep-all;
}
.text-stroke-white {
  color: var(--primary-brown); /* 內部填色 */
  -webkit-text-stroke: 2px white; /* 較粗的白框 */
  text-stroke: 2px white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 黑色陰影 */
  font-weight: 900;
}
.title {
  text-shadow:
    -5px -5px 0 #fff,
    5px -5px 0 #fff,
    -5px 5px 0 #fff,
    5px 5px 0 #fff,
    0px 6px 0 rgba(0, 0, 0, 0.1),
    0px 12px 16px rgba(0, 0, 0, 0.15);
}
.text-outline-white {
  text-shadow:
    -6px -6px 0 #fff,
    6px -6px 0 #fff,
    -6px 6px 0 #fff,
    6px 6px 0 #fff,
    0px 10px 14px rgba(0, 0, 0, 0.15);
}
.white-stroke {
  -webkit-text-stroke: 5px white; /* 2px 白色文字外框 */
  /* text-stroke: 2px white; */

  /* 選用：增加陰影讓外框更明顯 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.stroke {
  text-shadow:
    -5px 0 white,
    0 5px white,
    5px 0 white,
    0 -5px white;
}

.white-outline-black-shadow {
  color: var(--primary-brown);
  text-shadow:
    -3px 0 0 #fff,
    3px 0 0 #fff,
    /* 0   -3px 0 #fff,
     0    3px 0 #fff,
    -3px -3px 0 #fff,
     3px -3px 0 #fff,
    -3px  3px 0 #fff,
     3px  3px 0 #fff,  */
    0 6px 10px rgba(0, 0, 0, 0.45);
}
.logo_01::before {
  content: attr(data-storke);

  position: absolute;

  margin-top: 6px;

  z-index: -1;

  -webkit-text-stroke: 4px #ffffff;

  text-stroke: 4px #ffffff;
}
</style>
