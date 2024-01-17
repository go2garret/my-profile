<template>
	<Layout :pages="pages"
	:active="active"
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
				0: {
					title: 'Welcome',
					name: 'welcome',
				},
				1: {
					name: 'about-me',
					grid: 'small',
				},
				2: {
					title: 'Professional Experience',
					subtitle: '15+ years experience',
					icon: 'fa fa-user',
					name: 'past-experience',
					grid: 'large',
				}, 
				3: {
					title: 'Florida Property Map',
					subtitle: 'Explore property and census data in Florida',
					icon: 'fa fa-map-marker',
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
