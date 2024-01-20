<template>
	<Layout :pages="pages"
	:active="active"
	v-on:setActive="setActive">
		<Profile :active="active" :pages="pages"
		v-on:setActive="setActive">
		</Profile>

		<div class="bg-white block" style="min-height:100px">

			stuff

		</div>
	</Layout>
</template>


<script>
import Layout from './pages/Layout.vue';
import Profile from './pages/Profile/Index.vue';

export default {
	data() {
		return {
			active: null,	
			scrollY: null,		
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
					icon: 'fa fa-user',
					name: 'banner1',
					grid: 'banner',
				}, 
				4: {
					title: 'Florida Property Map',
					subtitle: 'I created this as a unique way to explore property information in Florida',
					icon: 'fa fa-map-marker',
					name: 'property-map',
					grid: 'large',
				},
				5: {
					title: 'My Resume',
					subtitle: 'Download or print this PDF',
					icon: 'fa fa-file-pdf',
					name: 'resume',
					grid: 'small',
				},
				6: {
					title: 'Calendar with Live API Data',
					subtitle: 'Using Full Calendar',
					icon: 'fa fa-file-pdf',
					name: 'calendar',
					grid: 'small',
				},
				7: {
					title: 'DataTables Example',
					subtitle: 'DataTables using API data in Vue',
					icon: 'fa fa-code',
					name: 'codepen',
					grid: 'large',
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
			const pageElement = document.getElementById('profile-page');

			// On nagivate to home, scroll to last scroll
			if (page == 'welcome' || !page || page == '/') {
				if (this.scrollY) {
					this.active = page;
					this.$nextTick(() => {
						pageElement.scrollTo({
							top: this.scrollY
						});						
					});
					return;
				}
				
			} else {
				// Save current scroll before opening page
				const currentScroll = pageElement.scrollTop;
				this.scrollY = currentScroll;
			}			

			this.active = page;
		}
	},
	
}
</script>

<style scoped>
</style>
