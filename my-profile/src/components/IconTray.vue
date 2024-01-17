<template>
    <div class="flex justify-center items-center">
        <div class="w-full" style="margin-left:10px">
            <div class="w-full tray">
                <div class="relative circle-img-container" v-for="(item, i) in items">
                    <div class="flex-shrink-0 cursor-pointer border border-4 border-grey-300 rounded-full circle-img"
                    :style="{backgroundImage: 'url(' + item.image + ')'}">
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


.circle-img-container {
	width: 100px;
	height: 100px;
	position: relative;
    margin-right: -12px;
}
    
.circle-img-container .circle-img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.12s;
    margin-left: 0;
    background-color: white;    
    background-size: 80px auto;
    background-repeat: no-repeat;
    background-position: center;
}
    
.centered-absolute {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s;
}

.circle-img-container:hover {
    width: 120px;
    margin: 0 -8px 0 0;
}

.circle-img-container:hover .circle-img {
    top: -8px;
    left: 12px;
    width: 100px;
    height: 100px;
    z-index: 10;
    max-height: 146px;
}

.tray {
    text-align: center;
    display: flex;
    flex-wrap: none;
    align-items: center;
    justify-content: center;
}

</style>