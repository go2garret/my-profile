<template>
    <div>
        <Profile :page="active">
        </Profile>          
    </div>
</template>

<script>
    import Profile from './Profile.vue';

    export default {
        name: 'Home',
        props: {
            active: {
                type: String
            }
        },
        mounted() {
            console.log("Home", this.active);
        },
        components: {
            Profile,
        }    
    }
</script>

<style lang="scss" scoped>

</style>