<template>
    <div>
        <div class="flex justify-center items-center">
            <div class="w-full" style="margin-left:10px">
                <div class="w-full tray mb-3">
                    <div class="relative circle-img-container" v-for="(item, i) in items">
                        <div class="bg-cover bg-center flex-shrink-0 cursor-pointer border border-4 border-white rounded-full circle-img"
                        :style="{'background-image': url(item.image)}">
                        </div>
                    </div>                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            items: {
                type: Array
            }
        }        
    }
</script>

<style lang="scss" scoped>

</style>