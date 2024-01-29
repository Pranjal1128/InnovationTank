import { useState } from 'react'
import "./UserProfile.css"
import { Data,generateRandomColor } from './utils';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import {Chart,registerables} from 'chart.js'; 

Chart.register(...registerables)
ChartJS.register(ArcElement, Tooltip, Legend);

const UserProfile = () => {

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: generateRandomColor(Data.length),
        hoverOffset: 4
      }
    ]
  });
  return (
      <div className='user-profile'>
      <div className="user-profile-chart-container">
        <div className="doughnut-chart">
        <Doughnut options={{responsive: true}} data={chartData} />
        </div> 
        <div className="bar-chart">
            <Bar options={{maintainAspectRatio : false}} data={chartData} />
        </div>
          </div>
    </div>
  )
}

export default UserProfile