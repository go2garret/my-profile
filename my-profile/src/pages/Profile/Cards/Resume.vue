<template>
    <embed class="w-full h-full pb-20" type="application/pdf" 
    :src="source" id="resume-pdf" />
</template>

<script>
    export default {
        name: 'Resume',

        data() {
            return {
                'source': '/src/assets/resume.pdf'
            }
        },

    }
</script>

<style lang="scss" scoped>

</style>