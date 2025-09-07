import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Organization() {
  return (
    <div className="p-4 max-w-5xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Organization Profile</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6">
          {/* Logo Upload */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 border border-dashed rounded-md flex items-center justify-center mb-2">
              <span className="text-muted-foreground">Your Logo</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="outline">Change Logo</Button>
              <Button variant="destructive">Remove Logo</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Preferred image size: 240x240px, @72 DPI
            </p>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Organization Name</Label>
              <Input placeholder="Enter organization name" />

              <Label>Organization Website</Label>
              <Input placeholder="https://example.com" />

              <Label>Time-zone</Label>
              <Select>
                <SelectTrigger>
                  <Input placeholder="Select Time-zone" readOnly />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IST">IST (+05:30)</SelectItem>
                  <SelectItem value="EST">EST (-05:00)</SelectItem>
                </SelectContent>
              </Select>

              <Label>Email</Label>
              <Input type="email" placeholder="info@example.com" />

              <Label>Contact Number</Label>
              <Input type="tel" placeholder="+91 9876543210" />

              <Label>Registration Number</Label>
              <Input placeholder="Enter registration number" />

              <Label>Organization Code</Label>
              <Input placeholder="Enter organization code" />
            </div>

            <div className="space-y-2">
              <Label>Address</Label>
              <Textarea placeholder="Enter address" rows={5} />

              <Label>State</Label>
              <Select>
                <SelectTrigger>
                  <Input placeholder="Select State" readOnly />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Delhi">Delhi</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                </SelectContent>
              </Select>

              <Label>District</Label>
              <Select>
                <SelectTrigger>
                  <Input placeholder="Select District" readOnly />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="New Delhi">New Delhi</SelectItem>
                  <SelectItem value="Pune">Pune</SelectItem>
                </SelectContent>
              </Select>

              <Label>Country</Label>
              <Select>
                <SelectTrigger>
                  <Input placeholder="Select Country" readOnly />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>

              <Label>Pincode</Label>
              <Input placeholder="Enter pincode" />

              <Label>Tax Number</Label>
              <Input placeholder="Enter tax number" />

              <Label>GST Info</Label>
              <Input placeholder="Enter GST info" />
            </div>
          </div>

          <Button className="self-end mt-4">Save</Button>
        </CardContent>
      </Card>
    </div>
  );
}
