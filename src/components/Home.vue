<template>
    <div class="products-catagories-area clearfix">
        <div class="amado-pro-catagory clearfix">
		    <div v-masonry transition-duration="0.3s" item-selector=".item" class="masonry-container">				
                <div v-for="product in products" v-masonry-tile class="item single-products-catagory clearfix">
            		<router-link :to="`/${product.category.name}/${product.name}/${product.id}`">
                    	<img :src="product.image" alt="product.name">
                    
                        <div class="hover-content">
                            <div class="line"></div>
                            <p>€ {{product.price}}</p>
                            <h4>{{product.name}}</h4>
                        </div>
            		</router-link>
        		</div>
		    </div>
        </div>
    </div>
</template>

<script>    
    import axios from 'axios'

    export default {
        data() {
            return {
                products: [],
            }
        },
        created() {
            axios.get('http://localhost:8000/api/v1/products/highlighted', { crossdomain: true })
            .then(response => {
                this.products = response.data;
            })
            .catch(e => {
                this.errors.push(e);
            })
        }
    }
</script>

<style scoped>
	.item {
	  width: 33.33%;
	}
	.masonry-container {
	    width: 100%;
	    margin: 0 auto;
	}
</style>