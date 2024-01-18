<template>
    <div class="w-full flex justify-center items-center">

        <div class="flex w-full flex-wrap pb-24" style="max-width:1100px">
            
            <transition-group name="grid">

                <div class="grid-item" 
                :key="page.name+'gi'"
                v-show="active && active == page.name || (active && ['welcome'].includes(active)) || !active"
                :class="active && active == page.name ? ' active ' : ' ' +  page.grid + ' ' + active"
                v-for="(page, i) in pagesFiltered">
                    
                    <Card
                    v-on:setActive="setActive"
                    :title="page.title"
                    :subtitle="page.subtitle"
                    :name="page.name"
                    :icon="page.icon"
                    class="grid-card">

                        <AboutMe v-if="page.name=='about-me'"></AboutMe>
                        <PastExperience v-if="page.name=='past-experience'" class="overflow-auto"></PastExperience>
                        <PropertyMap v-if="page.name=='property-map'"></PropertyMap>
                        <Resume v-if="page.name=='resume'"></Resume>

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
            Card,
            PastExperience,
            PropertyMap,
            Resume
        },

        data() {
        },

        methods: {
            setActive(item) {
                this.$emit('setActive', item);
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
            }
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