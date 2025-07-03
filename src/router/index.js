import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//Si queremos que el componenete cargue desde el inicio lo poneos el import aca arriba y si no alla abajo

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/details/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailsView.vue'), //como solo lo queremos que cargue cuando hagamos click en nostros (boton navbar) lo ponemos en esta seccion
    },
    {
      path: '/favoritos',
      name: 'favoritos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FavsView.vue'), //como solo lo queremos que cargue cuando hagamos click en nostros (boton navbar) lo ponemos en esta seccion
    },
    {
      path: '/alumno',
      name: 'alumno',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AlumnoView.vue'), //como solo lo queremos que cargue cuando hagamos click en nostros (boton navbar) lo ponemos en esta seccion
    },
  ],
})

export default router

/*para obtener el id(esto en el detalleView.vue, dentro del objeto):
 const id = viewRoute().params.id
 const productos = productos.find((p) => p.id ==id)
*/

/*
ACCESS TOKEN API: 836a98a6824c1dcfc96a52a090266cd5

SOOO...:

https://superheroapi.com/api/836a98a6824c1dcfc96a52a090266cd5
*/
