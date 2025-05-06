import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'


const router = createRouter( {
    history: createWebHistory(),
    routes:[
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
    ]
})

export default router