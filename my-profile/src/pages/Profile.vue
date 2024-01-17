<template>
    <div>

        <ProfilePage :page="['active-page']" :key="activePage"></ProfilePage>

        <div class="flex">           

            <div v-for="(val, i) in pages" 
            @click="setActive(val)"
            @mousemove="onMouseover(val, $event)"
            class="p-2 m-1 cursor-pointer">

                <span class="material-symbols-outlined" v-if="activePage == pages[val]">
                    radio_button_checked
                </span>

                <span class="material-symbols-outlined" v-else>
                    radio_button_unchecked
                </span>
                
                <div
                    data-popover
                    id="popoverContent"
                    role="tooltip"
                    class="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                >
                    <div
                        class="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
                    >
                        <h3 class="font-semibold text-gray-900 dark:text-white">
                            Popover title
                        </h3>
                    </div>
                    <div class="px-3 py-2">
                        <p>And here's some amazing content. It's very engaging. Right?</p>
                    </div>
                    <div data-popper-arrow></div>
                </div>
            </div>
    
        </div>
    </div>
</template>

<script>
    import { Popover } from 'flowbite';

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
                'active-page': 'default',
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
            },

            onMouseover(val, event) {
                const popupDiv = document.getElementById('popoverContent');
                const target = event.target;
                console.log(event.target);

                const popover = new Popover(popupDiv, target);

                popover.show();
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