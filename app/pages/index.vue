<template>
  <div
    class="flex flex-col justify-center items-center gap-4 mt-4 bg-[var(--bg-yellow)] min-h-screen pt-16"
  >
    <!-- 活動測驗 -->
    <div class="bg-[#F09020] w-full min-h-[820px] relative overflow-hidden">
      <img
        src="/assets/images/bg-yellow.png"
        class="absolute -top-24 left-1/2 -translate-x-1/2 w-[1953px] h-[984px] max-w-none"
      />
      <img
        src="/assets/images/top-title.png"
        class="left-1/2 -translate-x-1/2 absolute top-32"
      />
      <img src="/assets/images/veg.png" class="absolute z-20 top-5 left-20" />
      <img
        src="/assets/images/Rectangle-1.png"
        class="absolute z-20 top-40 right-6"
      />
      <img
        src="/assets/images/Rectangle.png"
        class="absolute z-20 top-5 right-52"
      />
      <UiButton
        variant="destructive"
        class="px-20 py-3 font-bold text-2xl absolute z-20 bottom-36 left-1/2 -translate-x-1/2"
      >
        <NuxtLink :to="'/about'" class="flex items-center gap-1">
          <Icon name="material-symbols:touch-app" class="text-3xl" />

          開始測驗！
        </NuxtLink>
      </UiButton>
    </div>
    <!-- 抽獎獎品資訊 -->
    <div
      class="my-16 flex text-center whitespace-pre-wrap pr-36 pl-36 flex-col text-[var(--primary-brown)]"
    >
      <h1 class="text-5xl font-bold leading-18 whitespace-pre-wrap break-keep">
        {{ "分享你的咖哩人格測驗結果至個人FB或IG動態牆\n並截圖上傳到"
        }}<span class="text-[#C81F19]">{{
          "好侍官方FB粉專抽獎活動貼文留言\n"
        }}</span
        >{{ "就有機會獲得\nApple Watch、 AirPods Pro 3、Marshall 藍牙喇叭！" }}
      </h1>
      <img src="/assets/images/iphone&airpods.png" class="self-center" />
      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="xMidYMid meet"
        class="h-[160px]"
      >
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
        <div class="font-medium self-start flex flex-col mb-4">
          <div class="text-3xl self-start my-4">
            {{ a.title }}
          </div>
          <ul
            v-if="a.content"
            class="list-disc list-outside text-left text-2xl self-start text-2xl ml-8 my-4"
          >
            <li v-for="c in a.content" :key="c">{{ c }}</li>
          </ul>
          <div
            class="self-start text-base text-left"
            v-for="n in a.notices"
            :key="n"
          >
            *{{ n }}
          </div>
        </div>
      </template>
      <div class="flex gap-6">
        <template v-for="r in rewards" :key="r.name">
          <div>
            <div
              class="relative bg-white w-70 h-70 rounded-2xl overflow-hidden"
            >
              <div class="text-2xl mt-6 font-medium">{{ "分享就抽" }}</div>
              <img
                :src="r.url"
                class="absolute -top-4 left-1/2 -translate-x-1/2 translate-y-1/2"
              />
              <div
                class="absolute bottom-0 right-0 w-22 h-18 bg-[#C81F19] text-white text-2xl flex items-end justify-end p-2"
                style="clip-path: polygon(100% 0, 100% 100%, 0 100%)"
              >
                {{ "1名" }}
              </div>
              <div class="mt-48 text-base font-medium">
                {{ "價值 $" + r.value }}
              </div>
            </div>
            <div class="text-2xl font-medium mt-4">{{ r.name }}</div>
          </div>
        </template>
      </div>
    </div>
    <!-- 全民咖哩任務 -->
    <div
      class="flex justify-center bg-[#F2E132] w-full min-h-[2978px] relative overflow-hidden"
    >
      <img
        src="/assets/images/veg2.png"
        class="absolute -translate-x-1/2 left-1/2 top-40 z-2"
      />
      <img
        src="/assets/images/title2.png"
        class="absolute -translate-x-1/2 left-1/2 top-36"
      />
      <div class="flex mt-80 flex-col w-full jutify-center">
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          class="h-[160px] -mt-16"
        >
          <text
            x="500"
            y="120"
            text-anchor="middle"
            dominant-baseline="middle"
            class="svg-curry-title"
            stroke-linejoin="round"
          >
            簡訊發票登陸活動
          </text>
        </svg>
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          class="h-[160px] -mt-20"
        >
          <text
            x="500"
            y="120"
            text-anchor="middle"
            dominant-baseline="middle"
            class="svg-red-title"
            stroke-linejoin="round"
          >
            抽iPhone17、東京來回機票等大獎！
          </text>
        </svg>
        <div class="flex flex-col gap-4 justify-center">
          <div class="flex gap-4 justify-center">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-50 h-87 p-9 text-white text-2xl flex items-center justify-center"
            >
              {{ "活動辦法" }}
            </div>
            <div class="bg-white rounded-xl w-[864px] h-87 p-9 font-medium">
              <div class="text-[var(--primary-brown)] text-2xl leading-relaxed">
                {{
                  "Step1. 於活動期間(2026/4/10-2026/5/7)於全台通路(全聯、大全聯、家樂福、家樂福超市、愛買等通路)一次購買「好侍咖哩塊系列」任2盒。"
                }}
              </div>
              <div class="text-[var(--text-red)] text-2xl leading-relaxed">
                {{ "※購買下圖示活動指定購買商品。" }}
              </div>
              <div class="text-[var(--primary-brown)] text-2xl leading-relaxed">
                {{
                  "Step2.憑該筆發票號碼，編輯簡訊「HOUSE+發票後八碼」傳送至83811，就可獲得抽獎資格。"
                }}
              </div>
              <div
                class="text-[var(--primary-brown)] text-base whitespace-pre-line mt-4"
              >
                {{
                  "*活動參加次數可累計，參與活動越多次，得獎機會越高！\n*同一張發票號碼僅限登錄乙次，且僅有乙次得獎機會，重複登錄將取消參加資格。\n*參加本活動如未滿18歲(西元2008年4月10日以後出生)，主辦單位將取消其參加及兌獎資格。"
                }}
              </div>
            </div>
          </div>
          <div class="flex gap-4 justify-center">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-50 h-78 p-9 text-white text-2xl flex items-center justify-center text-center whitespace-pre-wrap"
            >
              {{ "活動指定\n購買商品" }}
            </div>
            <div class="bg-white rounded-xl w-[864px] h-78 p-9 font-medium">
              <div
                class="text-[var(--primary-brown)] text-base leading-relaxed"
              >
                <div class="flex gap-4 flex-wrap mt-4 items-center">
                  <div v-for="c in curryList" :key="c.name">
                    <img :src="c.url" />
                    <div class="text-center p-2">{{ c.name }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-4 justify-center">
            <div
              class="bg-[var(--primary-brown)] rounded-xl w-50 h-40 p-9 text-white text-2xl flex items-center justify-center text-center whitespace-pre-wrap"
            >
              {{ "發票登錄時間" }}
            </div>
            <div
              class="bg-white rounded-xl w-[864px] h-40 p-9 font-medium text-[var(--primary-brown)] text-2xl leading-relaxed flex items-center"
            >
              {{ "2026年4月10日起至2026年5月7日23:59分止" }}
            </div>
          </div>
        </div>

        <UiButton
          variant="destructive"
          class="px-20 py-3 font-bold text-2xl self-center mt-8"
          >{{ "詳細活動資訊" }}
        </UiButton>
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          class="h-[160px] -mt-5"
        >
          <text
            x="500"
            y="120"
            text-anchor="middle"
            dominant-baseline="middle"
            class="svg-curry-title"
            stroke-linejoin="round"
          >
            門店巡迴活動
          </text>
        </svg>
        <div
          class="flex justify-center whitespace-pre-line text-center gap-2 flex-col items-center font-medium"
        >
          <div class="text-[var(--primary-brown)] text-2xl whitespace-pre-line">
            {{ "好侍x全聯 春之咖哩季 門市限定活動" }}
          </div>
          <div class="text-[var(--text-red)] text-2xl">
            {{
              "凡於限定門市購買「好侍咖哩塊系列」任2盒，現場即贈送多樣好禮，"
            }}
          </div>
          <div class="text-[var(--text-red)] text-2xl">
            {{ "買越多送越多，購買滿4盒加碼現抽全聯禮券!" }}
          </div>
          <div class="text-[var(--primary-brown)] text-2xl whitespace-pre-line">
            {{ "（數量有限，送完為止）" }}
          </div>
          <div class="text-[var(--primary-brown)] text-2xl my-6">
            <span class="text-[var(--text-red)]">{{ "憑發票再參加" }}</span
            >{{ "【簡訊發票登錄】抽獎活動！" }}
          </div>

        </div>
          <div class="self-start pl-110 text-[var(--primary-brown)] text-2xl my-5 font-medium">
            {{ "活動門市資訊：" }}
          </div>
        <img
          src="/assets/images/com-table.png"
          class="max-w-[1020px] mx-auto"
        />
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          class="h-[160px]"
        >
          <text
            x="500"
            y="120"
            text-anchor="middle"
            dominant-baseline="middle"
            class="svg-curry-title"
            stroke-linejoin="round"
          >
            附近超市
          </text>
        </svg>
        <UiButton
          variant="destructive"
          class="px-20 py-3 font-bold text-2xl self-center"
          >{{ "立即查看最近超市" }}
        </UiButton>
        <svg
          viewBox="0 0 1000 200"
          preserveAspectRatio="xMidYMid meet"
          class="h-[160px]"
        >
          <text
            x="500"
            y="120"
            text-anchor="middle"
            dominant-baseline="middle"
            class="svg-curry-title"
            stroke-linejoin="round"
          >
            得獎公布
          </text>
        </svg>
        <div class="text-[var(--text-red)] font-medium text-4xl mx-auto my-3">Coming Soon</div>
        <div class="text-[var(--primary-brown)] font-medium text-base mx-auto">*公布日期：預計2026年5月8日(五)當天公布。</div>
      </div>

      <div class="roof" :style="{ backgroundImage: `url(${roofImage})` }"></div>
    </div>
  </div>
</template>
<script setup>
import watchImage from "~/assets/images/watch.png";
import airpodImage from "~/assets/images/airpod.png";
import speakerImage from "~/assets/images/speaker.png";
import roofImage from "~/assets/images/roof.png";
import curry1 from "~/assets/images/curry101.png";
import curry2 from "~/assets/images/curry102.png";
import curry3 from "~/assets/images/curry103.png";
import curry4 from "~/assets/images/curry104.png";
import curry5 from "~/assets/images/curry105.png";
import curry6 from "~/assets/images/curry106.png";
import curry7 from "~/assets/images/curry107.png";

const activity = [
  {
    title: "活動期間",
    content: ["測驗時間：2026年4月8日至2026年5月6日(三) 23:59止"],
    notices: [
      " 時間判別以本活動網站系統為準",
      " 得獎公布日期：預計2026年5月8日(五)當天公布",
    ],
  },
  {
    title: "活動辦法",
    content: [
      "活動期間於此活動網站完成咖哩人格測驗，並將測驗結果圖分享至個人Facebook或IG(不限貼文或限時動態)，截圖分享畫面上傳至台灣好侍FB粉專指定貼文下方，即可參加抽獎！",
    ],
    notices: [
      " 活動參加次數不可累計！",
      " 每人僅有乙次得獎機會，以第一個抽中獎品為主。",
      " 參加本活動這位正確填寫資料，主辦單位將取消其參加及兌獎資格。",
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
  { name: "佛蒙特咖哩塊/甜味", url: curry1 },
  { name: "佛蒙特咖哩塊/中辣", url: curry2 },
  { name: "佛蒙特咖哩塊/辣味", url: curry3 },
  { name: "素食料理塊", url: curry4 },
  { name: "爪哇咖哩塊/中辣", url: curry5 },
  { name: "爪哇咖哩塊/辣味", url: curry6 },
  { name: "爪哇咖哩塊/香辛辣", url: curry7 },
];
</script>
<style scoped>
.svg-curry-title {
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  font-size: 72px;
  fill: var(--primary-brown); /* 填充顏色 = 黑色文字 */
  stroke: white; /* 描邊顏色 = 白色邊框 */
  stroke-width: 18px; /* 完美圓潤粗邊框厚度 */
  stroke-linejoin: round; /* 讓邊角變圓滑 */
  /* ⭐️ 魔法在這裡：告訴瀏覽器「先畫外框，再畫內層文字」 */
  paint-order: stroke fill;
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));
}
.svg-red-title {
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  font-size: 72px;
  fill: #c81f19; /* 填充顏色 = 黑色文字 */
  stroke: white; /* 描邊顏色 = 白色邊框 */
  stroke-width: 18px; /* 完美圓潤粗邊框厚度 */
  stroke-linejoin: round; /* 讓邊角變圓滑 */
  /* ⭐️ 魔法在這裡：告訴瀏覽器「先畫外框，再畫內層文字」 */
  paint-order: stroke fill;
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));
}
.roof {
  position: absolute;
  top: 0;
  left: 0;
  background-repeat: repeat-x;
  background-size: contain;
  background-position: top left;
  width: 100%;
  height: 79px;
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
/* .text-stroke-white {
  color: var(--primary-brown); 
  -webkit-text-stroke: 2px white; 
  text-stroke: 2px white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
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
  -webkit-text-stroke: 5px white;
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
    0 6px 10px rgba(0, 0, 0, 0.45);
}
.logo_01::before {
  content: attr(data-storke);

  position: absolute;

  margin-top: 6px;

  z-index: -1;

  -webkit-text-stroke: 4px #ffffff;

  text-stroke: 4px #ffffff;
} */
</style>
