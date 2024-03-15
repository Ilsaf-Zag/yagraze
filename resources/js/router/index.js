import {createRouter, createWebHistory} from 'vue-router'
import {useUserStore} from "@stores/userStore.js";
import {useLoadingStore} from "@stores/loadingStore.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL) || createWebHistory('/'),
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
    routes: [
        {
            path: '',
            component: () => import('@views/user/DefaultView.vue'),

            children: [
                {
                    path: '',
                    component: () => import('@views/user/home/HomeView.vue'),
                    name: 'home',
                    meta: {
                        title: "Главная"
                    }
                },
                {
                    path: '/designs',
                    name: 'designs',
                    component: () => import('@views/user/design/DesignView.vue'),
                    meta: {
                        title: "Дизайн"
                    }
                },
                {
                    path: '/illustrations',
                    name: 'illustrations',
                    component: () => import('@views/user/illustration/IllustrationsView.vue'),
                    meta: {
                        title: "Иллюстрация"
                    }
                },
                {
                    path: '/services',
                    name: 'services',
                    component: () => import('@views/user/service/ServicesView.vue'),
                    meta: {
                        title: "Услуги"
                    }
                },
                {
                    path: '/reviews',
                    name: 'reviews',
                    component: () => import('@views/user/review/ReviewsView.vue'),
                    meta: {
                        title: "Отзывы"
                    }
                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: () => import('@views/user/contact/ContactsView.vue'),
                    meta: {
                        title: "Контакты"
                    }
                }

            ]
        },

        {
            path: '/admin',
            component: () => import('@views/admin/AdminView.vue'),
            meta:{
                requiresAdmin: true
            },

            children: [
                {
                    path: '',
                    name: 'admin.home',
                    component: () => import('@views/admin/home/AdminHome.vue'),
                    meta: {
                        title: "Админ-панель | Главная",
                    },
                },
                {
                    path: 'illustrations',
                    children: [
                        {
                            path: '',
                            name: 'admin.illustrations',
                            component: () => import('@views/admin/illustration/AdminIllustrationList.vue'),
                            meta: {
                                title: "Админ-панель | Иллюстрации"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.illustrations.create',
                            component: () => import('@views/admin/illustration/AdminIllustrationCreate.vue'),
                            meta: {
                                title: "Админ-панель | Создание иллюстраций"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.illustrations.edit',
                            component: () => import('@views/admin/illustration/AdminIllustrationEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование иллюстраций"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.illustrations.sort',
                            component: () => import('@views/admin/illustration/AdminIllustrationSort.vue'),
                            meta: {
                                title: "Админ-панель | Сортировка иллюстраций"
                            },
                        },
                    ]
                },
                {
                    path: 'designs',
                    children: [
                        {
                            path: '',
                            name: 'admin.designs',
                            component: () => import('@views/admin/design/AdminDesignList.vue'),
                            meta: {
                                title: "Админ-панель | Дизайны"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.designs.create',
                            component: () => import('@views/admin/design/AdminDesignCreate.vue'),

                            meta: {
                                title: "Админ-панель | Создание дизайна"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.designs.edit',
                            component: () => import('@views/admin/design/AdminDesignEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование дизайна"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.designs.sort',
                            component: () => import('@views/admin/design/AdminDesignSort.vue'),
                            meta: {
                                title: "Админ-панель | Сортировка дизайна"
                            },
                        },
                    ]
                },
                {
                    path: 'reviews',
                    children: [
                        {
                            path: '',
                            name: 'admin.reviews',
                            component: () => import('@views/admin/review/AdminReviewList.vue'),
                            meta: {
                                title: "Админ-панель | Отзывы"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.reviews.create',
                            component: () => import('@views/admin/review/AdminReviewCreate.vue'),

                            meta: {
                                title: "Админ-панель | Создание отзыва"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.reviews.edit',
                            component: () => import('@views/admin/review/AdminReviewEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование отзыва"
                            },
                        },
                    ]
                },
                {
                    path: 'settings',
                    name: 'admin.settings',
                    component: () => import('@views/admin/settings/AdminSettings.vue'),
                    meta: {
                        title: "Админ панель | Настройки"
                    }

                }
            ]
        },

        {
            path:'/auth/login',
            name:'login',
            component: () => import('@views/auth/Login.vue'),
            meta: {
                title: "Вход"
            },
        },

        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: () => import('@views/errors/NotFound .vue'),
            meta: {
                title: "Страница не найдена"
            },
        },
    ]
})

router.beforeEach((to,from)=>{
    const loadingStore = useLoadingStore()
    loadingStore.isLoading = true
})
router.afterEach((to,from)=>{
    const loadingStore = useLoadingStore()
    loadingStore.isLoading = false
})
router.beforeResolve( async (to, from) => {
    const user = useUserStore();

    if (to.meta.requiresAdmin && !user.isAdmin) {
        await user.checkAdmin();

        if (!user.isAdmin) return {name:'login'}
    }

    document.title = `Graze | ${to.meta.title}`
})
export default router
