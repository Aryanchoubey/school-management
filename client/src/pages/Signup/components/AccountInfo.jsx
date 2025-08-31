"use client"

import { Input } from "@/components/ui/input"

export default function Accountinfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email Address" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Password" type="password" />
    </div>
  )
}
