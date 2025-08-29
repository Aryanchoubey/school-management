

"use client"

import { useState } from "react"
import { Menu, X, Bell, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isDasboardOpen, setIsDasboardOpen] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-[#0f1a3c] text-white transition-all duration-300 z-50 ${
          isSidebarOpen ? "w-64" : "w-0 lg:w-"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          {isSidebarOpen && (
            <span className="font-semibold">Aryan Choubey</span>
            
          )}
          {isSidebarOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white cursor-pointer"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          )}
        </div>
        <hr />

        {isSidebarOpen && (
          <nav className="mt-4 space-y-4 px-4">
            <div>
              <Button variant="ghost" className="w-full justify-start">
                Go to super admin
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                My School
              </Button>
            </div>

            {/* School Management Accordion */}
            <div>
              <Button
                variant="ghost"
                className="w-full bg-amber-400 justify-between"
                onClick={() => setIsDasboardOpen(!isDasboardOpen)}
              >
                <span>School Management</span>
                {isDasboardOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>

              {isDasboardOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="w-full bg-amber-400  justify-start">
                    Add Branch
                  </Button>
                  <Button variant="ghost" className="w-fulljustify-start">
                    Classes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Sessions
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className=" min-h-16 flex items-center justify-between bg-white shadow px-4 py-3">
          <div className="flex items-center space-x-2">
            {!isSidebarOpen && (
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu />
          </Button>
        )}
            <h1 className="font-semibold text-lg"> Public School</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Notification */}
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
            >
              <Bell className="h-6 w-6" />
            </Button>

            {/* Username only in desktop */}
            <span className="hidden lg:inline text-gray-700 font-medium">
              Aryan Choubey
            </span>

            {/* Free Trial - hide in small screens */}
            <span className="hidden lg:inline text-sm text-gray-500">
              Free Trial - 30 Days
            </span>

            <Button className="cursor-pointer">Buy Now</Button>
          </div>
        </header>
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
