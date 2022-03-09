import { Col, Row } from 'antd'
import { Map, Table } from './components'

import Splitter, { SplitDirection } from '@devbookhq/splitter'

const App = () => {
	return (
		<div className="App">
			<Row style={{ height: '100vh' }}>
				<Splitter direction={SplitDirection.Horizontal}>
					<Col>
						<Table />
					</Col>
					<Col style={{ height: '100vh' }}>
						<Map />
					</Col>
				</Splitter>
			</Row>
		</div>
	)
}

export default App
