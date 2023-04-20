import { RouterLink } from 'vue-router'

import MyService from './home/MyService.vue'

const routes = {
    
    {
        path: '/service',
        name: 'Mentoria',
        component: Services,
        //Permitindo que todos os parametros da rota sejam passados como atributos
        props:true,
    },
}