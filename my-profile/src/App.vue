<template>
	<Layout :pages="pages"
	:active="active"
	v-on:setActive="setActive">
		app active? {{ active }}
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
					title: 'About Me',
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
					subtitle: 'I created this as a unique way to explore property information in Florida',
					icon: 'fa fa-map-marker',
					name: 'property-map',
					grid: 'large',
				},
				4: {
					title: 'My Resume',
					subtitle: 'Download or print this PDF',
					icon: 'fa fa-file-pdf',
					name: 'resume',
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
			console.log("setAppActive...", page)
			this.active = page;
		}
	},
	
}
</script>

<style scoped>
</style>
