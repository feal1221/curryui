export default defineNuxtRouteMiddleware((to, from) => {
  console.log('Auth Quiz Middleware Triggered',to);

  // 如果目標路由是結果頁，但沒有完成標記
  // if (to.path === '/result' && sessionStorage.getItem('quiz_completed') !== 'true') {
  //   // 這裡可以導向首頁或是測驗開始頁
  //   return navigateTo('/')
  // }
})