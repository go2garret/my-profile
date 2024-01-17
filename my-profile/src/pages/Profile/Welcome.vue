<template>
    <div class="w-full flex justify-center items-center">
        <div class="flex w-full flex-wrap pb-24" style="max-width:1100px">
            <div class="grid-item small">                
                <Card>
                    <AboutMe></AboutMe>                
                </Card>
            </div>

            <div class="grid-item large">
                <Card title="Professional Experience">   
                    <PastExperience class="overflow-auto"></PastExperience>             
                </Card>                
            </div>

            <div class="grid-item large">                
                <Card title="Florida Property Map">   
                    <PropertyMap></PropertyMap>             
                </Card>                
            </div>   

            <div class="grid-item small">                
                <Card>   
                    <AboutMe></AboutMe>             
                </Card>                
            </div>
            
            <div class="grid-item small">
                <Card title="Professional Experience">   
                    <PastExperience class="overflow-auto"></PastExperience>             
                </Card>                
            </div>

            <div class="grid-item large">                
                <Card>   
                    <AboutMe></AboutMe>             
                </Card>                
            </div>


          </div>
    </div>
</template>

<script>
    import Card from '../../components/Card.vue';
    import AboutMe from './Cards/AboutMe.vue';
    import PropertyMap from './Cards/PropertyMap.vue';
    import PastExperience from './Cards/PastExperience.vue';

    export default {

        components: {
            AboutMe,
            Card,
            PastExperience,
            PropertyMap
        }
        
    }
</script>

<style lang="scss" scoped>

    .grid-item {
        min-height: 200px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
    }

    @media screen and (min-width: 600px) {
        
        .grid-item {
            padding: 1rem;
            &.small {
                width: 40%;
            }
    
            &.large {
                width: 60%
            }
        }
        
    }

</style>