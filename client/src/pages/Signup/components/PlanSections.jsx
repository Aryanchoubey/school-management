import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";



export const PlanSelection = ({ nextStep, prevStep, selectedPlan, setSelectedPlan }) => {
  const plans = [
    { 
      id: 1, 
      name: "Free", 
      price: "₹1,000", 
      features: ["Basic features", "Limited users", "Email support"],
      popular: false 
    },
    { 
      id: 2, 
      name: "Basic", 
      price: "₹2,000", 
      features: ["Standard features", "Up to 50 users", "Phone support"],
      popular: false 
    },
    { 
      id: 3, 
      name: "Standard", 
      price: "₹6,000", 
      features: ["Advanced features", "Up to 200 users", "Priority support"],
      popular: true 
    },
    { 
      id: 4, 
      name: "Premium", 
      price: "₹9,000", 
      features: ["All features", "Unlimited users", "24/7 support"],
      popular: false 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Choose Your Plan
        </h2>
        <p className="text-gray-600">
          Select the perfect plan for your organization
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedPlan === plan.id 
                ? "ring-2 ring-amber-400 shadow-lg scale-105" 
                : "hover:scale-102"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black">
                Most Popular
              </Badge>
            )}
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-amber-600 mb-4">
                  {plan.price}
                  <span className="text-sm text-gray-500 font-normal">/year</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <Button
          onClick={prevStep}
          variant="outline"
          className="px-8 h-12"
          size="lg"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!selectedPlan}
          className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 h-12"
          size="lg"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};