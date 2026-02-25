<template>
    <div class="flex flex-col justify-center items-center gap-4 mt-4">
        <h1>認證頁</h1>
        <div class="flex gap-4 text-center whitespace-pre-wrap">
            {{ "這裡是認證頁面，歡迎來了解更多關於我們的資訊！" }}
        </div>
        <UiButton variant="secondary">
            <NuxtLink :to="'/question/1'"> 馬上測驗 </NuxtLink>
        </UiButton>
    </div>  
</template>