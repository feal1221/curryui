<template>
  <div
    class="h-20 bg-[var(--bar-red)] w-full flex items-center fixed top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div
      @click="redirectToHome('test')"
      class="cursor-pointer ml-10 text-white text-lg font-bold max-[556px]:absolute max-[556px]:left-1/2 max-[556px]:-translate-x-1/2 max-[556px]:ml-0"
    >
      <img src="/assets/images/logo.png" />
    </div>
    <div class="grow"></div>
    <!-- Desktop menu (>= 556px) -->
    <div class="hidden min-[556px]:flex mr-4">
      <template v-for="(item, index) in menu" :key="index">
        <NuxtLink
          :class="activeId === item.link ? 'text-[#FAD35C]' : 'text-white'"
          class="ml-auto  text-sm lg:text-2xl px-2 border-r-1 solid border-white cursor-pointer"
          @click="redirectToHome(item.link)"
        >
          {{ item.name }}</NuxtLink
        >
      </template>
    </div>
    <img
      src="/assets/images/button-fb.png"
      class="max-[556px]:hidden ml-auto mr-4 cursor-pointer"
      @click="gotoFB"
    />
    <img
      src="/assets/images/button-ig.png"
      class="max-[556px]:hidden mr-12 cursor-pointer"
      @click="gotoIG"
    />
    <div class="min-[556px]:hidden">
      <UiSheet v-model:open="mobileMenuOpen" side="right">
        <UiSheetTrigger asChild>
          <Icon
            name="mdi:menu"
            class="mr-4 text-white text-3xl cursor-pointer"
            @click="mobileMenuOpen = true"
          />
        </UiSheetTrigger>
        <UiSheetContent
          showCloseButton="{false}"
          class="bg-[var(--bar-red)] max-w-[194px] max-[360px]:max-w-[160px]"
        >
          <UiSheetHeader>
            <UiSheetTitle></UiSheetTitle>
            <UiSheetDescription>
              <div
                class="flex flex-col gap-6 pt-15 items-center justify-start text-left pl-2"
              >
                <template v-for="(item, index) in menu" :key="index">
                  <div
                    :class="activeId === item.link ? 'text-[#FAD35C]' : 'text-white'"
                    class="self-start text-2xl font-medium cursor-pointer"
                    @click="redirectToHome(item.link)"
                  >
                    {{ item.name }}
                  </div>
                </template>
                <img
                  src="/assets/images/button-fb.png"
                  class="cursor-pointer self-start"
                  @click="gotoFB"
                />
                <img
                  src="/assets/images/button-ig.png"
                  class="cursor-pointer self-start"
                  @click="gotoIG"
                />
              </div>
            </UiSheetDescription>
          </UiSheetHeader>
        </UiSheetContent>
      </UiSheet>
    </div>
  </div>
</template>
<script setup>
const mobileMenuOpen = ref(false);
const activeId = ref('');
const HEADER_HEIGHT = 80;
let observer;
const handleResize = () => {
  if (window.innerWidth >= 556 && mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
  }
};

// 監聽視窗大小變化，當螢幕變大時自動關閉 mobile menu
onMounted(() => {
  window.addEventListener("resize", handleResize);

  // 建立觀察器：當區塊標題滑到導覽列下方時，切換 active 狀態
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
      }
    });
  }, {
    rootMargin: `-${HEADER_HEIGHT}px 0px -65% 0px`,
    threshold: 0
  });

  // 開始觀察 menu 裡的所有 link 對應的 DOM 元素
  menu.forEach((item) => {
    const el = document.getElementById(item.link);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  observer?.disconnect();
});

const redirectToHome = (link) => {
  activeId.value = link;
  setTimeout(() => {
    const el = document.getElementById(link);
    if (el) {
      const headerOffset = HEADER_HEIGHT;
      const top =
        el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({
        top: Math.max(top, 0),
        behavior: "auto",
      });
    }
    mobileMenuOpen.value = false;
  }, 0);
};
const gotoFB = () => {
  window.open("https://www.facebook.com/house.curry.tw/", "_blank");
};
const gotoIG = () => {
  window.open("https://www.instagram.com/housefoodtw/", "_blank");
};

const menu = [
  {
    name: "活動測驗",
    link: "test",
  },
  {
    name: "抽獎獎品資訊",
    link: "rewards",
  },
  {
    name: "全民咖哩任務",
    link: "tasks",
  },
  {
    name: "附近超市",
    link: "supermarkets",
  },
  {
    name: "注意事項",
    link: "notices",
  },
];
</script>
