<template>
    <div class="w-full text-gray-800 bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl overflow-hidden shadow-lg"
    style="height:400px;">
        <div class="flex justify-between items-center text-gray-100 relative">
            <div v-if="title"
            class="flex items-center px-4">
                <div v-if="icon" class="mr-3 text-blue-700 w-8 h-8 border-4 rounded-full border-blue-700 flex items-center justify-center">
                    <font-awesome-icon :icon="icon"
                    size="md" /> 
                </div>
                <div class="text-lg text-gray-900 font-semibold py-3 text-left">                
                    <div>
                        {{ title }}
                    </div>
                    <div v-if="subtitle" class="m-0 p-0 font-normal text-sm">
                        {{ subtitle }}
                    </div>
                </div>
            </div>
            <div v-else></div>


            
            <button id="dropdownButton" 
            class="absolute top-1 right-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" 
            type="button"
            @click="setActive(name)">
                <span class="sr-only">Open</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                </svg>
            </button>

        </div>

        <div
        class="h-full">
            <slot></slot>
        </div>        

    </div>
    
</template>

<script>
    export default {
        name: 'Card',
        
        props: {
            name: {
                type: String
            },  
            title: {
                type: String
            },            
            subtitle: {
                type: String
            },
            icon: {
                type: String
            },
            active: {
                type: Boolean
            }
        },

        methods: {
            setActive(item) {
                this.$emit('setActive', item);
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>