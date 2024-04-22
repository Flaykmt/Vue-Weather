<template>
  <div class="details">
    <h2 class="title">Todays Details</h2>
    <div class="details__info">
      <div class="details__info-card">
        <h2 class="data-title">Wind Speed</h2>
        <hr>
        <div class="details__info-card-data">
          <img src="/src/assets/img/wind.svg" alt="">
          <h3>{{weather.wind_speed}}<span class="symbol">km/h</span></h3>
        </div>
      </div>
      <div class="details__info-card">
        <h2 class="data-title">Sunrise & Sunset</h2>
        <hr>
        <div class="details__info-card-data">
          <div class="data">
            <img src="/src/assets/img/surnise.svg" alt="">
            <div class="data-text">
              <p>Surnise</p>
              <h3>{{new Date(weather.sunrise * 1000).getHours()}} : {{new Date(weather.sunrise * 1000).getMinutes()}} PM</h3>
            </div>
          </div>
          <div class="data">
            <img src="/src/assets/img/sunset.svg" alt="">
            <div class="data-text">
              <p>Surnise</p>
              <h3>{{new Date(weather.sunset * 1000).getHours()}} : {{new Date(weather.sunset * 1000).getMinutes()}} PM</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="details__info-card">
        <h2 class="data-title">Humidity</h2>
        <hr>
        <div class="details__info-card-data">
          <img src="/src/assets/img/humidity.svg" alt="">
          <h3>{{weather.humidity}}<span class="symbol">%</span></h3>
        </div>
      </div>
      <div class="details__info-card">
        <h2 class="data-title">Visibility</h2>
        <hr>
        <div class="details__info-card-data">
          <img src="/src/assets/img/eye.svg" alt="">
          <h3>{{weather.visibility}}<span class="symbol">m</span></h3>
        </div>
      </div>
      <div class="details__info-card">
        <h2 class="data-title">Pressure</h2>
        <hr>
        <div class="details__info-card-data">
          <img src="/src/assets/img/pressure.svg" alt="">
          <h3>{{weather.pressure}}<span class="symbol">hPa</span></h3>
        </div>
        
      </div>
      <div class="details__info-card">
        <h2 class="data-title">Feels like</h2>
        <hr>
        <div class="details__info-card-data">
          <img src="/src/assets/img/feels_like.svg" alt="">
          <h3>{{Math.round(weather.feels_like)}}<span class="symbol">°с</span></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['weather'])
  }
}
</script>
