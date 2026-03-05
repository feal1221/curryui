<template>
    <div class="flex flex-col justify-center items-center gap-4 mt-4">
        <form @submit="onSubmit" class="flex flex-col gap-4 w-80">
            <UiField :data-invalid="errors.name">
                <UiFieldLabel for="name">暱稱</UiFieldLabel>
                <UiInput v-model="name" v-bind="nameProps" id="name" placeholder="輸入暱稱" />
                <UiFieldError v-if="errors.name">{{ errors.name }}</UiFieldError>
            </UiField>
            
            <UiField :data-invalid="errors.email">
                <UiFieldLabel for="email">信箱</UiFieldLabel>
                <UiInput v-model="email" v-bind="emailProps" id="email" type="email" placeholder="輸入信箱" />
                <UiFieldError v-if="errors.email">{{ errors.email }}</UiFieldError>
            </UiField>
            
            <UiField :data-invalid="errors.gender">
                <UiFieldLabel for="gender">性別</UiFieldLabel>
                <UiSelect 
                  :model-value="gender" 
                  @update:model-value="(val) => gender = val"
                >
                    <UiSelectTrigger v-bind="genderProps" id="gender">
                        <UiSelectValue placeholder="選擇性別" />
                    </UiSelectTrigger>
                    <UiSelectContent>
                        <UiSelectItem value="male">男</UiSelectItem>
                        <UiSelectItem value="female">女</UiSelectItem>
                        <UiSelectItem value="private">不透漏</UiSelectItem>
                    </UiSelectContent>
                </UiSelect>
                <UiFieldError v-if="errors.gender">{{ errors.gender }}</UiFieldError>
            </UiField>
            
            <UiField :data-invalid="errors.age">
                <UiFieldLabel for="age">年齡區間</UiFieldLabel>
                <UiSelect 
                  :model-value="age" 
                  @update:model-value="(val) => age = val"
                >
                    <UiSelectTrigger v-bind="ageProps" id="age">
                        <UiSelectValue placeholder="選擇年齡區間" />
                    </UiSelectTrigger>
                    <UiSelectContent>
                        <UiSelectItem value="17">17以下</UiSelectItem>
                        <UiSelectItem value="18-25">18-25</UiSelectItem>
                        <UiSelectItem value="26-35">26-35</UiSelectItem>
                        <UiSelectItem value="36-45">36-45</UiSelectItem>
                        <UiSelectItem value="46-60">46-60</UiSelectItem>
                        <UiSelectItem value="60+">60以上</UiSelectItem>
                    </UiSelectContent>
                </UiSelect>
                <UiFieldError v-if="errors.age">{{ errors.age }}</UiFieldError>
            </UiField>
            
            <UiButton variant="secondary" type="submit" class="w-full">
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
  navigateTo('/question/1')
}, onInvalidSubmit)
</script>

