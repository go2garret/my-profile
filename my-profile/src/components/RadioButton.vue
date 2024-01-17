<template>
    <div 
    class="cursor-pointer p-1 md:p-2 flex justify-center items-center">
        <span class="material-symbols-outlined" 
        v-if="active">
            radio_button_checked
        </span>

        <span class="material-symbols-outlined" 
        v-else>
            radio_button_unchecked
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            }
        },

        name: 'RadioButton'
    }
</script>

<style lang="scss" scoped>

</style>