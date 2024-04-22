<template>
  <section class="hourly-weather">
    <h2 class="title">Today at</h2>
    <div class="hourly-weather-card">
      <HourlyWeatherItem v-for="(weather, idx) in hourly" :key="idx" :weather="weather" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
  import HourlyWeatherItem from './HourlyWeatherItem.vue'

  export default {
    components: {
      HourlyWeatherItem
    },
    computed: mapGetters(['hourly'])
  }
</script>
