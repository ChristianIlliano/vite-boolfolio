import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PostsPage from "./pages/PostsPage.vue";
import SinglePostPage from "./pages/SinglePostPage.vue";

const router = createRouter({
    history: createWebHistory(),
        routes: [

            {
                path: "/",
                name: "home",
                component: HomePage,
            },
            {
                path: "/projects",
                name: "projects",
                component: PostsPage,
            },
            {
                path: "/projects/:slug",
                name: "single-project",
                component: SinglePostPage,
            },
        ]
    });

export { router };