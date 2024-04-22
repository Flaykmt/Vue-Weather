<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <!-- <img :src="'https://openweathermap.org/img/wn/' + + '@2x.png'" alt="" /> FIX -->
      <p>Vue weather</p>
    </div>
    <input class="input" placeholder="Search..." v-model="searchCity" @keyup.enter="searchWeather" />
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['weather']),
  data() {
    return {
      searchCity: '',
    }
  },
  methods: {
    ...mapActions(['getGeocoding']),
    searchWeather() {
      this.getGeocoding({city: this.searchCity})
      this.searchCity = ''
    }
  }
};
</script>