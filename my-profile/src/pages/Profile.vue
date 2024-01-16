<template>
    <div>

        <ProfilePage :page="['active-page']" :key="activePage"></ProfilePage>

        <div class="flex">           

            <div v-for="(val, i) in pages" 
            @click="setActive(val)"
            class="p-2 m-1 cursor-pointer"
            ar>
                <span class="material-symbols-outlined" v-if="activePage == pages[val]">
                    radio_button_checked
                </span>

                <span class="material-symbols-outlined" v-else>
                    radio_button_unchecked
                </span>
            </div>
    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Profile',

        data() {
            return {
                'pages': {
                    1: 'default',
                    2: 'about-me',
                    3: 'florida-property-map',
                    4: 'past-experience',
                    5: 'interests',
                    6: 'conclusion'
                },
                'active-page': 'default'
            }            
        },

        mounted() {
            this.handleRoute();
        },

        methods: {
            handleRoute() {                
                const router = this.$router;
                console.log("Page", router);

                const current = this.$router.currentRoute.value.path;
                console.log("current", current);

                router.afterEach((val) => {
                    console.log("Route", val);
                });

                console.log("first", activePage)
            },

            setActive(page) {
                console.log("Setpage", page);
            }
        },

        watch: {            
            activePage(newVal, oldVal) {
                console.log("active", newVal, oldVal);                
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>