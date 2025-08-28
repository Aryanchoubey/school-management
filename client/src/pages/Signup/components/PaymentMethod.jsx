import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PaymentMethod = ({ nextStep, prevStep, paymentMethod, setPaymentMethod }) => {
  const paymentOptions = [
    { id: "gpay", label: "Google Pay" },
    { id: "paytm", label: "Paytm" },
    { id: "visa", label: "VISA Card" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          Choose Payment Method
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Select your preferred payment option
        </p>
      </div>

      <Card className="p-4 sm:p-6">
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-3 sm:space-y-4"
        >
          {paymentOptions.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label
                htmlFor={option.id}
                className="flex items-center space-x-2 cursor-pointer flex-1 text-sm sm:text-base"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>

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
          disabled={!paymentMethod}
          className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 sm:px-8 h-10 sm:h-12 w-full sm:w-auto"
        >
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;


