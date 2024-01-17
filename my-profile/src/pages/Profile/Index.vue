<template>
    <div class="w-full flex justify-center items-center bg-indigo-900"
    style="min-height:100vh">
        <div class="w-full">
            <h3>
                {{ active }}
            </h3>
    
            <div>
    
                <Welcome v-if="active == 'Welcome'">
                </Welcome>
    
            </div>
        </div>
    </div>
</template>

<script>
    import Welcome from './Welcome.vue';

    export default {
    name: 'Profile',
    props: {
        active: {
            type: String
        }
    },
    mounted() {
    },
    methods: {},
    components: { Welcome }
}
</script>

<style lang="scss" scoped>

    .window {
        width: calc(100% - 8px);
        height: calc(100vh - 8px);
    }

    @media screen and (min-width: 600px) {
        .window {
            width: 600px;
            height: unset;
        }        
    }

</style>