import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 max-w-6xl mx-auto">
      
      {/* Sidebar Profile Card */}
      <Card className="flex flex-col items-center p-6">
        <Avatar className="h-24 w-24 mb-4">
          <AvatarImage src="/admin-photo.jpg" alt="Admin" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <h2 className="text-xl font-bold">Anita Sharma</h2>
        <p className="text-muted-foreground">Principal</p>
        <Badge className="bg-green-500 text-white mt-2">Active</Badge>

        <div className="text-sm text-center mt-4">
          <p>Email: anita.sharma@school.com</p>
          <p>Phone: ‪+91 9876543210‬</p>
        </div>

        <div className="flex gap-3 mt-4">
          <Button>Edit Profile</Button>
          <Button variant="outline">Message</Button>
        </div>
      </Card>

      {/* Main Section */}
      <div className="col-span-2 flex flex-col gap-6">
        
        {/* Admin Details */}
        <Card>
          <CardHeader>
            <CardTitle>Admin Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Employee ID:</strong> ADM1024</p>
            <p><strong>Department:</strong> Administration</p>
            <p><strong>Designation:</strong> Principal</p>
          </CardContent>
        </Card>

        {/* Permissions */}
        <Card>
          <CardHeader>
            <CardTitle>Permissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="attendance" defaultChecked />
              <label htmlFor="attendance">Attendance Access</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="exam" defaultChecked />
              <label htmlFor="exam">Exam Control</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="finance" />
              <label htmlFor="finance">Finance Management</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="reports" defaultChecked />
              <label htmlFor="reports">Reports Access</label>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>✔ ID Proof</li>
              <li>✔ Address Proof</li>
              <li>✔ Police Verification</li>
            </ul>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Approved 5 new student admissions</li>
              <li>Generated monthly fee report</li>
              <li>Updated teacher timetable</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}