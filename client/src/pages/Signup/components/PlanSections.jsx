import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

export const PlanSelection = ({ nextStep, prevStep, selectedPlan, setSelectedPlan }) => {
  const plans = [
    { id: 1, name: "Free", price: "₹1,000", features: ["Basic features", "Limited users", "Email support"] },
    { id: 2, name: "Basic", price: "₹2,000", features: ["Standard features", "Up to 50 users", "Phone support"] },
    { id: 3, name: "Standard", price: "₹6,000", features: ["Advanced features", "Up to 200 users", "Priority support"] },
    { id: 4, name: "Premium", price: "₹9,000", features: ["All features", "Unlimited users", "24/7 support"] },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Select the perfect plan for your organization
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPlan === plan.id
                ? "ring-2 ring-amber-400 shadow-lg scale-[1.02]"
                : "hover:scale-[1.01]"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <CardContent className="p-5 sm:p-6">
              <div className="text-center space-y-3">
                <h3 className="font-semibold text-lg sm:text-xl">{plan.name}</h3>
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">
                  {plan.price}
                  <span className="text-xs sm:text-sm text-gray-500 font-normal">/year</span>
                </div>
                <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6">
        <Button
          onClick={prevStep}
          variant="outline"
          className="px-6 sm:px-8 h-10 sm:h-12 w-full sm:w-auto"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!selectedPlan}
          className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 sm:px-8 h-10 sm:h-12 w-full sm:w-auto"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
