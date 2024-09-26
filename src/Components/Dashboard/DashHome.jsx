import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Menu from './Menu';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const DashHome = () => {
  // Sample line chart data
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Transaction Volume ($)',
        data: [12000, 19000, 3000, 5000, 2000, 30000, 45000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Options for line chart
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Transaction Volume Over Time',
      },
    },
  };

  // Sample pie chart data
  const pieChartData = {
    labels: ['Ethereum', 'BSC', 'Polygon'],
    datasets: [
      {
        label: 'Protocols',
        data: [45, 30, 20], // Sample data for protocols
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-700 mb-6">Dashboard Home</h2>

      {/* Grid layout for stats, chart, and pie chart */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left side: Stats */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Overview</h3>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">TVL 2022</p>
              <p className="text-4xl font-bold text-green-600">$43.35B</p>
              <p className="text-sm text-gray-400">+13%</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">Change (24H)</p>
              <p className="text-4xl font-bold text-red-600">-4.31%</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold text-gray-800">Maker Dominance</p>
              <p className="text-4xl font-bold text-yellow-600">15.62%</p>
            </div>
          </div>



            <div>
               <Menu/>
            </div>

         
        </div>

        {/* Right side: Pie chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Protocols</h3>
          <Pie data={pieChartData} />
        </div>
      </div>

      {/* Line chart section */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Transaction Volume Chart</h3>
        <Line data={lineChartData} options={lineChartOptions} />
      </div>
    </div>
  );
};

export default DashHome;


