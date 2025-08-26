import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { AccountInfo } from './components/AccountInfo';
import { PlanSelection } from './components/PlanSections';

const SignUp = () => {
  const [step, setStep] = useState(1); // 1=Info, 2=Plan, 3=Payment, 4=Confirm
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  const nextStep = () => setStep((prev) => (prev < 4 ? prev + 1 : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const steps = [
    { id: 1, label: "Information", icon: "1" },
    { id: 2, label: "Plans", icon: "2" },
    { id: 3, label: "Payment", icon: "3" },
    { id: 4, label: "Finish", icon: "✓" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl mx-auto shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[700px]">

          {/* Left Side Image */}
          <div className="lg:w-2/5 hidden lg:block relative">
            <img
              className="w-full h-full object-cover"
              src="https://imgs.search.brave.com/tN6wno47SQgjxHPhOQ4A4J3OL0hjyrKdov5q7s4L9FA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wMS8wNC80Mi9t/YW4tNzYyODMwNV82/NDAuanBn"
              alt="Signup Illustration"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right Side Form */}
          <CardContent className="lg:w-3/5 flex flex-col p-6 lg:p-12">

            {/* Progress Tracker */}
            <div className="flex justify-center items-center gap-2 lg:gap-8 mb-8 lg:mb-12">
              {steps.map((stepItem, index) => (
                <div key={stepItem.id} className="flex items-center">
                  {/* Circle + Label */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`h-10 w-10 lg:h-12 lg:w-12 flex items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 ${step === stepItem.id
                          ? "bg-amber-400 text-white border-amber-400 scale-110"
                          : step > stepItem.id
                            ? "bg-green-500 text-white border-green-500"
                            : "border-gray-300 text-gray-400"
                        }`}
                    >
                      {step > stepItem.id ? <CheckCircle2 className="h-5 w-5" /> : stepItem.icon}
                    </div>
                    <Label className="text-xs lg:text-sm mt-2 text-center font-medium">
                      {stepItem.label}
                    </Label>
                  </div>

                  {/* Connector */}
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-8 lg:w-16 mx-2 transition-all duration-300 ${step > stepItem.id ? "bg-green-500" : "bg-gray-300"
                        }`}
                    />
                  )}
                </div>
              ))}
            </div>


            {/* Step Content Container */}
            <div className="flex-1 flex justify-center items-center">
              <div className="w-full max-w-2xl">
                {step === 1 && (
                  <AccountInfo nextStep={nextStep} />
                )}
                {step === 2 && (
                  <PlanSelection
                    nextStep={nextStep}
                    prevStep={prevStep}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                  />
                )}
                {step === 3 && (
                  <PaymentMethod
                    nextStep={nextStep}
                    prevStep={prevStep}
                    paymentMethod={paymentMethod}
                    setPaymentMethod={setPaymentMethod}
                  />
                )}
                {step === 4 && (
                  <Confirmation prevStep={prevStep} />
                )}
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

// ---------------- Step 3 ----------------
const PaymentMethod = ({ nextStep, prevStep, paymentMethod, setPaymentMethod }) => {
  const paymentOptions = [
    { id: "gpay", label: "Google Pay", icon: "🟢" },
    { id: "paytm", label: "Paytm", icon: "🔵" },
    { id: "visa", label: "VISA Card", icon: "💳" },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Choose Payment Method
        </h2>
        <p className="text-gray-600">
          Select your preferred payment option
        </p>
      </div>

      <Card className="p-6">
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="space-y-4"
        >
          {paymentOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label
                htmlFor={option.id}
                className="flex items-center space-x-3 cursor-pointer flex-1"
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="font-medium">{option.label}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>

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
          disabled={!paymentMethod}
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

// ---------------- Step 4 ----------------
const Confirmation = ({ prevStep }) => {
  return (
    <div className="space-y-6 text-center">
      <div className="mb-8">
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Confirm Your Details
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Please review your account details and payment information before completing your registration.
        </p>
      </div>

      <Card className="p-6 text-left max-w-md mx-auto">
        <h3 className="font-semibold mb-4">Registration Summary</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p><span className="font-medium">Organization:</span> Sample School</p>
          <p><span className="font-medium">Plan:</span> Standard Plan</p>
          <p><span className="font-medium">Amount:</span> ₹6,000/year</p>
          <p><span className="font-medium">Payment:</span> Google Pay</p>
        </div>
      </Card>

      <div className="flex justify-center gap-4 pt-6">
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
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 h-12"
          size="lg"
        >
          Complete Registration
          <CheckCircle2 className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default SignUp;