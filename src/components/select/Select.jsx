import React, { useEffect, useState } from 'react'

import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { updateDelivery } from '../../features/deliverySlice'

const { Option } = Select

const SelectComp = ({ items = [], defaultValue = 'Default', from = false }) => {
	const [list, setList] = useState(items)

	const { cities } = useSelector((state) => state.cities)
	const dispatch = useDispatch()

	useEffect(() => {
		setList(cities)
	}, [])

	const handleChange = (e) => {
		const item = JSON.parse(e)

		if (from) {
			item.type = 'fromAddress'
			dispatch(updateDelivery(item))
		} else {
			item.type = 'toAddress'
			dispatch(updateDelivery(item))
		}
	}

	return (
		<Select
			defaultValue={defaultValue}
			style={{ width: 120 }}
			onChange={handleChange}
		>
			{list.map((item) => (
				<Option key={item.id} value={JSON.stringify(item)}>
					{item.name}
				</Option>
			))}
		</Select>
	)
}

export default SelectComp
