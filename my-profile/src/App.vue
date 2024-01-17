<template>
	<div>
		<Layout v-on:setActive="setActive">
			<Profile :active="active">
			</Profile>   
		</Layout>
	</div>
</template>


<script>
import Layout from './pages/Layout.vue';
import Profile from './pages/Profile.vue';

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
