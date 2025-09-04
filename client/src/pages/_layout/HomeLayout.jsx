import { Header } from "@/shared/Header/Header"
import { SideBar } from "@/shared/sidebar/SideBar"
import { useState } from "react"
import { Outlet } from "react-router-dom"

export const HomeLayout = () => {
  const [isDasboardOpen, setIsDasboardOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header - always on top */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Content area with sidebar + main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-fit bg-muted shadow-md">
          <SideBar
            isDasboardOpen={isDasboardOpen}
            setIsDasboardOpen={setIsDasboardOpen}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            isAcademicsOpen={isAcademicsOpen}
            setIsAcademicsOpen={setIsAcademicsOpen}
          />
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 bg-background overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
