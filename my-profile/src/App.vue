<template>
	<Layout v-on:setActive="setActive">
		<Profile :active="active">
		</Profile>   
	</Layout>
</template>


<script>
import Layout from './pages/Layout.vue';
import Profile from './pages/Profile/Index.vue';

export default {
	data() {
		return {
			active: null
		}
	},

	components: {
		Layout,
		Profile
	},

	methods: {
		setActive(page) {
			this.active = page;
		}
	},
	
}
</script>

<style scoped>
</style>
