import Vue from 'vue'
import Router from 'vue-router'

const Screen = () => import('./views/Screen/index.vue')
const Login = () => import('./views/User/Login.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'screen',
      component: Screen,
      meta: {
        title: '智慧中宙数字中心'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        alone: true,
        title: '登录'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
	const token = sessionStorage.getItem('token')
	const whiteList = ['/login', '/forgot-password', '/', '/about']

	if (token) {
		if (to.path === '/login') {
			next('/')
		} else {
			next()
		}
	} else {
		if (whiteList.includes(to.path)) {
			next()
		} else {
			next('/login')
		}
	}
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })

export default router;