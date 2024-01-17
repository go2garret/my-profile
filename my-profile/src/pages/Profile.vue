<template>
    <div>
        <h3>
            {{ page }}
        </h3>
    </div>
</template>

<script>

    export default {        
        name: 'Profile',

        props: {
            page: {
                type: String
            }
        },

        mounted() {
            console.log("Profile", this.page);
        },

        methods: {
        },
    }
</script>

<style lang="scss" scoped>

</style>