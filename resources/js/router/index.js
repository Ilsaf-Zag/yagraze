import {createRouter, createWebHistory} from 'vue-router'
import {useAuthStore} from "@stores/authStore.js";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
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
                        title: "Главная страница"
                    }
                },
                {
                    path: '/designs',
                    name: 'designs',
                    component: () => import('@views/user/design/DesignView.vue'),
                    meta: {
                        title: "Дизайны"
                    }
                },
                {
                    path: '/illustrations',
                    name: 'illustrations',
                    component: () => import('@views/user/illustration/IllustrationsView.vue'),
                    meta: {
                        title: "Иллюстрации"
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
                requiresAuth: true
            },

            children: [
                {
                    path: '',
                    name: 'admin.home',
                    component: () => import('@views/admin/home/AdminHome.vue'),
                    meta: {
                        title: "Админ-панель | Главная"
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
                                title: "Админ-панель | Карточки иллюстраций"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.illustrations.create',
                            component: () => import('@views/admin/illustration/AdminIllustrationCreate.vue'),
                            meta: {
                                title: "Админ-панель | Создание карточки иллюстрации"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.illustrations.edit',
                            component: () => import('@views/admin/illustration/AdminIllustrationEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование карточки иллюстрации"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.illustrations.sort',
                            component: () => import('@views/admin/illustration/AdminIllustrationSort.vue'),
                            meta: {
                                title: "Админ-панель | Сортировка карточек иллюстраций"
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
                                title: "Админ-панель | Карточки дизайнов"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.designs.create',
                            component: () => import('@views/admin/design/AdminDesignCreate.vue'),

                            meta: {
                                title: "Админ-панель | Создание карточки дизайна"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.designs.edit',
                            component: () => import('@views/admin/design/AdminDesignEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование карточки дизайна"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.designs.sort',
                            component: () => import('@views/admin/design/AdminDesignSort.vue'),
                            meta: {
                                title: "Админ-панель | Сортировка карточек дизайна"
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
router.beforeEach((to, from, next) => {
    document.title = `Graze | ${to.meta.title}`
    // console.log(useAuthStore().isAuth)
    // if (to.meta.requiresAuth && useAuthStore().isAuth) {
    //     console.log(to.fullPath)
    //     // return {
    //     //     path: '/login',
    //     //     // save the location we were at to come back later
    //     //     query: { redirect: to.fullPath },
    //     // }
    // }
    next()
})
export default router
