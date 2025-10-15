import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Overlay } from "../Overlay/Overlay"
import { useIsMobile } from "@/hooks/use-mobile"
import { useNavigate, useLocation } from "react-router-dom"

export const SideBar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isDasboardOpen,
  setIsDasboardOpen,
   isAcademicsOpen={isAcademicsOpen}   ,     // 👈 pass value
        setIsAcademicsOpen={setIsAcademicsOpen} ,
   isBillingOpen={isBillingOpen}   ,     // 👈 pass value
        setIsBillingOpen={setIsBillingOpen} 
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isMobile = useIsMobile()

  const handleNavigation = (path) => {
    navigate(path)
    if (isMobile) {
      setIsSidebarOpen(false) // ✅ close only in mobile
    }
  }

  return (
    <>
      <aside
        className={`fixed lg:static top-0 left-0 h-full bg-[#0f1a3c] text-white transition-all overflow-y-auto duration-300 z-50 ${
          isSidebarOpen ? "w-64" : "w-0 lg:w-0"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4">
          {isSidebarOpen && <span className="font-semibold">Aryan Choubey</span>}
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
            {/* Super Admin + My School */}
            <div className="space-y-3">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => handleNavigation("superadmin")}
              >
                Go to super admin
              </Button>

              <Button
                onClick={() => handleNavigation("school")}
                variant="ghost"
                className={`w-full justify-start ${
                  location.pathname.includes("school")
                    ? "bg-primary text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
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
                <div className="ml-4 mt-2 bg-amber-400 space-y-2 rounded-2xl overflow-hidden">
                 

                  <Button
                    onClick={() => handleNavigation("branch")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("branch")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c]"
                    }`}
                  >
                    Add Branch
                  </Button>

                  <Button
                    onClick={() => handleNavigation("classes")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("classes")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Classes
                  </Button>
                  <Button
                    onClick={() => handleNavigation("sessions")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("sessions")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Sessions
                  </Button>
                   <Button
                    onClick={() => handleNavigation("enquiry")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("enquiry")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Enquiry
                  </Button>
                </div>
              )}
            </div>

            {/* Academics Accordion */}
            <div>
              <Button
                variant="ghost"
                className="w-full justify-between hover:text-white hover:bg-primary"
                onClick={() => setIsAcademicsOpen(!isAcademicsOpen)}
              >
                <span>Academics</span>
                {isAcademicsOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>

              {isAcademicsOpen && (
                <div className="ml-4 mt-2 bg-amber-400 space-y-2 rounded-2xl overflow-hidden">
                  <Button
                    onClick={() => handleNavigation("class")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("class")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Class
                  </Button>

                  <Button
                    onClick={() => handleNavigation("section")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("section")
                        ? "bg-[#0f1a3c] text-white"
                        : " hover:text-white"
                    }`}
                  >
                    Section
                  </Button>

                  <Button
                    onClick={() => handleNavigation("subjects")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("subjects")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Subjects
                  </Button>
                  <Button
                    onClick={() => handleNavigation("timetables")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("timetables")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Time Table
                  </Button>
                  <Button
                    onClick={() => handleNavigation("attendence")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("attendence")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Attendance
                  </Button>
                  <Button
                    onClick={() => handleNavigation("studentleave")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("studentleave")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Student Leave
                  </Button>
                  <Button
                    onClick={() => handleNavigation("homework")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("homework")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Home Work
                  </Button>
                  <Button
                    onClick={() => handleNavigation("noticeboard")}
                    variant="ghost"
                     className={`w-full justify-start ${
                      location.pathname.includes("noticeboard")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Notice Board
                  </Button>
                </div>
              )}
            </div>

            {/* Fixed Buttons */}
            <Button
              onClick={() => handleNavigation("editstudent")}
              variant="ghost"
              className={`w-full justify-start ${
                location.pathname.includes("editstudent")
                  ? " bg-amber-400 text-white"
                  : " hover:text-white"
              }`}
            >
              User Management
            </Button>

            <Button
              onClick={() => handleNavigation("organisation")}
              variant="ghost"
              className={`w-full justify-start ${
                      location.pathname.includes("organisation")
                        ? " bg-amber-400 text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
            >
              Organisation
            </Button>
            <Button
              onClick={() => handleNavigation("settings")}
              variant="ghost"
              className={`w-full justify-start ${
                      location.pathname.includes("settings")
                        ? " bg-amber-400 text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
            >
              Setting
            </Button>
           
              <Button
                variant="ghost"
                className="w-full justify-between hover:text-white hover:bg-primary"
                onClick={() => setIsBillingOpen(!isBillingOpen)}
              >
                <span>Billing</span>
                {isBillingOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
              {isBillingOpen && (
                 <div className="ml-4 mt-2 bg-amber-400 space-y-2 rounded-2xl overflow-hidden">
                  <Button
                    onClick={() => handleNavigation("fee")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("fee")
                        ? "bg-[#0f1a3c] text-white"
                        : " hover:text-white"
                    }`}
                  >
                    Student Fee
                  </Button>
                  <Button
                    onClick={() => handleNavigation("salary")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("salary")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                   Salary
                  </Button><Button
                    onClick={() => handleNavigation("other")}
                    variant="ghost"
                    className={`w-full justify-start ${
                      location.pathname.includes("other")
                        ? "bg-[#0f1a3c] text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
                  >
                    Other
                  </Button>
                 </div>

              )}
            <Button
              onClick={() => handleNavigation("profile")}
              variant="ghost"
               className={`w-full justify-start ${
                      location.pathname.includes("profile")
                        ? " bg-amber-400 text-white"
                        : "hover:bg-[#0f1a3c] hover:text-white"
                    }`}
            >
              Profile
            </Button>
          </nav>
        )}
      </aside>

      {/* ✅ Overlay only on mobile */}
      {isMobile && <Overlay isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />}
    </>
  )
}
