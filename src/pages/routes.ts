import {RouteRecordRaw} from "vue-router";

import DefaultLayout from '../layouts/DefaultLayout.vue';

import OverviewPage from './Overview/OverviewPage.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                component: OverviewPage
            }
        ]
    }
]
