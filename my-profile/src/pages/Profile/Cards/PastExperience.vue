<template>
    <div class="pb-20 flex flex-col self-stretch h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-800 to-gray-900">
        <div class="py-3 m-3 rounded-3xl text-gray-100">
            <div class="mb-3">Places I have Worked</div>
            <IconTray :items="items">

            </IconTray>
        </div>


        <div class="py-3 m-3 rounded-3xl text-gray-100">
            <div class="mb-1">My Skills Include</div>
            <div class="flex flex-wrap items-center justify-center">                
                <div class="skill">
                    JavaScript
                    <font-awesome-icon icon="fa-brands fa-js" class="icon" size="2xl" title="JS" />
                </div>                
                <div class="skill">
                    <div>SQL</div>
                    <font-awesome-icon icon="fa fa-database" class="icon" size="2xl" title="SQL" />
                </div>
                <div class="skill">
                    <div>PHP</div>
                    <font-awesome-icon icon="fa-brands fa-php" class="icon" size="2xl" title="PHP" />
                </div>
                <div class="skill">
                    C#
                    <font-awesome-icon icon="fa fa-code" class="icon" size="2xl" title="GIS" />
                </div>
                <div class="skill">
                    <div>Vue.js</div>
                    <font-awesome-icon icon="fa-brands fa-vuejs" class="icon" size="2xl" title="Vue JS" />
                </div>
                <div class="skill">
                    <div>Laravel</div>
                    <font-awesome-icon icon="fa-brands fa-laravel" class="icon" size="2xl" title="Laravel" />
                </div>
                <div class="skill">
                    <div>Git</div>
                    <font-awesome-icon icon="fa fa-code-branch" class="icon" size="2xl" title="Git" />
                </div>
                <div class="skill">
                    <div>CSS</div>
                    <font-awesome-icon icon="fa-brands fa-css3-alt" class="icon" size="2xl" title="CSS" />
                </div>
                <div class="skill">
                    <div>npm</div>
                    <font-awesome-icon icon="fa-brands fa-npm" class="icon" size="2xl" title="npm" />
                </div>
                <div class="skill">
                    <div>GIS</div>
                    <font-awesome-icon icon="fa fa-earth-americas" class="icon" size="2xl" title="GIS" />
                </div>
                <div class="skill">
                    MySQL
                </div>
                <div class="skill">
                    PostgreSQL
                </div>
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
.icon {
    margin-right: 15px;
}

.skill {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    text-align: center;

    svg {
        margin: 0;
        padding: 0;
    }
}
</style>