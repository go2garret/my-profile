<template>
    <div>
        <div class="bg-gray-100 py-3 m-3 rounded-3xl text-gray-500">
            <div class="mb-1">Where I have Worked</div>
            <IconTray :items="items">

            </IconTray>
        </div>

        
        <div class="bg-gray-100 py-3 m-3 rounded-3xl text-gray-500">
            <div class="mb-1">Skills</div>
            
            <div>
                things
            </div>
        </div>
        
        
    </div>
</template>

<script>
    import IconTray from '../../../components/IconTray.vue';

    export default {
        name: 'PastExperience',
        
        data() {
            return {
                items: [
                    {
                        name: 'CSX',
                        image: '/src/assets/csx.png'
                    },
                    {
                        name: 'NextEra Energy',
                        image: '/src/assets/nextera.png'
                    },
                    {
                        name: `Leonard's`,
                        image: '/src/assets/leonards.png'
                    },
                    {
                        name: `Lockwood, Andrews, and Newnam`,
                        image: '/src/assets/lockwood.jpg'
                    }
                ]
            }
        },

        components: {
            IconTray
        }
    }
</script>

<style lang="scss" scoped>

</style>