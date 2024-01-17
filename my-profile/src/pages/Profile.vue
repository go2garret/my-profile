<template>
    <div>
        <h3>
            {{ active }}
        </h3>
    </div>
</template>

<script>

    export default {        
        name: 'Profile',

        props: {
            active: {
                type: String
            }
        },

        mounted() {
            console.log("Profile", this.active);
        },

        methods: {
        },
    }
</script>

<style lang="scss" scoped>

</style>