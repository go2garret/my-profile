<template>
    <div class="w-full flex justify-center items-center">

        <div class="flex w-full flex-wrap pb-24" style="max-width:1100px">

            <transition-group name="grid">

                <div class="grid-item"
                :key="page.name+'gi'"
                v-show="isActive(page.name)"
                :class="active && active == page.name ? ' active ' : ' ' +  page.grid"
                v-for="(page, i) in pagesFiltered">

                    <Card
                    v-on:setActive="setActive"
                    :id="page.name"
                    :title="page.title"
                    :subtitle="page.subtitle"
                    :name="page.name"
                    :icon="page.icon"
                    :active="active && active != 'welcome' ? true : false"
                    :class="page.grid == 'banner' ? 'na' : 'grid-card text-gray-800 bg-gradient-to-r rounded-2xl overflow-hidden shadow-lg relative card-gradient'">

                        <template v-slot:top-right 
                        v-if="page.grid != 'banner'">

                            <div
                            class="absolute cursor-pointer bg-blue-100 p-1 top-1 right-1 text-blue-600 hover:bg-blue-300 focus:outline-none rounded-lg text-sm p-1.5 hover:border-none"
                            @click="setActive(page.name)">

                                <div class="flex items-center text-lg"
                                v-if="!active || active == 'welcome'">
                                    <div class="text-sm mr-1">open</div>
                                    <font-awesome-icon icon="fa fa-arrow-up-right-from-square">
                                    </font-awesome-icon>
                                </div>

                                <div class="flex items-center text-lg"
                                v-else>
                                    <div class="text-sm mr-1">close</div>
                                    <font-awesome-icon icon="fa fa-times fa-lg">
                                    </font-awesome-icon>
                                </div>

                            </div>

                        </template>

                        <AboutMe v-if="page.name=='about-me'"></AboutMe>
                        <PastExperience v-if="page.name=='past-experience'" class="overflow-auto"></PastExperience>
                        <PropertyMap v-if="page.name=='property-map'"></PropertyMap>
                        <Resume v-if="page.name=='resume'" class="overflow-auto"></Resume>
                        <Calendar v-if="page.name=='calendar'" class="overflow-auto"></Calendar>
                        <DataTablesCodePen v-if="page.name=='codepen'" class="overflow-auto"></DataTablesCodePen>
                        
                        <div v-if="page.grid == 'banner'" class="banner text-left p-4 rounded-lg">
                            <div class="flex">
                                
                                <div class="mr-2 text-yellow-400">
                                    <font-awesome-icon icon="fa fa-code" class="icon mt-2" size="2xl" title="GIS" />
                                </div>                                
                
                                <div>
                                    <div class="font-semibold text-4xl mb-2 text-yellow-400">
                                        My Story
                                    </div>
                                    <div>     
                                        <div class="mb-2">
                                            I'm really passionate about producing web designs with a fast, seamless user experience. I have been coding for over 10 years. I love to travel and see new places.
                                        </div>

                                        <div class="text-sm text-green-400 font-bold mb-2">
                                            <span class="mr-2">+ SQL</span>
                                            <span class="mr-2">+ Data Modeling</span>
                                            <span class="mr-2">+ JSON</span>
                                            <span class="mr-2">+ Fulltext</span>
                                            <span class="mr-2">+ Triggers</span>
                                            <span class="mr-2">+ Views</span>
                                        </div>
                                        <div class="text-sm text-teal-400 font-bold mb-2">
                                            <span class="mr-2">+ Visual Studio and Code</span>
                                            <span class="mr-2">+ Object Oriented Programming</span>
                                            <span class="mr-2">+ APIs</span>
                                            <span class="mr-2">+ Vue.js</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Card>
                </div>

            </transition-group>


          </div>
    </div>
</template>

<script>
    import Card from '../../components/Card.vue';
    import AboutMe from './Cards/AboutMe.vue';
    import PropertyMap from './Cards/PropertyMap.vue';
    import PastExperience from './Cards/PastExperience.vue';
    import Resume from './Cards/Resume.vue';
    import Calendar from './Cards/Calendar.vue';
    import DataTablesCodePen from './Cards/DataTablesCodePen.vue';

    export default {
        props: {
            pages: {
                type: Object,
                required: true
            },

            active: {
                type: String
            }
        },

        components: {
            AboutMe,
            Calendar,
            Card,
            DataTablesCodePen,
            PastExperience,
            PropertyMap,
            Resume
        },

        methods: {
            setActive(item) {             
                // Emit active item
                if (this.active == item) {
                    this.$emit('setActive', 'welcome');
                    return;
                }
                this.$emit('setActive', item);
            },
            isActive(name) {
                return this.active && this.active == name || (this.active && ['welcome'].includes(this.active)) || !this.active;
            },
        },

        computed: {
            pagesFiltered() {
                let pages = [];
                Object.keys(this.pages).forEach((key) => {
                    if (this.pages[key].name == 'welcome') {
                        return;
                    }
                    pages.push(this.pages[key])
                })
                return pages;
            },

        }

    }
</script>

<style lang="scss" scoped>

    .grid-enter-active,
    .grid-leave-active {
        transition: all 0.3s ease;
    }
    .grid-enter-from,
    .grid-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .grid-item {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        position: relative;
        //transition: left ease 0.2s;

        &.hidden {
            //display: none;
        }

        .grid-card {
            transition: transform ease 84ms;
            padding: 0;
            height: 400px;
            display: flex;
            flex-direction: column;
            background: rgb(255 255 255);
            background: linear-gradient(140deg, rgb(255 255 255) 0%, rgb(255 255 255) 60%, rgb(237 228 253) 100%);
            box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow), var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

            &.hoverActive {
                //transform: scale(1.025);                
            }
        }

        &.active {
            position: absolute !important;
            top: 20px;
            //padding: 0 1rem;
            left: 0;
            height: 100%;

            .grid-card {
                height: calc(100% - 80px);

                &.hoverActive {
                    transform: none;
                }
            }
        }        

        &.full {
            width: 100%;
        }

        .banner {
            width: 100%;
            background: radial-gradient(at center top, #111827c4, #1F2937c4, #374151c4);
        }

    }

    @media screen and (min-width: 600px) {

        .grid-item {
            padding: 1rem;
            &.small {
                width: 40%;
            }

            &.large {
                width: 60%
            }
        }

    }

</style>