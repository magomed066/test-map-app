import React from 'react'
import { Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentItem } from '../../features/deliverySlice'
import SelectComp from '../select/Select'
import classes from './style.module.css'

const columns = [
	{
		title: 'Неименование',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
		responsive: ['sm'],
	},
	{
		title: 'Откуда',
		dataIndex: 'from',
		key: 'from',
		render: (text) => <SelectComp defaultValue={text} from={true} />,
		responsive: ['sm'],
	},
	{
		title: 'Куда',
		dataIndex: 'to',
		key: 'to',
		render: (text) => <SelectComp inTable={true} defaultValue={text} />,
		responsive: ['sm'],
	},
]

const TableComp = () => {
	const dispatch = useDispatch()
	const { currentItem, items } = useSelector((state) => state.delivery)

	return (
		<Table
			className={classes.table}
			columns={columns}
			dataSource={items}
			onRow={(record) => {
				return {
					onClick: (e) => {
						if (e.target.tagName === 'TD') {
							dispatch(setCurrentItem(record))
						}
					},
				}
			}}
			rowClassName={(record) => {
				return currentItem?.key === record.key ? classes['active'] : ''
			}}
			pagination={false}
		/>
	)
}

export default TableComp
