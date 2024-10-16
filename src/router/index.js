import { createRouter, createWebHistory } from 'vue-router'
import routes from "@/router/routes";
import store from '@/store';



const router = createRouter({
  history: createWebHistory(),
  routes
})
// Глобальный роут-гвард для проверки авторизации
router.beforeEach((to, from, next) => {
  // Проверяем, требует ли маршрут авторизации
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Если не авторизован, перенаправляем на страницу логина
    if (!store.state.auth.auth) {
      next({ name: 'LoginForm' });
    } else {
      next();
    }
  } else {
    next(); // Если маршрут не требует авторизации
  }
});
export default router
