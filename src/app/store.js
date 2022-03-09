import { configureStore } from '@reduxjs/toolkit'
import deliveryReducer from '../features/deliverySlice'
import citiesReducer from '../features/citiesSlice'

export const store = configureStore({
	reducer: {
		delivery: deliveryReducer,
		cities: citiesReducer,
	},
})
