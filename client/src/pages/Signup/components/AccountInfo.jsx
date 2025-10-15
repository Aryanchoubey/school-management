"use client"

import { Input } from "@/components/ui/input"

export default function Accountinfo({ formData, setFormData }) {
  if (!formData) return null; // safety check

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
        className="border p-2 rounded w-full"
      />
      <Input
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
        className="border p-2 rounded w-full"
      />
      <Input
        placeholder="Email Address"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 rounded w-full"
      />
      <Input
        placeholder="Phone Number"
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="border p-2 rounded w-full"
      />
      <Input
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="border p-2 rounded w-full"
      />
    </div>
  )
}

