import { Button } from "@/components/ui/button"
import { Bell, ChevronDown, ChevronRight, X } from "lucide-react"
import { Overlay } from "../Overlay/Overlay"
import { useIsMobile } from "@/hooks/use-mobile"
import { useNavigate } from "react-router-dom"
// import Myschool from "@/pages/Dashboard/MySchool/Myschool"

export const SideBar = ({ isSidebarOpen, setIsSidebarOpen, isDasboardOpen, setIsDasboardOpen }) => {
  const navigate = useNavigate()
  const handleNavigation =(path) =>{
    navigate(path)
  }
  return (
    <>
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-[#0f1a3c] text-white transition-all duration-300 z-50 ${isSidebarOpen ? "w-64" : "w-0 lg:w-"
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
          <nav className="mt-4 space-y-4 px-4  ">
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start">
                Go to super admin
              </Button>
              <Button onClick={()=>handleNavigation('school')} variant="ghost" className="w-full justify-start">
                My School
              </Button>
            </div>

            {/* School Management Accordion */}
            <div>
              <Button
                variant="ghost"
                className="w-full justify-between hover:text-white hover:bg-primary"
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
                <div className="ml-4 mt-2 bg-amber-400 space-y-2 rounded-2xl overflow-hidden ">
                  <Button variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button onClick={()=>handleNavigation('branch')} variant="ghost" className="w-full  justify-start">
                    Add Branch
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Classes
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Sessions
                  </Button>
                  
                </div>
              )}

            </div>
            <div className="space-y-5 ">
              <Button variant="ghost" className="w-full justify-start">
                Academics
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                    User Management
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Organisation
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Setting
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Biling
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    Profile
                  </Button>
            </div>
          </nav>
        )}

      </aside>

      {
        useIsMobile() && <Overlay isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      }
    </>
  )
}