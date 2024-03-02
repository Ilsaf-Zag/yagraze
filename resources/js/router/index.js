import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@pages/HomeView.vue'),
            meta: {
                title: "Главная страница"
            }
        },
        {
            path: '/designs',
            name: 'designs',
            component: () => import('@pages/DesignView.vue'),
            meta: {
                title: "Дизайны"
            }
        },
        {
            path: '/illustrations',
            name: 'illustrations',
            component: () => import('@pages/IllustrationsView.vue'),
            meta: {
                title: "Иллюстрации"
            }
        },
        {
            path: '/services',
            name: 'services',
            component: () => import('@pages/ServicesView.vue'),
            meta: {
                title: "Услуги"
            }
        },
        {
            path: '/reviews',
            name: 'reviews',
            component: () => import('@pages/ReviewsView.vue'),
            meta: {
                title: "Отзывы"
            }
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: () => import('@pages/ContactsView.vue'),
            meta: {
                title: "Контакты"
            }
        },
        {
            path: '/admin',
            component: () => import('@/js/views/admin/AdminView.vue'),

            children: [
                {
                    path: '',
                    name: 'admin.home',
                    component: () => import('../views/admin/home/AdminHome.vue'),
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
                            component: () => import('../views/admin/illustration/AdminIllustrationList.vue'),
                            meta: {
                                title: "Админ-панель | Карточки иллюстраций"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.illustrations.create',
                            component: () => import('../views/admin/illustration/AdminIllustrationCreate.vue'),
                            meta: {
                                title: "Админ-панель | Создание карточки иллюстрации"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.illustrations.edit',
                            component: () => import('../views/admin/illustration/AdminIllustrationEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование карточки иллюстрации"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.illustrations.sort',
                            component: () => import('../views/admin/illustration/AdminIllustrationSort.vue'),
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
                            component: () => import('../views/admin/design/AdminDesignList.vue'),
                            meta: {
                                title: "Админ-панель | Карточки дизайнов"
                            },
                        },
                        {
                            path: 'create',
                            name: 'admin.designs.create',
                            component: () => import('../views/admin/design/AdminDesignCreate.vue'),

                            meta: {
                                title: "Админ-панель | Создание карточки дизайна"
                            },
                        },
                        {
                            path: ':id/edit',
                            name: 'admin.designs.edit',
                            component: () => import('../views/admin/design/AdminDesignEdit.vue'),
                            props: true,
                            meta: {
                                title: "Админ-панель | Редактирование карточки дизайна"
                            },
                        },
                        {
                            path: 'sort',
                            name: 'admin.designs.sort',
                            component: () => import('../views/admin/design/AdminDesignSort.vue'),
                            meta: {
                                title: "Админ-панель | Сортировка карточек дизайна"
                            },
                        },
                    ]
                },
                {
                    path:'settings',
                    name:'admin.settings',
                    component: () => import('../views/admin/settings/AdminSettingsList.vue'),
                    meta: {
                        title: "Админ панель | Настройки"
                    }

                }
            ]
        },

        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: () => import('../views/errors/404.vue'),
            meta: {
                title: "404"
            },
        },
    ]
})
router.beforeEach((to, from, next) => {
    document.title = `Graze | ${to.meta.title}`
    next()
})
export default router
