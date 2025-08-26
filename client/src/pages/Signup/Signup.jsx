
import { useState } from "react"
import { Card } from "@/components/ui/card"

const SignUp = () => {
  const [step, setStep] = useState(1) // 1=Info, 2=Plan, 3=Payment, 4=Confirm

  const nextStep = () => setStep((prev) => (prev < 4 ? prev + 1 : prev))
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev))

  return (
    <div className="flex bg-gray-100 lg:h-screen sm:h-fit w-auto justify-center lg:pt-10 p-4">
      <div className="flex flex-col lg:flex-row h-[600px] w-full lg:w-[80%] border-2 rounded-2xl bg-white shadow-lg overflow-hidden">
        
        {/* Left Side Image */}
        <div className="hidden lg:flex w-[40%]">
          <img
            className="h-full w-full object-cover rounded-l-2xl"
            src="https://imgs.search.brave.com/tN6wno47SQgjxHPhOQ4A4J3OL0hjyrKdov5q7s4L9FA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wMS8wNC80Mi9t/YW4tNzYyODMwNV82/NDAuanBn"
            alt="Signup Illustration"
          />
        </div>

        {/* Right Side Form */}
        <div className="flex-1 flex flex-col p-6 lg:p-10">

          {/* Progress Tracker */}
          <div className="flex justify-center gap-8 mb-8">
            {["Information", "Plans", "Payment", "Finish"].map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 flex items-center justify-center rounded-full border-2 
                    ${step === index + 1 ? "bg-amber-400 text-white border-amber-400" : "border-gray-400"}`}
                >
                  {index + 1}
                </div>
                <p className="text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>

          {/* Equal size container for all steps */}
          <div className="flex-1 min-h-[400px] flex justify-center items-center">
            {step === 1 && <AccountInfo nextStep={nextStep} />}
            {step === 2 && <PlanSelection nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <PaymentMethod nextStep={nextStep} prevStep={prevStep} />}
            {step === 4 && <Confirmation prevStep={prevStep} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp

// ---------------- Step 1 ----------------
const AccountInfo = ({ nextStep }) => {
  return (
    <div className="w-full flex flex-col items-center max-w-md">
      <h2 className="text-2xl font-bold mb-6">Setup your Account</h2>

      <input className="border p-2 mb-4 w-full rounded-md" placeholder="Enter Email Address or Mobile Number" />
      <input className="border p-2 mb-4 w-full rounded-md" placeholder="Enter Your Organisation Name" />
      <input className="border p-2 mb-6 w-full rounded-md" placeholder="Enter Your School Name" />

      <button
        onClick={nextStep}
        className="bg-amber-400 rounded-lg p-2 w-32 mt-4 hover:bg-amber-500"
      >
        Next →
      </button>
    </div>
  )
}

// ---------------- Step 2 ----------------
const PlanSelection = ({ nextStep, prevStep }) => {
  const plans = [
    { name: "Free", price: "₹1000" },
    { name: "Basic", price: "₹2000" },
    { name: "Standard", price: "₹6000" },
    { name: "Premium", price: "₹9000" },
  ]

  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {plans.map((p, i) => (
          <Card
            key={i}
            className="p-6 cursor-pointer hover:shadow-lg border rounded-lg flex flex-col justify-between h-40"
          >
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600">{p.price}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="bg-gray-300 rounded-lg p-2 w-24 hover:bg-gray-400">← Back</button>
        <button onClick={nextStep} className="bg-amber-400 rounded-lg p-2 w-24 hover:bg-amber-500">Next →</button>
      </div>
    </div>
  )
}

// ---------------- Step 3 ----------------
const PaymentMethod = ({ nextStep, prevStep }) => {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Payment Method</h2>
      <div className="flex flex-col gap-4 items-start">
        <label className="flex items-center gap-2"><input type="radio" name="pay" /> GPay</label>
        <label className="flex items-center gap-2"><input type="radio" name="pay" /> Paytm</label>
        <label className="flex items-center gap-2"><input type="radio" name="pay" /> VISA</label>
      </div>

      <div className="flex justify-between mt-8">
        <button onClick={prevStep} className="bg-gray-300 rounded-lg p-2 w-24 hover:bg-gray-400">← Back</button>
        <button onClick={nextStep} className="bg-amber-400 rounded-lg p-2 w-24 hover:bg-amber-500">Next →</button>
      </div>
    </div>
  )
}

// ---------------- Step 4 ----------------
const Confirmation = ({ prevStep }) => {
  return (
    <div className="w-full flex flex-col items-center max-w-md">
      <h2 className="text-2xl font-bold mb-4">Confirm Your Details</h2>
      <p className="text-gray-600 text-center">Review your account details before submitting.</p>

      <div className="flex justify-center mt-8 gap-4">
        <button onClick={prevStep} className="bg-gray-300 rounded-lg p-2 w-24 hover:bg-gray-400">← Back</button>
        <button className="bg-green-500 text-white rounded-lg p-2 w-32 hover:bg-green-600">Finish ✅</button>
      </div>
    </div>
  )
}



          
         
      
         
         

       