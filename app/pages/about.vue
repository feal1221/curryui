<template>
    <div class="flex flex-col justify-center items-center gap-4 px-4 py-6 sm:py-8 md:py-12 min-h-screen">
        <form @submit="onSubmit" class="flex flex-col gap-4 sm:gap-5 w-full max-w-sm sm:max-w-md md:max-w-lg">
            <UiField :data-invalid="errors.name">
                <UiFieldLabel for="name" class="text-sm sm:text-base">暱稱</UiFieldLabel>
                <UiInput 
                    v-model="name" 
                    v-bind="nameProps" 
                    id="name" 
                    placeholder="輸入暱稱" 
                    class="text-sm sm:text-base"
                />
                <UiFieldError v-if="errors.name" class="text-xs sm:text-sm">{{ errors.name }}</UiFieldError>
            </UiField>
            
            <UiField :data-invalid="errors.email">
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
            </UiField>
            
            <UiField :data-invalid="errors.gender">
                <UiFieldLabel for="gender" class="text-sm sm:text-base">性別</UiFieldLabel>
                <UiSelect 
                  :model-value="gender" 
                  @update:model-value="(val) => gender = val"
                >
                    <UiSelectTrigger v-bind="genderProps" id="gender" class="text-sm sm:text-base">
                        <UiSelectValue placeholder="選擇性別" />
                    </UiSelectTrigger>
                    <UiSelectContent>
                        <UiSelectItem value="male" class="text-sm sm:text-base">男</UiSelectItem>
                        <UiSelectItem value="female" class="text-sm sm:text-base">女</UiSelectItem>
                        <UiSelectItem value="private" class="text-sm sm:text-base">不透漏</UiSelectItem>
                    </UiSelectContent>
                </UiSelect>
                <UiFieldError v-if="errors.gender" class="text-xs sm:text-sm">{{ errors.gender }}</UiFieldError>
            </UiField>
            
            <UiField :data-invalid="errors.age">
                <UiFieldLabel for="age" class="text-sm sm:text-base">年齡區間</UiFieldLabel>
                <UiSelect 
                  :model-value="age" 
                  @update:model-value="(val) => age = val"
                >
                    <UiSelectTrigger v-bind="ageProps" id="age" class="text-sm sm:text-base">
                        <UiSelectValue placeholder="選擇年齡區間" />
                    </UiSelectTrigger>
                    <UiSelectContent>
                        <UiSelectItem value="17" class="text-sm sm:text-base">17以下</UiSelectItem>
                        <UiSelectItem value="18-25" class="text-sm sm:text-base">18-25</UiSelectItem>
                        <UiSelectItem value="26-35" class="text-sm sm:text-base">26-35</UiSelectItem>
                        <UiSelectItem value="36-45" class="text-sm sm:text-base">36-45</UiSelectItem>
                        <UiSelectItem value="46-60" class="text-sm sm:text-base">46-60</UiSelectItem>
                        <UiSelectItem value="60+" class="text-sm sm:text-base">60以上</UiSelectItem>
                    </UiSelectContent>
                </UiSelect>
                <UiFieldError v-if="errors.age" class="text-xs sm:text-sm">{{ errors.age }}</UiFieldError>
            </UiField>
            
            <UiButton variant="secondary" type="submit" class="w-full mt-2 sm:mt-4 text-sm sm:text-base py-2 sm:py-3">
                馬上測驗
            </UiButton>
            
        </form>
    </div>  
</template>
<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(z.object({
  name: z.string().min(1, '暱稱為必填').max(20, '暱稱不能超過 20 個字'),
  email: z.string().min(1, '信箱為必填').email('請輸入有效的信箱格式'),
  gender: z.string().min(1, '請選擇性別'),
  age: z.string().min(1, '請選擇年齡區間'),
}))

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: formSchema,
  // 建議給予初始值，避免控制組件警告
  initialValues: {
    name: '',
    email: '',
    gender: '',
    age: '',
  }
})

// 這裡取出 props 傳給元件
const [name, nameProps] = defineField('name')
const [email, emailProps] = defineField('email')
const [gender, genderProps] = defineField('gender')
const [age, ageProps] = defineField('age')


const onInvalidSubmit = ({ errors }) => {
  console.log('驗證失敗', errors) // 看看這裡有沒有跑出來
}
const onSubmit = handleSubmit((values) => {
  console.log('表單提交成功', values)
  navigateTo('/question')
}, onInvalidSubmit)
</script>

