"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  accounts: any;
}

const DoughnutChart = (props: Props) => {
  const { accounts } = props;

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500, 3750],
        backgroundColor: ['#0747b6', "#2265d8", "#2191fa"]
      }
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"]
  }

  return (
    <Doughnut data={data} width={"120%"} height={"120%"} options={{
      plugins: {
        legend: {
          display: false
        }
      }
    }} />
  )
}

export default DoughnutChart