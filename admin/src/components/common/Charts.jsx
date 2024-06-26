import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
);

const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const BarChart = ({
	horizontal = false,
	data_1 = [],
	data_2 = [],
	title_1,
	title_2,
	bgColor_1,
	bgColor_2,
	labels = months,
}) => {
	const options = {
		responsive: true,
		indexAxis: horizontal ? "y" : "x",

		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
				text: "Revenue and Transaction",
			},
		},

		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
			x: {
				beginAtZero: true,
				grid: {
					display: false,
				},
			},
		},
	};

	const data = {
		labels,
		datasets: [
			{
				label: title_1,
				data: data_1,
				backgroundColor: bgColor_1,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage: 0.4,
			},
			{
				label: title_2,
				data: data_2,
				backgroundColor: bgColor_2,
				barThickness: "flex",
				barPercentage: 1,
				categoryPercentage: 0.4,
			},
		],
	};
	return <Bar options={options} data={data} className="w-full h-full" />;
};

export const DoughnutChart = ({
	labels,
	data,
	backgroundColor,
	cutout,
	legends = true,
	offset,
}) => {
	const doughnutData = {
		labels,
		datasets: [
			{
				data,
				backgroundColor,
				borderWidth: 0,
				offset,
				cutout,
			},
		],
	};

	const doughnutOptions = {
		responsive: true,
		plugins: {
			legend: {
				display: legends,
				position: "bottom",
				labels: {
					padding: 40,
				},
			},
		},
	};

	return <Doughnut data={doughnutData} options={doughnutOptions} className="w-full h-full" />;
};
