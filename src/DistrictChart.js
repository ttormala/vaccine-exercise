import React, { useEffect, useState } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'

function DistrictChart() {
	const [vacData, setVacData] = useState([]);
	const getData=()=>{
		fetch('district_info.json',
		{
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		}).then(function(response){
			return response.json();
		}).then(function(myJson){
			setVacData(myJson);
		});
	}
	useEffect(() => {
		getData()
	}, [])
	
	const options = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Number of orders per health district",
			fontFamily: "didot"
		},
		axisY: {
			title: "Orders",
			includeZero: true
		},
		data: [{
			type: "column",
			showInLegend: true,
			legendMarkerColor: "black",
			legendText: "District",
			dataPoints: [
				{ y: vacData.HYKS, label: "HYKS" },
				{ y: vacData.KYS, label: "KYS"  },
				{ y: vacData.OYS, label: "OYS"  },
				{ y: vacData.TAYS, label: "TAYS"  },
				{ y: vacData.TYKS, label: "TYKS"  }
			]
		}]
	}
	return (
	<div>
		<CanvasJSChart options={options} className="DistrictChart" />
	</div>
	)
}

export default DistrictChart;