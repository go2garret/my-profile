<template>
    <div class="w-full flex justify-center items-center">

        <div class="flex w-full flex-wrap pb-24" style="max-width:1100px">

            <div class="grid-item" :class="page.grid"
            v-for="(page, i) in pagesFiltered">
                <Card
                :title="page.title"
                :name="page.name"
                v-on:setActive="setActive(page.name)">

                    <AboutMe v-if="page.name=='about-me'"></AboutMe>
                    <PastExperience v-if="page.name=='past-experience'" class="overflow-auto"></PastExperience>
                    <PropertyMap v-if="page.name=='property-map'"></PropertyMap>

                </Card>
            </div>


          </div>
    </div>
</template>

<script>
    import Card from '../../components/Card.vue';
    import AboutMe from './Cards/AboutMe.vue';
    import PropertyMap from './Cards/PropertyMap.vue';
    import PastExperience from './Cards/PastExperience.vue';

    export default {
        props: {
            pages: {
                type: Object,
                required: true
            }
        },

        components: {
            AboutMe,
            Card,
            PastExperience,
            PropertyMap
        },

        data() {
            return {
                active: null
            }
        },

        methods: {
            setActive(item) {
                console.log('setactive', item);
                this.active = item;
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

    .grid-item {
        min-height: 200px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        &.active {
            width: 100%;
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