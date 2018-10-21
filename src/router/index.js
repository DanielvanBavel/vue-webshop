import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Shop from '@/components/Shop'
import Cart from '@/components/Cart'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  	mode: 'history',
  	routes: 
  	[
		{
			path: '/',
      		name: 'home',
	      	component: Home
	    },
	    {
	    	path: '/shop',
	    	name: 'shop',
	    	component: Shop
	    },
	    {
	    	path: '/:category/:product/:id',
	    	name: 'product-detail',
	    	component: Product
	    },
	    {
	    	path: '/cart',
	    	name: 'cart',
	    	component: Cart
	    }
	]
})
