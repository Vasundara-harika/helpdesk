import CountUp from "react-countup";

const adminStats = [
  { label: "Total Users", value: 220 },
  { label: "Team Members", value: 25 },
  { label: "System Logs", value: 312 },
  { label: "Pending Approvals", value: 9 },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)] px-4 py-8">
      <h2 className="text-3xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#55D6C2] to-[#369d8f]">
        Admin Control Panel
      </h2>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {adminStats.map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 border-t-4 border-[#55D6C2]"
          >
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <h2 className="text-4xl font-bold text-[#55D6C2] mt-2">
              <CountUp end={stat.value} duration={1.5} />
            </h2>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/admin-control-panel-4468591-3783964.png?f=webp"
          alt="Admin Illustration"
          className="max-w-[500px] w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
