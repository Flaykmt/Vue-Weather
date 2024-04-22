export default {
	state: {
		dateWeek: [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		],
		dateMonth: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
	},
	getters: {
		dateWeek(state) {
			return state.dateWeek
		},
		dateMonth(state) {
			return state.dateMonth
		},
	},
}
