<template>
    <div class="my-card w-full text-gray-800 bg-gradient-to-r from-gray-100 to-gray-300 rounded-2xl overflow-hidden shadow-lg relative"
    style="transition: width 84ms ease, height: 84ms ease;"
    @mouseenter="onMouseenter(name)"
    @mouseleave="onMouseleave(name)"
    :class="{'hoverActive': hoverActive == name ? true : false, 'active': active ? true : false}">
        <div class="flex justify-between items-center text-gray-100 relative">
            <div v-if="title"
            class="flex items-center px-4">
                <div v-if="icon" class="mr-3 text-blue-800 w-8 h-8 border-4 rounded-full border-blue-800 flex items-center justify-center">
                    <font-awesome-icon :icon="icon" />
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
        </div>

        <slot name="top-right"></slot>

        <div
        class="h-full flex-grow">
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

        data() {
            return {
                hoverActive: null
            }
        },

        methods: {
            onMouseenter(item) {
                this.hoverActive = item;
            },
            onMouseleave(item) {
                this.hoverActive = null;
            },
        }

    }
</script>

<style lang="scss" scoped>
.my-card {
    padding: 0;
    height: 400px;
    display: flex;
    flex-direction: column;
}
</style>