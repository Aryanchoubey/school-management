import { useState } from "react"
import { Menu, X, Bell, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen">


      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}

        <hr className="border-2" />

        {/* Form Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="lg:grid lg:grid-cols-2 md:grid-cols-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Label>Billing Name</Label>
              <Input placeholder="Billing Name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Address</Label>
              <Input placeholder="Address" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Organization Website</Label>
              <Input placeholder="Organization Website" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>State</Label>
              <Input placeholder="State" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Time-zone</Label>
              <Input placeholder="Select Timezone" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>District</Label>
              <Input placeholder="District" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input placeholder="Email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Country</Label>
              <Input placeholder="Country" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Contact Number</Label>
              <Input placeholder="+91" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Pincode</Label>
              <Input placeholder="Pincode" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Registration Number</Label>
              <Input placeholder="Registration Number" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Tax Number</Label>
              <Input placeholder="Tax Number" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Organization Code</Label>
              <Input placeholder="Organization Code" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>GST Info</Label>
              <Input placeholder="GST Info" />
            </div>
            <div className="col-span-2 flex flex-col gap-2">
              <Label>Upload Files</Label>
              <Input type="file" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button className="bg-yellow-500 cursor-pointer hover:bg-yellow-600">Save</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
