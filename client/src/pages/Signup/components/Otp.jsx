"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Step4Otp() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Input placeholder="Enter OTP Sent To Your Mobile Number" />
      <Button variant="outline">SUBMIT OTP</Button>
      <p className="text-sm text-gray-500 text-center">
        Check your mail and paste code. Don’t forget to check spam folder.
      </p>
    </div>
  )
}
