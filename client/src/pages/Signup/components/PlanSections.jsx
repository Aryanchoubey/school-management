"use client"

import { Card } from "@/components/ui/card"

export default function PlanSection({ selectedPlan, setSelectedPlan }) {
  const planDetails = {
    Free: [
      "✔ Up to 50 Students",
      "✔ 1 Teacher Account",
      "✔ Classes & Attendance",
      "✔ Basic Reports",
    ],
    Basic: [
      "✔ Up to 500 Students",
      "✔ 10 Teacher Accounts",
      "✔ Attendance & Timetable",
      "✔ Fee Collection & Invoices",
      "✔ Report Cards",
    ],
    Standard: [
      "✔ Up to 2000 Students",
      "✔ 50 Teacher Accounts",
      "✔ Attendance + Exams",
      "✔ Payment Gateway Integration",
      "✔ Parent Portal & Notifications",
      "✔ Performance Analytics",
    ],
    Premium: [
      "✔ Unlimited Students & Teachers",
      "✔ Multi-Branch Support",
      "✔ All Academic Features",
      "✔ Advanced Fee Management",
      "✔ Mobile App",
      "✔ AI Reports & Insights",
    ],
  }

  const price = {
    Free: "₹0",
    Basic: "₹1999 /mo",
    Standard: "₹3999 /mo",
    Premium: "₹6999 /mo",
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {Object.keys(planDetails).map((plan) => (
        <Card
          key={plan}
          onClick={() =>
            setSelectedPlan((prev) => (prev === plan ? null : plan))
          }
          className={`p-4 flex flex-col items-center text-center rounded-xl border hover:shadow-md cursor-pointer ${
            selectedPlan === plan
              ? "border-yellow-500 bg-yellow-100"
              : "bg-gray-100"
          }`}
        >
          <h3 className="font-semibold text-lg">{plan}</h3>
          <ul className="mt-2 text-sm text-gray-700 space-y-1">
            {planDetails[plan].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-lg">{price[plan]}</p>
        </Card>
      ))}
    </div>
  )
}
