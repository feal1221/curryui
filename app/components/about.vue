<template>
  <div class="flex flex-col justify-center items-center gap-4 py-2 sm:py-20">
    <form
      @submit="onSubmit"
      class="flex flex-col gap-4 sm:gap-5 w-full max-w-sm sm:max-w-md md:max-w-2xl text-2xl font-medium"
    >
      <UiField :data-invalid="errors.name">
        <UiFieldLabel
          for="name"
          class="text-base sm:text-2xl text-[var(--primary-brown)] font-medium"
          >您的暱稱是
          <UiFieldError v-if="errors.name" class="text-base">{{
            errors.name
          }}</UiFieldError></UiFieldLabel
        >
        <UiInput
          v-model="name"
          v-bind="nameProps"
          id="name"
          placeholder="請輸入暱稱"
          class="text-base sm:text-2xl border-t-0 border-l-0 border-r-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-[var(--primary-brown)] tracking-widest"
        />
      </UiField>

      <!-- <UiField :data-invalid="errors.email">
                <UiFieldLabel for="email" class="text-sm sm:text-base">信箱</UiFieldLabel>
                <UiInput 
                    v-model="email" 
                    v-bind="emailProps" 
                    id="email" 
                    type="email" 
                    placeholder="輸入信箱" 
                    class="text-sm sm:text-base"
                />
                <UiFieldError v-if="errors.email" class="text-xs sm:text-sm">{{ errors.email }}</UiFieldError>
            </UiField> -->

      <UiField :data-invalid="errors.gender">
        <UiFieldLabel
          for="gender"
          class="text-base sm:text-2xl text-[var(--primary-brown)] font-medium"
          >您的性別
          <UiFieldError v-if="errors.gender" class="text-base">{{
            errors.gender
          }}</UiFieldError></UiFieldLabel
        >
        <UiRadioGroup
          v-model="gender"
          id="gender"
          class="text-base sm:text-2xl font-medium text-[var(--primary-brown)]"
        >
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="female" value="female" />
            <UiLabel for="female" class="text-base sm:text-2xl font-medium">女</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="male" value="male" />
            <UiLabel for="male" class="text-base sm:text-2xl font-medium">男</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="other" value="other" />
            <UiLabel for="other" class="text-base sm:text-2xl font-medium">多元</UiLabel>
          </div>
        </UiRadioGroup>
      </UiField>

      <UiField :data-invalid="errors.age">
        <UiFieldLabel
          for="age"
          class="text-base sm:text-2xl text-[var(--primary-brown)] font-medium"
          >您的年齡
          <UiFieldError v-if="errors.age" class="text-base">{{
            errors.age
          }}</UiFieldError></UiFieldLabel
        >
        <UiRadioGroup
          v-model="age"
          id="age"
          class="text-base sm:text-2xl font-medium text-[var(--primary-brown)]"
        >
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age0" value="17" />
            <UiLabel for="age0" class="text-base sm:text-2xl font-medium">17歲以下</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age1" value="18-25" />
            <UiLabel for="age1" class="text-base sm:text-2xl font-medium">18-25歲</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age2" value="26-35" />
            <UiLabel for="age2" class="text-base sm:text-2xl font-medium">26-35歲</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age3" value="36-45" />
            <UiLabel for="age3" class="text-base sm:text-2xl font-medium">36-45歲</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age4" value="46-55" />
            <UiLabel for="age4" class="text-base sm:text-2xl font-medium">46-55歲</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age5" value="56-65" />
            <UiLabel for="age5" class="text-base sm:text-2xl font-medium">56-65歲</UiLabel>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age6" value="66+" />
            <UiLabel for="age6" class="text-base sm:text-2xl font-medium">66歲以上</UiLabel>
          </div>
        </UiRadioGroup>
      </UiField>

      <UiButton
        variant="destructive"
        type="submit"
        class="self-center sm:self-end w-[250px] h-[64px] text-2xl py-2 px-4 "
      >
        START
      </UiButton>
    </form>
  </div>
</template>
<script setup>
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const pageIndex = inject("pageIndex");
const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(1, "＊必填").max(100, "暱稱不能超過 100 個字"),
    //   email: z.string().min(1, '信箱為必填').email('請輸入有效的信箱格式'),
    gender: z.string().min(1, "＊必填"),
    age: z.string().min(1, "＊必填"),
  }),
);

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: formSchema,
  // 建議給予初始值，避免控制組件警告
  initialValues: {
    name: "",
    // email: '',
    gender: "",
    age: "",
  },
});

// 這裡取出 props 傳給元件
const [name, nameProps] = defineField("name");
const [email, emailProps] = defineField("email");
const [gender, genderProps] = defineField("gender");
const [age, ageProps] = defineField("age");

const onInvalidSubmit = ({ errors }) => {
  console.log("驗證失敗", errors); // 看看這裡有沒有跑出來
};
const onSubmit = handleSubmit((values) => {
  pageIndex.value = 2;
}, onInvalidSubmit);
</script>
