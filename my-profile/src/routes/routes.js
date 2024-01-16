import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'

const routes = [    
	{
		path: '/',
		name: 'Home',
		component: Home,
        meta: {
            title: `Garret Krawchison's Homepage`
        }
	},
    {
		path: '/',
		name: 'About Me',
        meta: {
            title: `Garret Krawchison's Homepage`
        }
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;