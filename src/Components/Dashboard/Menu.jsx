
import { Line } from "react-chartjs-2";

const Menu = () => {
  // Sample data
  const data = {
    labels: ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"],
    datasets: [
      {
        label: "Users Visit",
        data: [200, 800, 1500, 2900, 2200, 1200],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 3000,
        ticks: {
          stepSize: 1000,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-lg font-semibold">Users Visit</h3>
          <p className="text-3xl font-bold">57.7k</p>
          <p className="text-green-500 font-semibold">+13.5% VS Last Week</p>
        </div>
        <div className="flex space-x-2">
          <button className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded">Day</button>
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Week</button>
          <button className="text-sm bg-gray-200 px-3 py-1 rounded">Month</button>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Menu;
