<template>
    <div class="single-product-area clearfix">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mt-50">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">{{ categoryName }}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{product.name}}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-7">
                    <div v-if="product.album !== null" class="single_product_thumb">
                        <div id="product_details_slider" class="carousel slide" data-ride="carousel">
                            <carousel :navigationEnabled="false" :perPage="1">
                                <slide v-for="item in imageList" :key="item.id">
                                    <img :src="item.image" alt="item.title" />
                                </slide> -->
                            </carousel>
                        </div>
                    </div>
                    <div v-else>
                        <div class="single_product_thumb">
                            <img :src="product.image" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="single_product_desc">
                        <!-- Product Meta Data -->
                        <div class="product-meta-data">
                            <div class="line"></div>
                            <p class="product-price">€ {{ product.price }}</p>
                            <a href="product-details.html">
                                <h6>{{product.name}}</h6>
                            </a>
                            <!-- Ratings & Review -->
                            <div class="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                <div class="ratings">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                            <!-- Avaiable -->
                            <p v-if="product.stock >= 10" class="avaibility"><i class="fa fa-circle"></i> In Stock</p>
                            <p v-else-if="product.stock >= 5" class="avaibility"><i class="fa fa-circle"></i> Few products left</p>
                            <p v-else-if="product.stock >= 1 && product.stock <= 4" class="avaibility-almost-soldout"><i class="fa fa-circle"></i> almost sold out, {{product.stock}} left</p>
                            <p v-else class="avaibility-soldout"><i class="fa fa-circle"></i> Sold out</p>
                        </div>

                        <div class="short_overview my-5">
                            <p>{{product.description}}</p>
                        </div>

                        <button v-if="product.stock != 0" type="submit" name="addtocart" @click="addToCart(product.id)" class="btn amado-btn">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { Carousel, Slide } from 'vue-carousel';

    export default {

        components: {
            Carousel,
            Slide
        },
        data() {
            return {
                product: {},
                categoryName: null,
                imageList: null
            }
        },
        created() {
            this.getPost(this.$route.params.id)
        },
        methods: {
            getPost: function(id) {
                axios.get('http://localhost:8000/api/v1/product/' + id, { crossdomain: true })
                .then(response => {
                    this.product        = response.data[0],
                    this.categoryName   = response.data[0].category.name,
                    this.imageList      = response.data[0].album.images
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            addToCart(id) {
                this.$store.dispatch('addToCart', id);
            },           
        }
    }
</script>