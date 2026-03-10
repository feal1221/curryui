<template>
  <div
    class="h-12 bg-[var(--bar-red)] w-full flex items-center fixed top-0 left-0 z-50"
  >
    <!-- Logo -->
    <div
      class="ml-10 text-white text-lg font-bold max-[464px]:absolute max-[464px]:left-1/2 max-[464px]:-translate-x-1/2 max-[464px]:ml-0"
    >
      LOGO
    </div>
    <div class="grow"></div>
    <!-- Desktop menu (>= 465px) -->
    <div class="hidden min-[465px]:flex">
      <template v-for="(item, index) in menu" :key="index">
        <NuxtLink
          :to="item.link"
          class="ml-auto text-white text-sm lg:text-base px-2"
          >{{ item.name }}</NuxtLink
        >
        <div class="ml-auto text-white" v-if="index < menu.length - 1">｜</div>
      </template>
    </div>

    <FB class="ml-auto mr-2 cursor-pointer w-6 h-6 max-[465px]:hidden" />
    <Ig class="mr-5 cursor-pointer w-6 h-5 max-[465px]:hidden" />
    <div class="min-[465px]:hidden">
      <UiSheet v-model:open="mobileMenuOpen" side="right">
        <UiSheetTrigger asChild>
          <Icon
            name="mdi:menu"
            class="mr-4 text-white w-8 h-8 cursor-pointer"
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
              <div class="flex flex-col gap-4">
                <template v-for="(item, index) in menu" :key="index">
                  <NuxtLink
                    :to="item.link"
                    @click="mobileMenuOpen = false"
                    class="text-white font-bold text-lg"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </template>
                <FB
                  class="cursor-pointer w-8 h-8 max-[360px]:w-6 max-[360px]:h-6"
                />
                <Ig
                  class="cursor-pointer w-8 h-7 max-[360px]:w-6 max-[360px]:h-5"
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
import FB from "@/assets/Fb.vue";
import Ig from "@/assets/Ig.vue";

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

const menu = [
  {
    name: "活動測驗",
    link: "/",
  },
  {
    name: "抽獎獎品資訊",
    link: "/about",
  },
  {
    name: "全民咖哩任務",
    link: "/about",
  },
  {
    name: "附近超市",
    link: "/about",
  },
  {
    name: "注意事項",
    link: "/about",
  },
];
</script>
