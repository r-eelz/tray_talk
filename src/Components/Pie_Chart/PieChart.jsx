import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Colors,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  ArcElement,
  Colors,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

export const PieGraph = (data) => {
    const options = {};

    return <Pie options={options} data={data.data}/>;
}
