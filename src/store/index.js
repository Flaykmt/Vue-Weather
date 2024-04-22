import { createStore } from 'vuex'
import weather from './modules/weather'
import date from './modules/date'

export default createStore({
  modules: {
    weather, date
  }
})
