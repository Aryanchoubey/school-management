import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Eye, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calendar, 
  UserCheck, 
  FileText, 
  Folder, 
  ClipboardList, 
  MessageSquare, 
  Video
} from 'lucide-react';

const Academics = () => {
  const dashboardItems = [
    { title: 'Class', icon: GraduationCap },
    { title: 'Sections', icon: Users },
    { title: 'Subjects', icon: BookOpen },
    { title: 'Time Table', icon: Calendar },
    { title: 'Attendance', icon: UserCheck },
    { title: 'Student Leaves', icon: FileText },
    { title: 'Study Materials', icon: Folder },
    { title: 'Home Work', icon: ClipboardList },
    { title: 'Notice Board', icon: MessageSquare },
    { title: 'Events', icon: Calendar },
    { title: 'Live Classes (Go Pro)', icon: Video, isPro: true },
  ];

  const DashboardCard = ({ title, icon: Icon, isPro = false }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white rounded-xl">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-gray-800 text-base sm:text-lg font-semibold">
          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 flex-shrink-0" />
          <span className="truncate">{title}</span>
         
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-col sm:flex-row gap-2">
          <Button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white rounded-full px-4 sm:px-6 h-9 text-sm font-medium w-full sm:flex-1 shadow-md border-0"
          >
            <Eye className="h-4 w-4 mr-1 flex-shrink-0" />
            View
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-yellow-400 text-orange-500 hover:bg-yellow-50 hover:border-orange-500 rounded-full px-4 sm:px-6 h-9 text-sm font-medium w-full sm:flex-1 bg-white"
          >
            <Plus className="h-4 w-4 mr-1 flex-shrink-0" />
            Add New
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full h-full bg-gray-100 p-3 sm:p-4 lg:p-6">
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {dashboardItems.map((item, index) => (
          <DashboardCard 
            key={index} 
            title={item.title} 
            icon={item.icon} 
            isPro={item.isPro}
          />
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="mt-8 sm:mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <Card className="p-3 sm:p-4 text-center bg-white shadow-md rounded-xl border-0">
            <div className="text-lg sm:text-2xl font-bold text-[#FFC107] mb-1">12</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Total Classes</div>
          </Card>
          <Card className="p-3 sm:p-4 text-center bg-white shadow-md rounded-xl border-0">
            <div className="text-lg sm:text-2xl font-bold text-[#FFC107] mb-1">24</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Active Sections</div>
          </Card>
          <Card className="p-3 sm:p-4 text-center bg-white shadow-md rounded-xl border-0">
            <div className="text-lg sm:text-2xl font-bold text-[#FF8F00] mb-1">18</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Subjects</div>
          </Card>
          <Card className="p-3 sm:p-4 text-center bg-white shadow-md rounded-xl border-0">
            <div className="text-lg sm:text-2xl font-bold text-[#FF8F00] mb-1">456</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium">Total Students</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Academics;