<template>
  <div
    class="flex flex-col justify-center items-center gap-4 f-full p-10"
  >
    <form
      @submit="onSubmit"
      class="flex flex-col gap-4 sm:gap-5 w-full max-w-sm sm:max-w-md md:max-w-lg "
    >
      <UiField :data-invalid="errors.name">
        <UiFieldLabel
          for="name"
          class="text-base sm:text-2xl text-[var(--primary-brown)] font-medium"
          >您的暱稱是        <UiFieldError v-if="errors.name" class="text-xs sm:text-sm">{{
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
          >您的性別        <UiFieldError v-if="errors.gender" class="text-xs sm:text-sm">{{
          errors.gender
        }}</UiFieldError></UiFieldLabel
        >
        <UiRadioGroup v-model="gender" id="gender" class="text-base sm:text-2xl font-medium text-[var(--primary-brown)]">
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="female" value="female" />
            <Label for="female">女</Label>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="male" value="male" />
            <Label for="male">男</Label>
          </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="other" value="other" />
            <Label for="other">多元</Label>
          </div>
        </UiRadioGroup>

      </UiField>

      <UiField :data-invalid="errors.age">
        <UiFieldLabel
          for="age"
          class="text-base sm:text-2xl text-[var(--primary-brown)] font-medium"
          >您的年齡        <UiFieldError v-if="errors.age" class="text-xs sm:text-sm">{{
          errors.age
        }}</UiFieldError></UiFieldLabel
        >
        <UiRadioGroup v-model="age" id="age" class="text-base sm:text-2xl font-medium text-[var(--primary-brown)]">
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age0" value="17" />
            <Label for="age0">17歲以下</Label>
            </div>
          <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age1" value="18-25" />
            <Label for="age1">18-25歲</Label>
            </div>
            <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age2" value="26-35" />
            <Label for="age2">26-35歲</Label>
            </div>
            <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age3" value="36-45" />
            <Label for="age3">36-45歲</Label>
            </div>
            <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age4" value="46-55" />
            <Label for="age4">46-55歲</Label>
            </div>
            <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age5" value="56-65" />
            <Label for="age5">56-65歲</Label>
            </div>
            <div class="flex items-center space-x-3 my-1">
            <UiRadioGroupItem id="age6" value="66+" />
            <Label for="age6">66歲以上</Label>
            </div>
        </UiRadioGroup>
      </UiField>

      <UiButton
        variant="destructive"
        type="submit"
        class="self-center w-full sm:w-60 sm:self-end text-base sm:text-2xl py-2 sm:py-3 px-12"
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
    name: z
      .string()
      .min(1, "＊必填")
      .max(100, "暱稱不能超過 100 個字"),
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
