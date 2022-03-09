import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [
		{
			key: '1',
			from: 'Москва',
			name: 'Доставка машины',
			to: 'Питер',
			fromAddress: [55.7504461, 37.6174943],
			toAddress: [59.938732, 30.316229],
			fromAddressInfo: 'Место ',
		},
		{
			key: '2',
			name: ' Доставка дверей',
			from: 'Армавир',
			to: 'Астрахань',
			fromAddress: [44.99, 41.12],
			toAddress: [46.35, 48.04],
		},
		{
			key: '3',
			name: ' Доставка телефонов',
			from: 'Белогорск',
			to: 'Братск',
			fromAddress: [50.92, 128.48],
			toAddress: [56.13, 101.61],
		},
		{
			key: '4',
			name: ' Доставка окон',
			from: 'Великий новгород',
			to: 'Волгоград',
			fromAddress: [58.52, 31.27],
			toAddress: [48.72, 44.5],
		},
	],
	currentItem: null,
}

const deliverySlice = createSlice({
	name: 'delivery',
	initialState,
	reducers: {
		setCurrentItem(state, action) {
			state.currentItem = action.payload
		},
		clear(state) {
			state.currentItem = null
		},

		updateDelivery(state, action) {
			state.currentItem = {
				...state.currentItem,
				[action.payload.type]: [action.payload.lon, action.payload.lng],
			}
		},
	},
})

export const { setCurrentItem, updateDelivery } = deliverySlice.actions

export default deliverySlice.reducer
