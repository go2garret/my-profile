<template>
    <div class="flex flex-col items-center pb-10">

        <div class="w-24 h-24 rounded-full shadow-lg font-bold text-6xl text-gray-700 flex items-center justify-center mb-3">
            G
        </div>
        
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Garret Krawchison
        </h5>

        <div class="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Full Stack Developer
        </div>

        <div class="flex flex-col justify-center items-center text-gray-500">
            <div class="flex justify-center items-center text-sm">
                GitHub&nbsp;
                <a href="https://github.com/go2garret">
                    https://github.com/go2garret
                </a>
            </div>
            <div class="flex justify-center items-center text-sm">
                LinkedIn&nbsp;
                <a href="https://www.linkedin.com/in/garret-krawchison-3b753931" target="_blank">
                    https://linkedin.com
                </a>
            </div>            
        </div>
    </div>
</template>

<script>
    import Card from '../Card.vue';
    export default {

        components: {
            Card
        }
        
    }
</script>

<style lang="scss" scoped>

</style>