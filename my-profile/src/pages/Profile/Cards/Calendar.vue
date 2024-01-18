<template>
    <div class="p-2">
        <FullCalendar 
        :options="calendarOptions"
        :events="events"
        />
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
                initialDate: '2008-02-01',
                events: [
                ],
            },
            events: [],
            url: 'https://api.tvmaze.com/singlesearch/shows?q=survivor&embed=episodes', 
        }
    },

    components: {
        FullCalendar
    },

    mounted() {
        console.log("Getting data")
        this.getData().then((data) => {
            console.log("Hey", data);
            this.loadData(data);
        });
    },

    methods: {
        async getData() {
            let response = await fetch(this.url);
            let data = await response.text();

            data = data.json();
            return data;
        },

        loadData(data) {
            console.log("load", data)
            data.forEach(r => r['start'] = r.airdate);
            this.events = data;
        }
    },  

}

</script>

<style lang="scss" scoped>

</style>