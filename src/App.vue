<template>
	<div id="app">
		<search></search>
		<div class="main-content-wrapper d-flex clearfix">
	    	<sidebar></sidebar>
	    	<router-view :key="$route.fullPath"></router-view>
	    </div>
	    <newsletter></newsletter>
	    <foot></foot>
  	</div>
</template>

<script>
	import Search from './components/default/Search' 
	import Sidebar from './components/default/Sidebar'
	import Newsletter from './components/default/Newsletter'
    import Foot from './components/default/Foot'

	export default {
	  name: 'App',
	  components: { Search, Sidebar, Newsletter, Foot }
	}
</script>