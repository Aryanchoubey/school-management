"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

// Import step components
import Accountinfo from "./components/AccountInfo"
import Plans from "./components/PlanSections"
import Payment from "./components/PaymentMethod"
import Otp from "./components/Otp"

export default function Signup() {
  const [step, setStep] = useState(1)
  const [success, setSuccess] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState("upi")

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))
  const handleDone = () => setSuccess(true)

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
        <Card className="w-full max-w-md text-center p-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            🎉 Successfully Registered!
          </h2>
          <p className="text-gray-600">Thank you for signing up.</p>
          <p className="mt-2 text-sm text-gray-500">
            Selected Plan: <b>{selectedPlan || "None"}</b> <br />
            Payment Method: <b>{paymentMethod}</b>
          </p>
          <Link to="/login">
            <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600">
              Go to Login
            </Button>
          </Link>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 p-4">
      <Card className="w-full max-w-4xl shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Setup your Account
          </CardTitle>

          {/* Steps Progress */}
          <div className="flex justify-center gap-6 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-sm font-medium ${
                  step === i ? "text-yellow-500" : "text-gray-500"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    step === i
                      ? "bg-yellow-500 border-yellow-500 text-white"
                      : "border-gray-400"
                  }`}
                >
                  {i}
                </div>
              </div>
            ))}
          </div>
        </CardHeader>

        <CardContent className="p-6">
          {step === 1 && <Accountinfo />}
          {step === 2 && (
            <Plans
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
          )}
          {step === 3 && (
            <Payment
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          )}
          {step === 4 && <Otp />}
        </CardContent>

        {/* Navigation */}
        <div className="flex justify-between items-center p-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={step === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} /> Back
          </Button>

          {step < 4 ? (
            <Button
              onClick={() => {
                if (step === 2 && !selectedPlan) {
                  alert("⚠ Please select a plan before proceeding")
                  return
                }
                if (step === 3 && !paymentMethod) {
                  alert("⚠ Please select a payment method before proceeding")
                  return
                }
                nextStep()
              }}
              className="flex items-center gap-2"
            >
              Next <ArrowRight size={16} />
            </Button>
          ) : (
            <Button
              onClick={handleDone}
              className="bg-yellow-500 hover:bg-yellow-600"
            >
              Done
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}

