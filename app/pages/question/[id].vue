<template>
  <div class="flex flex-col justify-center items-center gap-4 mt-4">
    <div class="relative flex items-center justify-between w-full max-w-[400px] mt-10 px-2">
      <div
        class="ml-4 absolute top-1/2 left-0 w-[90%] border-t-1 border-dashed border-orange-900/50 -translate-y-1/2 z-0"
      ></div>
      <div
        v-for="(step, index) in mockQA.length"
        :key="index"
        class="relative z-10 w-10 h-10 rounded-full border-2 border-white/80 bg-transparent flex items-center justify-center"
      >
        <div v-if="index === ruoteId - 1" class="w-6 h-6 bg-orange-500 rounded-full"></div>
        <div
          v-else
          class="w-6 h-6 border-1 bg-white border-orange-900/50 rounded-full"
        ></div>
      </div>
    </div>
    <div>
      <div class="text-2xl font-bold"></div>
    </div>
    <div class="text-xl font-bold my-10 p-4">
      <h1>{{ "Q" + ruoteId + "：" }}</h1>
      <h1>{{ mockQA[ruoteId-1].question }}</h1>
    </div>
    <div class="flex justify-center flex-col gap-6 p-4">
      <template v-for="(m, index) in mockQA[ruoteId-1].options" :key="index">
        <UiButton variant="secondary" @click="goNext">
          <span>
            <span class="font-bold" v-if="m.title">{{ m.title }}</span>
            {{ m.description }}
          </span>
        </UiButton>
      </template>
    </div>
  </div>
</template>
<script setup>
const ruoteId = useRoute().params.id;
const goNext = () => {
  if (ruoteId < mockQA.length) {
    navigateTo(`/question/${Number(ruoteId) + 1}`);
  } else {
    navigateTo("/result");
  }
};
const mockQA = [
  {
    question: "面對咖哩的世紀爭議，你的「拌哩」哲學是什麼？",
    options: [
      {
        title: "絕對要拌！",
        description: "我喜歡所有食材被醬汁溫柔包裹，不分彼此。",
      },
      {
        title: "大略拌過：",
        description: "留下一點白飯，享受味道的波動，給彼此一點空間。",
      },
      {
        title: "絕對不拌：",
        description: "白飯與醬汁要有清晰防線，每一口都要自己決定比例。",
      },
      {
        title: "醬汁當配角：",
        description: "比起拌飯，我更喜歡拿麵包或大塊蔬菜沾著吃。",
      },
      {
        title: "隨心所欲：",
        description: "看今天的對象或盤子的心情，沒有固定教條。",
      },
    ],
  },
  {
    question: "忙碌了一整天，你想用什麼方式「拌」走疲勞？",
    options: [
      {
        // title: "吃一碗熱熱甜甜的食物",
        description: "吃一碗熱熱甜甜的食物，找回最熟悉安全感。",
      },
      {
        // title: "約朋友去居酒屋",
        description: "約朋友去居酒屋，來點重口味與辛辣食物，大口抒壓。",
      },
      {
        // title: "點一份精緻的歐式燉菜",
        description: "點一份精緻的歐式燉菜，配上一杯微酸的紅酒或飲品。",
      },
      {
        // title: "泡個熱水澡",
        description: "泡個熱水澡，喝杯濃郁的熱牛奶或濃湯，徹底放鬆。",
      },
      {
        // title: "吃一碗清爽的蔬菜湯",
        description: "煮一鍋簡單的清爽蔬菜料理，讓身體恢復自然平衡。",
      },
    ],
  },
  {
    question: "如果把自己的靈魂比喻為一種「拌料」，你覺得自己最像？",
    options: [
      {
        title: "溫潤蜂蜜：",
        description: "總是能化解周遭的衝突與尷尬。",
      },
      {
        title: "深醞肉桂：",
        description: "深邃且理性，給人一種沈穩的距離感。",
      },
      {
        title: "炙熱乾辣椒：",
        description: "熱情、直接，有你在的地方就有火花。",
      },
      {
        title: "鮮紅蕃茄：",
        description: "帶點知性的酸甜，品味與眾不同。",
      },
      {
        title: "絲滑奶油：",
        description: "柔軟但有厚度，能包容各種古怪的想法。",
      },
    ],
  },
  {
    question: "當你與靈魂「拌」侶吵架時，你通常如何化解僵局？",
    options: [
      {
        // title: "先釋放善意",
        description: "先釋放善意，準備對方愛吃的甜食或禮物來求和。",
      },
      {
        // title: "講求效率",
        description: "講求效率，攤開問題邏輯，找出雙方都能接受的比例。",
      },
      {
        // title: "直接把心裡的情緒釋放出來後",
        description: "直接把心裡的情緒釋放出來後，不要吵隔夜。",
      },
      {
        // title: "保持冷靜",
        description: "保持冷靜，給彼此一點空間，用質感和時間淡化酸楚。",
      },
      {
        // title: "溫暖的擁抱",
        description: "溫暖的擁抱，不說話也能感受到彼此的溫度。",
      },
    ],
  },
  {
    question: "下一趟旅行，哪種情境是最吸引你的靈魂「拌」遊？",
    options: [
      {
        // title: "溫馨的日本鄉間民宿",
        description: "溫馨的日本鄉間民宿，圍在爐邊吃在地風味料理。",
      },
      {
        // title: "繁忙的都市商圈",
        description: "繁忙的都市商圈，探索高效率與現代感的職人精神。",
      },
      {
        // title: "東南亞的香料市集",
        description: "東南亞的香料市集，體驗從未感受過的感官衝擊。",
      },
      {
        // title: "歐洲的酒莊或美術館",
        description: "歐洲的酒莊或美術館，沉浸在歷史與美學的層次中.",
      },
      {
        // title: "漫步在北歐森林",
        description: "漫步在北歐森林，享受純淨、濃郁且寧靜的時光。",
      },
    ],
  },
  {
    question: "想像你要做一道「人生料理」，你最想加入什麼秘密食材？",
    options: [
      {
        // title: "一匙蘋果果醬",
        description: "一匙蘋果果醬，充滿回憶的甘甜味。",
      },
      {
        // title: "磨碎的黑胡椒與香料",
        description: "磨碎的黑胡椒與香料，增強生命力。",
      },
      {
        // title: "幾瓣完熟蕃茄",
        description: "幾瓣完熟蕃茄，帶出豐富的層次感。",
      },
      {
        // title: "讓質感升級的起司與鮮奶",
        description: "讓質感升級的起司與鮮奶，讓生活更圓潤。",
      },
      {
        // title: "什麼都不加",
        description: "什麼都不加，追求純粹的平衡和諧。",
      },
    ],
  },
];
</script>
