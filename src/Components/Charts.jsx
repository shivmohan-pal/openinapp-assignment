import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
 BarController,
  DoughnutController,
  ArcElement,
    Title,
  Tooltip,
  // Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
   BarController,
  DoughnutController,
  ArcElement,
    Title,
    Tooltip,
    // Legend
  );  

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        id: "x",
        grid: {
          display: false,
        },
      },
      y: {
        id: "y",
        grid: {
          display: true,
          color: "#EAEAEA",
        },
        ticks:{
            stepSize:100
          }
      },
    },
    plugins: {
   
      }
  };
  const doughnutChartOptions = {
    cutout:48,
    spacing: -8,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display:false,
      },
      y: {
        display:false,
      },
    },
    plugins: {
   
      }
  };

const BarChart =({ Data })=>{
    let data = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            id:1,
            label: "Female",
            data: [Data.female.week_1, Data.female.week_2, Data.female.week_3, Data.female.week_4],
            backgroundColor : ["#98D89E"],
            borderRadius: 4
            // borderColor: "rgba(0,0,0,0)",
          },
          {
            id:2,
            label: "Male",
            data: [Data.male.week_1, Data.male.week_2, Data.male.week_3, Data.male.week_4],
            backgroundColor : ["#EE8484"],
            borderRadius: 4
            // borderColor: "rgba(0,0,0,0)",
          },
        ],
        borderWidth: 1,
      };
    return (
        <Bar data={data} options={barChartOptions} /> 
    )
}

const DoughnutChart = ({Data}) => {
    let data = {
        labels: ["Supervisor", "Executive", "Intern"],
        datasets: [
          {
            id:1,
            data: [Data[0], Data[1], Data[2]],
            backgroundColor : ["#9BDD7C","#F6DC7D","#EE8484"],
            borderRadius: 8,
            radius: '100%',
           borderWidth: 0,
          }
        ],
        borderWidth: 0,
      };
    return (
      <Doughnut data = {data} options = {doughnutChartOptions}/>
    )
}

export {
    BarChart, DoughnutChart
};