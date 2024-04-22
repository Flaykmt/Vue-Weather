<template>
  <section class="daily-weather">
    <h2 class="title">7 Days Forecast</h2>
    <div class="daily-weather-window">
      <DailyWeatherItem v-for="(weather, idx) in daily" :key="idx" :weather="weather" />
    </div>
  </section>
</template>

<script>
  import DailyWeatherItem from './DailyWeatherItem.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      DailyWeatherItem
    },
    computed: mapGetters(['daily'])
  }
</script>
