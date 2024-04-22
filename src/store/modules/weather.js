import axios from 'axios'

export default ({
  state: {
    weather: {},
    daily: [],
    hourly: [],
    api_key: '295d0a0d0e0fc78e5aaf4965d75d08f5',
    geo: {
      city: '',
      contry: ''
    },
    currentIcon: ''
  },
  actions: {
    async getGeocoding({state, dispatch, commit}, {city}) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.api_key}`)
        const data = response.data[0]
        dispatch('getWeather', {
          lat: data.lat, 
          lon: data.lon,
          city: data.name, 
          country: data.country})
        commit('geo', {
          city: data.name,
          country: data.country
        })
      } catch (error) {
        console.error('Oops...', error);
      }
    },
    async getWeather({commit, state}, {lat, lon}) {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${state.api_key}`)
        const current = response.data.current
        const daily = response.data.daily
        const hourly = response.data.hourly
        hourly.splice(10, hourly.length - 10)
        commit('weather', current)
        commit('daily', daily)
        commit('icon', current.weather[0].icon)
        commit('hourly', hourly)
      } catch (error) {
        console.error('Oops... Technical chocolates: ', error);
      }
    }
  },
  mutations: {
    weather(state, weather) {
      return state.weather = weather
    },
    daily(state, foreacst) {
      return state.daily = foreacst
    },
    geo(state, geo) {
      return state.geo = geo
    },
    icon(state, icon) {
      return state.currentIcon = icon
    },
    hourly(state, hourly) {
      return state.hourly = hourly
    }
  },
  getters: {
    weather(state) {
      return state.weather
    },
    daily(state) {
      return state.daily
    },
    geo(state) {
      return state.geo
    },
    icon(state) {
      return state.currentIcon
    },
    hourly(state) {
      return state.hourly
    }
  }
})


