<template>
    <div class="w-full flex justify-center items-center">
        <div class="flex w-full flex-wrap" style="max-width:800px">
            <div class="grid-item small">                
                <Card title="About Me">
                    <AboutMe></AboutMe>                
                </Card>
            </div>

            <div class="grid-item large">                
                <Card>   
                    <AboutMe></AboutMe>             
                </Card>                
            </div>            
            <div class="grid-item large">
                <Card>   
                    <AboutMe></AboutMe>             
                </Card>                
            </div>
            <div class="grid-item small">                
                <Card>   
                    <AboutMe></AboutMe>             
                </Card>                
            </div>
          </div>
    </div>
</template>

<script>
    import Card from './Card.vue';
    import AboutMe from './Cards/AboutMe.vue';

    export default {

        components: {
            AboutMe,
            Card
        }
        
    }
</script>

<style lang="scss" scoped>

    .grid-item {
        min-height: 200px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 1rem;
    }

    @media screen and (min-width: 600px) {
        
        .grid-item {
            &.small {
                width: 40%;
            }
    
            &.large {
                width: 60%
            }
        }
        
    }

</style>