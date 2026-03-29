<template>
  <div
    class="bg-[var(--bg-gray)] min-h-screen flex flex-col justify-center items-center gap-8 pb-10 sm:pb-20"
    v-if="answer.length < 6"
  >
    <div class="flex items-center gap-2 mt-4 sm:mt-20 flex-wrap justify-center">
      <div v-for="(step, index) in mockQA.length" :key="index">
        <div
          v-if="index === pageIndex - 2"
          class="max-[365px]:w-8 w-10 h-2 sm:w-20 md:w-25 lg:w-30 bg-[#C81F19] rounded-2xl"
        ></div>
        <div
          v-else
          class="max-[365px]:w-8 w-10 h-2 sm:w-20 md:w-25 lg:w-30 bg-[#D9D9D9] rounded-2xl"
        ></div>
      </div>
    </div>
    <div
      class="text-2xl font-medium flex gap-4 flex-col items-center text-[var(--primary-brown)] text-center"
    >
      <h1>{{ "Q" + (pageIndex - 1) }}</h1>
      <h1
        class="bg-[#FAD35C] leading-[36px] px-4 py-4 sm:px-8 sm:py-2 text-left sm:text-center"
      >
        {{ mockQA[pageIndex - 2]?.question }}
      </h1>
    </div>
    <div
      class="flex justify-center flex-col gap-4 sm:gap-6 p-0 sm:p-4 w-full max-w-[760px]"
    >
      <template
        v-for="(m, index) in mockQA[pageIndex - 2]?.options"
        :key="index"
      >
        <UiButton
          variant="secondary"
          class="w-full px-4 sm:px-16 lg:px-40 py-3 sm:py-2 min-h-[64px] bg-white text-base leading-[24px] text-[var(--primary-brown)] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] whitespace-normal"
          :class="{
            'bg-[#FAD35C]':
              tempAnswer?.answer === m.value ||
              (answer.some(
                (a) =>
                  a.answer === m.value && a.question === `Q${pageIndex - 1}`,
              ) &&
                !tempAnswer),
          }"
          @click="
            tempAnswer = { question: `Q${pageIndex - 1}`, answer: m.value }
          "
        >
          <span class="whitespace-pre-line">
            <span v-if="m.title">{{ `< ${m.title} >` + "\n" }}</span>
            {{ m.description }}
          </span>
        </UiButton>
      </template>
      <div
        v-if="isError"
        class="flex justify-center my-6 sm:my-1 text-base text-[var(--text-red)] font-medium text-center"
      >
        *請擇一選項後，再點擊下一題繼續您的測驗哦！
      </div>
      <div
        class="flex flex-col sm:flex-row-reverse justify-between mt-4 gap-3 sm:gap-4"
      >
        <UiButton
          variant="destructive"
          @click="goNext"
          class="w-full h-[64px] sm:w-auto text-2xl px-8 sm:px-20 py-2 sm:py-3 font-medium"
        >
          <span class="font-medium">{{
            pageIndex < 7 ? "下一題" : "開始分析"
          }}</span>
        </UiButton>
        <UiButton
          @click="goBack"
          class="w-full sm:w-auto h-[64px] text-2xl px-8 sm:px-20 py-2 sm:py-3 font-medium bg-[var(--primary-brown)] border-[var(--primary-brown)] hover:bg-[var(--primary-brown)]"
        >
          <span class="font-medium">{{
            pageIndex > 2 ? "上一題" : "返回"
          }}</span>
        </UiButton>
      </div>
    </div>
  </div>
  <div
    v-else
    class="flex items-center gap-2 mt-4 sm:mt-20 flex-wrap justify-center"
  >
    <h1
      class="text-2xl font-medium flex gap-4 flex-col items-center text-[var(--primary-brown)] text-center"
    >
      {{ "正在分析你的咖哩人格..." }}
    </h1>
  </div>
</template>
<script setup>
import { useAnswerStore } from "~/stores/answer";

const answer = ref([]);
const pageIndex = inject("pageIndex");
const isError = ref(false);
const tempAnswer = ref(null);
const answerStore = useAnswerStore();
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:visible"]);
const resulrImageMap = {
  Sweet: 5,
  Balance: 1,
  Spicy: 2,
  Tart: 3,
  Creamy: 4,
};
const culculateResult = () => {
  const result = {
    Sweet: 0,
    Spicy: 0,
    Tart: 0,
    Creamy: 0,
    Balance: 0,
    "Sweet+Creamy": 0,
    "Tart+Creamy": 0,
    All: 0,
  };
  answer.value.forEach((a) => {
    if (a.answer.includes("+")) {
      if (a.answer === "All") {
        result["Sweet"] += 0.2;
        result["Spicy"] += 0.2;
        result["Tart"] += 0.2;
        result["Creamy"] += 0.2;
        result["Balance"] += 0.2;
      } else {
        const categories = a.answer.split("+");
        categories.forEach((c) => {
          result[c] += 0.5;
        });
      }
    } else {
      result[a.answer] += 1;
    }
  });
  // 找出最高分，如果同分用Q3的答案決勝負
  const q3Answer = answer.value.find((a) => a.question === "Q3")?.answer;
  const maxScore = Math.max(...Object.values(result));
  const topCategories = Object.keys(result).filter(
    (key) => result[key] === maxScore,
  );
  if (topCategories.length > 1 && q3Answer) {
    if (topCategories.includes(q3Answer)) {
      return q3Answer;
    }
  }
  return topCategories[0];
};
const goNext = async () => {
  isError.value = false;
  // validate answer
  if (
    !tempAnswer.value &&
    !answer.value.some((a) => a.question === `Q${pageIndex.value - 1}`)
  ) {
    isError.value = true;
    return;
  }
  if (!tempAnswer.value && answer.value.length < mockQA.length) {
    pageIndex.value = pageIndex.value + 1;
    return;
  }
  // 已經有答案但這次選了不同的選項，更新答案
  if (tempAnswer.value !== null) {
    pageIndex.value = pageIndex.value + 1;
    const existingIndex = answer.value.findIndex(
      (a) => a.question === tempAnswer.value.question,
    );
    if (existingIndex !== -1) {
      answer.value[existingIndex] = tempAnswer.value;
    } else {
      answer.value.push(tempAnswer.value);
    }
    tempAnswer.value = null;
  }
  console.log("pageIndex.value", pageIndex.value);
  if (answer.value.length === mockQA.length) {
    const result = culculateResult();
    answerStore.setUserInfo({
      ans1: answer.value[0]?.answer || "",
      ans2: answer.value[1]?.answer || "",
      ans3: answer.value[2]?.answer || "",
      ans4: answer.value[3]?.answer || "",
      ans5: answer.value[4]?.answer || "",
      ans6: answer.value[5]?.answer || "",
      resultName: result,
    });
    console.log("answerStore.answer", answerStore.answer);
    // emits("update:visible", false);
    await saveResult(result);
  }
};
const goBack = () => {
  isError.value = false;
  if (answer.value.length > 0) {
    tempAnswer.value = null;
  }
  pageIndex.value = pageIndex.value - 1;
};

const saveResult = async (result) => {
  try {
    await useApi("/results/create", {
      method: "POST",
      body: {
        userName: answerStore.answer.userName,
        gender: answerStore.answer.gender,
        age: answerStore.answer.age,
        ans1: answerStore.answer.ans1 || "",
        ans2: answerStore.answer.ans2 || "",
        ans3: answerStore.answer.ans3 || "",
        ans4: answerStore.answer.ans4 || "",
        ans5: answerStore.answer.ans5 || "",
        ans6: answerStore.answer.ans6 || "",
        resultName: answerStore.answer.resultName || "",
      },
    });
    answerStore.clearAnswer();
    await navigateTo({
      path: "/result",
      query: { result: resulrImageMap[result] },
    });
  } catch (error) {
    console.error("Failed to save result:", error);
  }
};
const mockQA = [
  {
    question: "面對咖哩的世紀爭議，你的「拌哩」哲學是什麼？",
    options: [
      {
        title: "絕對要拌！",
        description: "我喜歡所有食材被醬汁溫柔包裹，不分彼此。",
        value: "Sweet+Creamy",
      },
      {
        title: "大略拌過",
        description: "留下一點白飯，享受味道的波動，給彼此一點空間。",
        value: "Balance",
      },
      {
        title: "絕對不拌",
        description: "白飯與醬汁要有清晰防線，每一口都要自己決定比例。",
        value: "Spicy",
      },
      {
        title: "醬汁當配角",
        description: "比起拌飯，我更喜歡拿麵包或大塊蔬菜沾著吃。",
        value: "Tart+Creamy",
      },
      {
        title: "隨心所欲",
        description: "看今天的對象或盤子的心情，沒有固定教條。",
        value: "All",
      },
    ],
  },
  {
    question: "忙碌了一整天，你想用什麼方式「拌」走疲勞？",
    options: [
      {
        description: "吃一碗熱熱甜甜的食物，找回最熟悉安全感。",
        value: "Sweet",
      },
      {
        description: "約朋友去居酒屋，來點重口味與辛辣食物，大口抒壓。",
        value: "Spicy",
      },
      {
        description: "點一份精緻的歐式燉菜，配上一杯微酸的紅酒或飲品。",
        value: "Tart",
      },
      {
        description: "泡個熱水澡，喝杯濃郁的熱牛奶或濃湯，徹底放鬆。",
        value: "Creamy",
      },
      {
        description: "煮一鍋簡單的清爽蔬菜料理，讓身體恢復自然平衡。",
        value: "Balance",
      },
    ],
  },
  {
    question: "如果把自己的靈魂比喻為一種「拌料」，你覺得自己最像？",
    options: [
      {
        title: "溫潤蜂蜜",
        description: "總是能化解周遭的衝突與尷尬。",
        value: "Sweet",
      },
      {
        title: "深醞肉桂",
        description: "深邃且理性，給人一種沈穩的距離感。",
        value: "Balance",
      },
      {
        title: "炙熱乾辣椒",
        description: "熱情、直接，有你在的地方就有火花。",
        value: "Spicy",
      },
      {
        title: "鮮紅蕃茄",
        description: "帶點知性的酸甜，品味與眾不同。",
        value: "Tart",
      },
      {
        title: "絲滑奶油",
        description: "柔軟但有厚度，能包容各種古怪的想法。",
        value: "Creamy",
      },
    ],
  },
  {
    question: "當你與靈魂「拌」侶吵架時，你通常如何化解僵局？",
    options: [
      {
        description: "先釋放善意，準備對方愛吃的甜食或禮物來求和。",
        value: "Sweet",
      },
      {
        description: "講求效率，攤開問題邏輯，找出雙方都能接受的比例。",
        value: "Balance",
      },
      {
        description: "直接把心裡的情緒釋放出來後，不要吵隔夜。",
        value: "Spicy",
      },
      {
        description: "保持冷靜，給彼此一點空間，用質感和時間淡化酸楚。",
        value: "Tart",
      },
      {
        description: "溫暖的擁抱，不說話也能感受到彼此的溫度。",
        value: "Creamy",
      },
    ],
  },
  {
    question: "下一趟旅行，哪種情境是最吸引你的靈魂「拌」遊？",
    options: [
      {
        description: "溫馨的日本鄉間民宿，圍在爐邊吃在地風味料理。",
        value: "Sweet",
      },
      {
        description: "繁忙的都市商圈，探索高效率與現代感的職人精神。",
        value: "Balance",
      },
      {
        description: "東南亞的香料市集，體驗從未感受過的感官衝擊。",
        value: "Spicy",
      },
      {
        description: "歐洲的酒莊或美術館，沉浸在歷史與美學的層次中。",
        value: "Tart",
      },
      {
        description: "漫步在北歐森林，享受純淨、濃郁且寧靜的時光。",
        value: "Creamy",
      },
    ],
  },
  {
    question: "想像你要做一道「人生料理」，你最想加入什麼秘密食材？",
    options: [
      {
        description: "一匙蘋果果醬，充滿回憶的甘甜味。",
        value: "Sweet",
      },
      {
        description: "磨碎的黑胡椒與香料，增強生命力。",
        value: "Spicy",
      },
      {
        description: "幾瓣完熟蕃茄，帶出豐富的層次感。",
        value: "Tart",
      },
      {
        description: "讓質感升級的起司與鮮奶，讓生活更圓潤。",
        value: "Creamy",
      },
      {
        description: "什麼都不加，追求純粹的平衡和諧。",
        value: "Balance",
      },
    ],
  },
];
</script>
