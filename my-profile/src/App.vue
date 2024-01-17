<template>
	<div>
		<Layout v-on:setActive="setActive">
			<router-view :active="active"></router-view>	
		</Layout>
	</div>
</template>


<script>
import Layout from './pages/Layout.vue';

export default {
	data() {
		return {
			active: null
		}
	},

	components: {
		Layout
	},

	methods: {
		setActive(page) {
			console.log("setActive", page)
			this.active = page;
		}
	},
	
}
</script>

<style scoped>
</style>
