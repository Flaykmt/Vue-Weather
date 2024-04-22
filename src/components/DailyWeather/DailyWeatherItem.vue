<template>
  <div class="daily-weather-item">
    <div class="daily-weather-itemDate">
      <img :src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'" alt="">
      <h2>{{Math.round(weather.temp.day)}}°</h2>
    </div>
    <p class="data-title">{{date.getDate()}} {{ dateMonth[date.getMonth()] }}</p>
    <p class="data-title date">{{ dateWeek[date.getDay()] }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['weather'],
  data() {
    return {
      date: new Date(this.weather.dt * 1000),
    }
  },
  computed: mapGetters(['dateMonth', 'dateWeek'])
}
</script>