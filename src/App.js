import React, { useState } from 'react'
import VaccineChart from './VaccineChart'
import BarChart from './BarChart'
import DistrictChart from './DistrictChart'

function App() {
	return (
		<div className="App">
			<VaccineChart />
			<BarChart />
			<DistrictChart />
		</div>
	);
}

export default App;
