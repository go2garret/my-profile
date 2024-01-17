<template>
	<Layout :pages="pages"
	v-on:setActive="setActive">
		<Profile :active="active" :pages="pages">
		</Profile>   
	</Layout>
</template>


<script>
import Layout from './pages/Layout.vue';
import Profile from './pages/Profile/Index.vue';

export default {
	data() {
		return {
			active: null,			
			pages: {
				1: {
					title: 'About Me',
					name: 'about-me',
					grid: 'small',
				},
				2: {
					title: 'Past Experience',
					name: 'past-experience',
					grid: 'large',
				}, 
				3: {
					title: 'Florida Property Map',
					name: 'property-map',
					grid: 'large',
				},
				4: {
					title: 'Interests',
					name: 'interests',
					grid: 'small',
				},
			},
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
