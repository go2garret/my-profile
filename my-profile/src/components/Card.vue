<template>
    <div class="w-full h-full text-gray-800 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center px-4 py-3 bg-gray-200">
            <div v-if="title" class="">
                {{ title }}
            </div>
            <div v-else></div>
            
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                <span class="sr-only">Open</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>

        </div>

        <div style="height: 316px" 
        class="flex flex-col justify-center">
            <slot></slot>
        </div>        

    </div>
    
</template>

<script>
    export default {
        name: 'Card',
        
        props: {
            title: {
                type: String
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>