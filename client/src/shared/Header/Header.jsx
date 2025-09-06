import { Button } from "@/components/ui/button"
import { Bell, Menu } from "lucide-react"


export const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
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
       

        {/* Username only in desktop */}
        <span className="hidden lg:inline text-gray-700 font-medium">
          Aryan Choubey
        </span>

        {/* Free Trial - hide in small screens */}
        <span className="hidden lg:inline text-sm text-gray-500">
          Free Trial - 30 Days
        </span>

        <Button className="cursor-pointer">Buy Now</Button>
         <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer"
        >
          <Bell className="h-6 w-6" />
        </Button>
      </div>
    </header>
  )
}