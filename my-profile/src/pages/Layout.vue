<template>
    <div class="w-full">

        <slot class="w-full h-full"
        style="min-height:100vh">
        </slot>

        <div class="fixed flex justify-center bottom-1 w-full text-center left-0">           

            <div class="flex bg-gray-800 text-gray-300 rounded-3xl mb-2 p-3"
            style="box-shadow: 0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f,0 10px 15px -3px #0000001a,0 20px 25px -5px #0000001a,0 25px 50px -12px #00000040">

                <div v-for="(val, i) in pages" 
                class="flex items-center justify-center"
                :key="'btn'+val">

                    <RadioButton
                    @click="setActive(val)"
                    @mousemove="onMouseover(val, $event)"
                    :active="active == val">
                    </RadioButton>

                </div>                
                    
                <Popover ref="Popover">
                </Popover>
        
            </div>

        </div>


    </div>
</template>

<script>
    import Popover from '../components/Popover.vue';
    import RadioButton from '../components/RadioButton.vue';

    export default {
        name: 'Layout',
        data() {
            return {
                pages: {
                    1: 'Welcome',
                    2: 'About-Me',
                    3: 'Florida-Property-Map',
                    4: 'Past-Experience',
                    5: 'Interests',
                    6: 'Conclusion'
                },
                active: 'Welcome',
            }            
        },

        components: {
            RadioButton,
            Popover
        },

        mounted() {
            this.handleRoute();
        },

        methods: {
            handleRoute() {            
                const router = this.$router;
                const path = router.currentRoute.value.path
                const page = path == '/' ? 'Welcome' : page;
                this.setActive(page);
            },
            
            setActive(page) {
                this.active = page;                               
                this.$router.push(`${page}`);
                this.$emit('setActive', page);
            },

            onMouseover(val, event) {
                const popupDiv = document.getElementById('popoverContent');
                const target = event.target;
                popupDiv.firstElementChild.innerHTML = val;
                this.$refs.Popover.showPopover(popupDiv, target);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>