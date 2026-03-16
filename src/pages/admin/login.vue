<template>
  <div class="grid grid-cols-2 h-screen">
    <div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-slate-900">
      <div
        class="flex justify-center items-center h-full flex-col animate__animated animate__bounceInLeft animate__fast"
      >
        <h1 class="font-bold text-4xl mb-5 text-white">Witkey</h1>
        <p class="italic text-lg text-white">享受代码的乐趣 —— Enjoy the fun of coding</p>
        <img src="@/assets/blog.png" class="w-1/2" />
      </div>
    </div>
    <div class="col-span-2 order-1 md:col-span-1 md:order-2 bg-white">
      <div
        class="flex justify-center items-center h-full flex-col animate__animated animate__bounceInRight animate__fast"
      >
        <h1 class="font-bold text-4xl mb-5">欢迎回来</h1>
        <div class="flex items-center justify-center mb-7 text-gray-400 space-x-2">
          <span class="h-[1px] w-16 bg-gray-200"></span>
          <span>账号密码登录</span>
          <span class="h-[1px] w-16 bg-gray-200"></span>
        </div>
        <el-form class="w-5/6 md:w-2/5">
          <el-form-item>
            <el-input size="large" placeholder="请输入用户名" :prefix-icon="User" clearable />
          </el-form-item>
          <el-form-item>
            <el-input
              size="large"
              type="password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              clearable
            />
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" size="larg" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { onMounted } from 'vue'

defineOptions({
  name: 'AdminLogin',
})

onMounted(() => {})
</script>
