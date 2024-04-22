<template>
  <div class="hourly-weather-item">
    <h2>{{new Date(weather.dt * 1000).getHours()}} PM</h2>
    <img :src="'https://openweathermap.org/img/wn/' + weather.weather[0].icon + '@2x.png'" alt="">
    <div class="hourly-weather-item-data">
      <p>
        <img src="/src/assets/img/wind-deg.svg" :style="{transform: 'rotate(' + weather.wind_deg + 'deg)'}" alt="">
        {{weather.wind_speed}}km/h
      </p>
      <p>{{Math.round(weather.temp)}}°с</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['weather']
  }
</script>
