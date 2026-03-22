<template>
  <div
    class="h-20 bg-[var(--bar-red)] w-full flex items-center fixed top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div
      @click="redirectToHome('test')"
      class="cursor-pointer ml-10 text-white text-lg font-bold max-[464px]:absolute max-[464px]:left-1/2 max-[464px]:-translate-x-1/2 max-[464px]:ml-0"
    >
      <img src="/assets/images/logo.png" />
    </div>
    <div class="grow"></div>
    <!-- Desktop menu (>= 465px) -->
    <div class="hidden min-[465px]:flex mr-4">
      <template v-for="(item, index) in menu" :key="index">
        <NuxtLink
          class="ml-auto text-white text-sm lg:text-2xl px-2 border-r-1 solid border-white cursor-pointer"
          @click="redirectToHome(item.link)"
        >
          {{ item.name }}</NuxtLink
        >
      </template>
    </div>
    <img
      src="/assets/images/button-fb.png"
      class="max-[465px]:hidden ml-auto mr-4 cursor-pointer"
    />
    <img
      src="/assets/images/button-ig.png"
      class="max-[465px]:hidden mr-12 cursor-pointer"
    />
    <div class="min-[465px]:hidden">
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
                    class="self-start text-white text-2xl font-medium cursor-pointer"
                    @click="redirectToHome(item.link)"
                  >
                    {{ item.name }}
                  </div>
                </template>
                <img
                  src="/assets/images/button-fb.png"
                  class="cursor-pointer self-start"
                />
                <img
                  src="/assets/images/button-ig.png"
                  class="cursor-pointer self-start"
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

// 監聽視窗大小變化，當螢幕變大時自動關閉 mobile menu
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 465 && mobileMenuOpen.value) {
      mobileMenuOpen.value = false;
    }
  };

  window.addEventListener("resize", handleResize);

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
});

const redirectToHome = (link) => {
  setTimeout(() => {
    const el = document.getElementById(link);
    if (el) {
      const headerOffset = 80;
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
