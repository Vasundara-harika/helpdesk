// ✅ src/pages/operations/OperationsDashboard.jsx
import { motion } from "framer-motion";

export default function OperationsDashboard() {
  const cards = ["Pending Approvals", "Resolved Tickets", "Performance Score"];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-[#55D6C2]">
        Operations Team Dashboard
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((title, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[#55D6C2] mb-2">
              {title}
            </h3>
            <p className="text-gray-600">Sample data or summary here.</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <img
          src="https://blog.happyfox.com/wp-content/uploads/2021/05/Support_operations_banner.png"
          alt="Operations Banner"
          className="w-full rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
