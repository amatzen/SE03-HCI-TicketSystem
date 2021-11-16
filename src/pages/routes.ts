import {RouteRecordRaw} from "vue-router";

import OverviewPage from './Overview/OverviewPage.vue';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: OverviewPage,
    }
]
