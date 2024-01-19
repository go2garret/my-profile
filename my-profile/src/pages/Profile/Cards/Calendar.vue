<template>
    <div class="p-2 w-full text-gray-800 bg-white h-full flex flex-col">

        <div class="mb-1 mx-1 ">
            
            <div v-if="loading"
            class="text-sm bg-green-300 text-green-800 px-2 rounded-lg inline-block">
                Getting data...
            </div>

            <div v-else 
            class="text-lg text-left bg-white  text-gray-700 inline-block px-2 border-b border-gray-400 pb-1 w-full">
            
                <span class="text-gray-500">Showing Airtimes for </span>
                <b class="">Survivor</b>
            </div>

        </div>

        <FullCalendar class="pb-6 flex-grow fc fc-dark fc-direction-ltr fc-media-screen fc-theme-standard m-1 p-3 rounded-2xl"        
        ref="fullCalendar"
        :height="'auto'"
        :contentHeight="'auto'"
        :options="calendarOptions">
        </FullCalendar>


        <div class="text-gray-400 pb-24">
            Data provided by <a href='https://api.tvmaze.com' target="_blank">api.tvmaze.com</a>
        </div>

    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
    data() {
        return {
            calendarOptions: {
                plugins: [dayGridPlugin],
                initialView: 'dayGridMonth',
                weekends: false,
                initialDate: '2023-11-01',
                events: [],
                headerToolbar: {
                    start: 'title',
                    center: '',
                    end: 'prev,next'
                }
            },
            url: 'https://api.tvmaze.com/singlesearch/shows?q=survivor&embed=episodes',
            loading: false
        }
    },

    components: {
        FullCalendar
    },

    mounted() {
        const currentApiResults = localStorage.getItem('movieApiResults');
        if (currentApiResults) {            
            this.displayData(JSON.parse(currentApiResults));
        } else {
            this.getData();
        }       
    },

    methods: {
        async getData() {
            this.loading = true;
            axios.get(this.url)
                .then(async (response) => {
                    // parse response
                    const episodes = response.data._embedded.episodes;
                    // save in localstorage
                    localStorage.setItem('movieApiResults', JSON.stringify(episodes));
                    // display episodes
                    this.displayData(episodes);
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        parseEvent(row) {
            const event = {
                title: row.name,
                start: row.airdate + 'T00:00:00',
                end: row.airdate + 'T02:00:00',
            };
            return event;
        },

        displayData(data) {
            const events = [];
            data.forEach(row => {
                const event = this.parseEvent(row);
                this.calendarOptions.events.push(event);
            });
            //this.calendarOptions.events = events;
        }
    },

}

</script>

<style lang="scss" scoped>
</style>