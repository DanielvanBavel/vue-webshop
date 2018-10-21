<template>
    <div id="sidebar">
    	<!-- Mobile Nav (max width 767px)-->
        <div class="mobile-nav">
            <!-- Navbar Brand -->
            <div class="amado-navbar-brand">
                <a href="index.html"><img src="/static/images/core-img/logo.png" alt=""></a>
            </div>
            <!-- Navbar Toggler -->
            <div class="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>

        <header class="header-area clearfix">
            <div class="nav-close">
                <i class="fa fa-close" aria-hidden="true"></i>
            </div>
            <div class="logo">
                <router-link to="/"><img src="/static/images/core-img/logo.png" alt=""></router-link>
            </div>

            <nav class="amado-nav">
                <ul>
                    <router-link tag="li" to="/"><a>Home</a></router-link>
                    <router-link tag="li" to="/shop"><a>Shop</a></router-link>
                </ul>
            </nav>

            <hr>

            <div class="cart-fav-search mb-100">
                <router-link to="/cart"><a><i class="fa fa-shopping-cart"></i> Cart <span>({{ numInCart }})</span></a></router-link>
                <a href="#" class="search-nav"><i class="fa fa-search"></i> Search</a>
            </div>

            <socialmedia></socialmedia>
        </header>
    </div>
</template>

<script>
    import Socialmedia from './Socialmedia'
    
    export default {        
        name: 'Sidebar',
        components: { Socialmedia },
        computed: {
            inCart() { return this.$store.getters.inCart; },
            numInCart() { return this.inCart.length; },
        },
    }
</script>