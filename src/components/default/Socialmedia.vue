<template>
    <div class="social-info d-flex justify-content-between">
        <a :href=" instagram " target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a :href=" facebook " target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a :href=" twitter " target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
    </div>
</template>

<script>

	export default {
		name: 'socialmedia',
		data() {
			return {
				instagram: "http://www.instagram.com/",
				facebook: "http://www.facebook.com/",
				twitter: "https://www.twitter.com/"
			}
		}
	}

</script>