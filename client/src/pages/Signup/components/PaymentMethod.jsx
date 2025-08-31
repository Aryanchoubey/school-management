"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PaymentMethod({ paymentMethod, setPaymentMethod }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* LEFT */}
      <div>
        <Label className="mb-2 block">Choose Payment Method</Label>
        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-2 mt-3">
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
  )
}
