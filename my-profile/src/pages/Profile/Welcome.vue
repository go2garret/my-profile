<template>
    <div class="w-full flex justify-center items-center">

        <div class="flex w-full flex-wrap pb-24" style="max-width:1100px">

            <transition-group name="grid">

                <div class="grid-item"
                :key="page.name+'gi'"
                v-show="isActive(page.name)"
                :class="active && active == page.name ? ' active ' : ' ' +  page.grid + ' ' + active"
                v-for="(page, i) in pagesFiltered">

                    <Card
                    v-on:setActive="setActive"
                    :title="page.title"
                    :subtitle="page.subtitle"
                    :name="page.name"
                    :icon="page.icon"
                    :active="active"
                    class="grid-card">

                        <template v-slot:top-right>

                            <div
                            class="absolute cursor-pointer bg-indigo-300 p-1 top-1 right-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 focus:outline-none rounded-lg text-sm p-1.5 hover:border-none"
                            @click="setActive(page.name)">

                                <div class="flex items-center text-gray-900 text-lg"
                                v-if="!active || active == 'welcome'">
                                    <div class="text-sm mr-1">open</div>
                                    <font-awesome-icon icon="fa fa-arrow-up-right-from-square">
                                    </font-awesome-icon>
                                </div>

                                <div class="flex items-center text-gray-900 text-lg"
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
                        <Resume v-if="page.name=='resume'"></Resume>
                        <Calendar v-if="page.name=='calendar'" class="overflow-auto"></Calendar>

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


    export default {
        props: {
            pages: {
                type: Object,
                required: true
            },

            active: {
                type: Boolean
            }
        },

        components: {
            AboutMe,
            Calendar,
            Card,
            PastExperience,
            PropertyMap,
            Resume
        },

        methods: {
            setActive(item) {
                if (this.active == item) {
                    this.$emit('setActive', 'welcome');
                    return;
                }
                this.$emit('setActive', item);
            },
            isActive(name) {
                return this.active && this.active == name || (this.active && ['welcome'].includes(this.active)) || !this.active;
            }
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

            &.hoverActive {
                transform: scale(1.05);
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