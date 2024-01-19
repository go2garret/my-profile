<template>
    <div class="w-full h-full" >
        <embed class="w-full h-full" type="application/pdf" 
        :src="source" id="resume-pdf" />
    </div>
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