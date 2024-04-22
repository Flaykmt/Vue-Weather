<template>
  <section class="now-weather">
    <h2 class="title">Now</h2>
    <div class="now-weather-temp">
      <h3>{{Math.round(weather.temp)}}°с</h3>
      <img :src="'https://openweathermap.org/img/wn/' + icon + '@2x.png'" alt="">
    </div>
    <!-- <p>{{weather.descr}}</p> FIX -->
    <hr>
    <div class="now-weather-data">
      <div class="now-weather-data-date">
        <img src="/src/assets/img/calendar.svg" alt="">
        <p class="data-title">
          {{dateWeek[new Date(weather.dt * 1000).getDay()]}} 
          {{new Date(weather.dt * 1000).getDate()}}, 
          {{dateMonth[new Date(weather.dt * 1000).getMonth()]}}
        </p>
      </div>
      <div class="now-weather-data-geo">
        <img src="/src/assets/img/geo.svg" alt="">
        <p class="data-title">{{geo.city}}, {{geo.country}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['weather', 'dateWeek', 'dateMonth', 'geo', 'icon']),
  }
</script>
