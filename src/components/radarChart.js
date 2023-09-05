import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

const RadarChart = ({ protein, carb, fat, sugar, fibre }) => {
  const theme = useContext(ThemeContext)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    layout: {
      padding: 0,
      margin: 0,
    },
    scales: {
      r: {
        angleLines: {
          display: true,
          color:
            theme.name === "dark"
              ? "rgba(107, 163, 4, 0.2)"
              : "rgba(245, 190, 64, 0.3)",
        },
        beginAtZero: true,
        min: 0,
        max: 5,
        ticks: {
          display: false,
          stepSize: 1,
        },
        grid: {
          color:
            theme.name === "dark"
              ? "rgba(107, 163, 4, 0.2)"
              : "rgba(245, 190, 64, 0.3)",
        },
        pointLabels: {
          color:
            theme.name === "dark"
              ? "rgba(107, 163, 4, 0.6)"
              : "rgba(245, 190, 64, 0.9)",
        },
      },
    },
  }
  const data = {
    labels: ["蛋白质", "碳水", "脂肪", "糖", "纤维素"],
    datasets: [
      {
        label: "含量",
        data: [protein, carb, fat, sugar, fibre],
        backgroundColor:
          theme.name === "dark"
            ? "rgba(107, 163, 4, 0.2)"
            : "rgba(245, 190, 64, 0.2)",
        borderColor:
          theme.name === "dark"
            ? "rgba(107, 163, 4, 1)"
            : "rgba(245, 190, 64, 1)",
        borderWidth: 2.5,
        pointRadius: 2,
      },
    ],
  }

  return (
    <div>
      <Radar data={data} options={options} />
    </div>
  )
}

export default RadarChart
