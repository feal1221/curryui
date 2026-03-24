<template>
  <svg preserveAspectRatio="xMidYMid meet">
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="middle"
      :class="type === 'curry' ? 'svg-curry-title' : 'svg-red-title'"
      stroke-linejoin="round"
    >
      {{ props.text }}
    </text>
  </svg>
</template>
<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "curry",
  },
});
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
.svg-red-title {
  font-family: "Noto Sans TC", sans-serif;
  font-weight: 500;
  font-size: 48px;
  fill: #c81f19; /* 填充顏色 = 黑色文字 */
  stroke: white; /* 描邊顏色 = 白色邊框 */
  stroke-width: 18px; /* 完美圓潤粗邊框厚度 */
  stroke-linejoin: round; /* 讓邊角變圓滑 */
  /* ⭐️ 魔法在這裡：告訴瀏覽器「先畫外框，再畫內層文字」 */
  paint-order: stroke fill;
  filter: drop-shadow(0px 8px 6px rgba(0, 0, 0, 0.4));

}
@media (max-width: 840px) {
  .svg-curry-title,
  .svg-red-title {
    font-size: 44px;
    stroke-width: 12px;
  }
  /* .roof {
    height: 44px;
    background-size: auto 44px;
  } */
}
@media (max-width: 460px) {
  .svg-curry-title,
  .svg-red-title {
    font-size: 40px;
    stroke-width: 12px;
  }
  /* .roof {
    height: 44px;
    background-size: auto 44px;
  } */
}
</style>
