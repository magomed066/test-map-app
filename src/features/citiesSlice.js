import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cities: [
		{ id: 1, name: 'Москва', lon: 55.7504461, lng: 37.6174943 },
		{ id: 2, name: 'Питер', lon: 59.938732, lng: 30.316229 },
		{ id: 3, name: 'Воронеж', lon: 51.67, lng: 39.18 },
		{ id: 4, name: 'Геленджик', lon: 44.56, lng: 38.08 },
		{ id: 5, name: 'Донецк', lon: 48.34, lng: 39.96 },
		{ id: 6, name: 'Железногорск', lon: 56.25, lng: 93.53 },
		{ id: 7, name: 'Иркутск', lon: 52.3, lng: 104.3 },
		{ id: 8, name: 'Казань', lon: 55.79, lng: 49.12 },
		{ id: 9, name: 'Нижний Новгород', lon: 56.33, lng: 44 },
		{ id: 10, name: 'Ростов-на-Дону', lon: 47.23, lng: 39.72 },
	],
}

const citiesSlice = createSlice({
	name: 'cities',
	initialState,
	reducers: {
		clear(state) {
			state.items = null
		},
	},
})

export const { clear } = citiesSlice.actions

export default citiesSlice.reducer
