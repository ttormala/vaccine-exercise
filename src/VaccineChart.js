import React, { useEffect, useState } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'

function VaccineChart() {
	const [vacData, setVacData] = useState([]);
	const getData=()=>{
		fetch('daily_info.json',
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
	
	vacData.sort(function(a, b){
		return a.date - b.date
	})
	var dataPointOrders = []
	var dataPointVaccines = []
	
	for(var i=0;i<vacData.length;i++){
		dataPointOrders.push({y: vacData[i].info.orders, label: vacData[i].date})
		dataPointVaccines.push({y: vacData[i].info.vaccinations, label: vacData[i].date})
	}
	
	const options = {
		animationEnabled: true,
		title: {
			text: "Number of orders and vaccines used",
			fontFamily: "didot"
		},
		axisY: {
			title: "Number of vaccines"
		},
		axisX: {
			title: "Date"
		},
		toolTip: {
			shared: true
		},
		data: [{
			type: "spline",
			name: "Vaccine orders",
			showInLegend: true,
			dataPoints: dataPointOrders
		},{
			type: "spline",
			name: "Vaccines used",
			showInLegend: true,
			dataPoints: dataPointVaccines
		}]
	}
	return (
	<div>
		<CanvasJSChart options = {options} className="VaccineChart" />
	</div>
	)
}

export default VaccineChart;