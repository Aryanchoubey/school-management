import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EditProfile() {
  const [profile, setProfile] = useState({
    name: 'Anita Sharma',
    email: 'anita.sharma@school.com',
    phone: '+91 9876543210',
    designation: 'Principal',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saved Profile:', profile);
    // Add your save logic here
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Edit Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter full name"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Enter phone"
              />
            </div>

            <div>
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                value={profile.designation}
                onChange={handleChange}
                placeholder="Enter designation"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <Button variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
