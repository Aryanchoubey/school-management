"use client"
export default function Otp({ otp, setOtp }) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <input
        className="border p-2 rounded text-center w-32"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
    </div>
  )
}
