import React, { useEffect, useState } from 'react'
import { CanvasJSChart } from 'canvasjs-react-charts'

const vacData = {
	"antiqua": {
		"total_injections": 6644,
		"used_injections": 1858,
		"injections_left": 4786
	},
	"solarBuddhica": {
		"total_injections": 10056,
		"used_injections": 2805,
		"injections_left": 7251
	},
	"zerpfy": {
		"total_injections": 8315,
		"used_injections": 2337,
		"injections_left": 5978
	}
};

function BarChart() {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Number of injections per producer",
			fontFamily: "didot"
		},
		axisY: {
			title: "Injections",
			includeZero: true
		},
		toolTip: {
			shared: true,
			reversed: true
		},
		legend: {
			verticalAlign: "center",
			horizontalAlign: "right",
			reversed: true,
			cursor: "pointer"
		},
		data: [{
			type: "stackedColumn",
			name: "Used Injections",
			showInLegend: true,
			yValueFormatString: "# ###",
			dataPoints: [
				{ label: "Antiqua", y: 1858 },
				{ label: "SolarBuddhica", y: 2805 },
				{ label: "Zerpfy", y: 2337 }
			]
		},{
			type: "stackedColumn",
			name: "Injections Left",
			showInLegend: true,
			yValueFormatString: "# ###",
			dataPoints: [
				{ label: "Antiqua", y: 4786 },
				{ label: "SolarBuddhica", y: 7251 },
				{ label: "Zerpfy", y: 5978 }
			]
		}]
	};
	return (
	<div>
		<CanvasJSChart options={options} className="BarChart" />
	</div>
	)
}

export default BarChart;