<template>
    <div class="w-full"
    style="background:url(https://images.unsplash.com/photo-1633524411211-b682455441f5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); background-size:cover; height:100vh; overflow: auto">
        <div class="profile-header sticky flex items-center justify-between px-4"
        style="top:0;left:0">

            <div>

                <a href="#"
                class="text-indigo-100 mr-2 hover:text-indigo-300 my-0 py-0 flex items-center justify-center">
                    <h3 class="font-semibold">
                        <font-awesome-icon icon="fa fa-terminal cursor-pointer"
                        style="margin-right:6px;"
                        size="xl" />
                        Garret Krawchison
                    </h3>
                </a>
            </div>

            <div>

                <a href="https://github.com/go2garret" target="_blank"
                class="text-indigo-100 mr-2 hover:text-indigo-300">
                    <font-awesome-icon icon="fa-brands fa-github cursor-pointer"
                    size="xl" />
                    Github
                </a>

                <a href="https://www.linkedin.com/in/garret-krawchison-3b753931" target="_blank"
                class="text-indigo-100 mr-2 hover:text-indigo-300">
                    <font-awesome-icon icon="fa-brands fa-linkedin cursor-pointer"
                    size="xl" />
                    LinkedIn
                </a>

            </div>

        </div>
        <div class="w-full mt-5">
            <!-- <h3 class="text-2xl py-5" style="text-shadow: 2px 3px 2px rgb(0 0 0 / 40%), 0px -4px 10px rgb(0 0 0 / 30%);">
                {{ active }}
            </h3> -->

            <div>

                <Welcome :pages="pages" :active="active"
                v-on:setActive="setActive">
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
        },
        pages: {
            type: Object
        }
    },
    mounted() {
    },
    methods: {
        
        setActive(item) {
            this.$emit('setActive', item);
        }
        
    },
    components: { Welcome }
}
</script>

<style lang="scss" scoped>

    .profile-header {
        background: rgba(8, 38, 83, 0.7);
        height: 38px;
        width: 100%;
        z-index: 5;
    }

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