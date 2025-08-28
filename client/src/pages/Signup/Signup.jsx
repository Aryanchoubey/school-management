"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function SignupFlow() {
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
          {/* STEP 1 - Personal Info */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email Address" />
              <Input placeholder="Phone Number" />
              <Input placeholder="Password" type="password" />
            </div>
          )}

          {/* STEP 2 - Plans */}
          {step === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["Free", "Basic", "Standard", "Premium"].map((plan) => {
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
                )
              })}
            </div>
          )}

          {/* STEP 3 - Payment Method */}
          {step === 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* LEFT - Choose Method */}
              <div>
                <Label className="mb-2 block">Choose Payment Method</Label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 mt-3 ">
                    <RadioGroupItem value="netbanking" id="netbanking" />
                    <Label htmlFor="netbanking">NetBanking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="upi" id="upi" />
                    <Label htmlFor="upi">UPI</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* RIGHT - Dynamic Form */}
              <div className="grid grid-cols-1 gap-3">
                {paymentMethod === "netbanking" && (
                  <>
                    <Input placeholder="Account Holder Name" />
                    <Input placeholder="Account Number" />
                    <Input placeholder="IFSC Code" />
                    <Input placeholder="CVV" />
                  </>
                )}

                {paymentMethod === "upi" && (
                  <>
                    <Input placeholder="UPI ID (example@okicici)" />
                    <a
                      href="upi://pay?pa=merchant@upi&pn=My%20School&am=1999&cu=INR&tn=Plan%20Payment"
                      className="px-4 py-2 bg-yellow-500 text-white rounded-lg text-center"
                    >
                      GO TO UPI APPS
                    </a>
                  </>
                )}
              </div>
            </div>
          )}

          {/* STEP 4 - Licence */}
          {step === 4 && (
            <div className="flex flex-col items-center gap-4">
              <Input placeholder="Enter OTP Sent To Your Mobile Number  " />
              <Button variant="outline">SUBMIT OTP</Button>
              <p className="text-sm text-gray-500 text-center">
                Check your mail and paste code. Don’t forget to check spam
                folder.
              </p>
            </div>
          )}
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

