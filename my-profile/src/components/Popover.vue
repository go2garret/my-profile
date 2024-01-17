<template>
    <div
    data-popover
    id="popoverContent"
    role="tooltip"
    class="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        <div
        class="rounded-lg border-b bg-gray-100 px-3 py-2 dark:bg-gray-700">
            <slot></slot>
        </div>
        <div data-popper-arrow></div>
    </div>
</template>

<script>
    export default {
        name: 'Popover',

        methods: {
            showPopover(popupDiv, target) {            
                const popover = new Popover(popupDiv, target);
                popover.show()
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>