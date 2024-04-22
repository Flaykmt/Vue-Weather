<template>
  <header>
    <Navbar />
  </header>
  <main class="main" v-if="'temp' in weather">
    <div class="main-left">
      <NowWeather />
      <DailyWeather />
    </div>
    <div class="main-right">
      <TodaysDetails />
      <HourlyWeather />
    </div>
  </main>
  <p class="not-city" v-else>Вы не ввели город</p>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import NowWeather from "./components/NowWeather/NowWeather.vue";
import DailyWeather from "./components/DailyWeather/DailyWeather.vue";
import TodaysDetails from "./components/TodaysDetails/TodaysDeatils.vue";
import HourlyWeather from "./components/HourlyWeather/HourlyWeather.vue";
import { mapGetters } from 'vuex';
export default {
  components: { Navbar, NowWeather, DailyWeather, TodaysDetails, HourlyWeather },
  computed: mapGetters(['weather'])
};
</script>
