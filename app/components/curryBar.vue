<template>
    <div class="h-12 bg-[var(--bar-red)] w-full flex items-center fixed top-0 left-0 z-50">
        <div class="ml-10 text-white text-lg font-bold">LOGO</div>
        <div class="grow"></div>
        <div class="flex">
            <template v-for="(item, index) in menu" :key="index">
                <NuxtLink :to="item.link" class="ml-auto text-white">{{ item.name }}</NuxtLink>
                <div class="ml-auto text-white">｜
                </div>
            </template>
        </div>
        <FB class="ml-auto mr-2 cursor-pointer w-6 h-6 " />
        <Ig class="mr-5 cursor-pointer w-6 h-5" />

    </div>
</template>
<script setup>
import FB from "@/assets/Fb.vue";
import Ig from "@/assets/Ig.vue";

const menu = [
    {
        name: "活動測驗",
        link: "/question"
    },
    {
        name: "抽獎獎品資訊",
        link: "/about"
    },
    {
        name: "全民咖哩任務",
        link: "/about"
    },
    {
        name: "附近超市",
        link: "/about"
    },
    {
        name: "注意事項",
        link: "/about"
    },
]
</script>