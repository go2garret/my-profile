<template>
    <div>

        <slot>
        </slot>

        <div>           

            <div class="flex" >

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