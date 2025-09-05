import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function Settings() {
  const [theme, setTheme] = useState("yellow");
  const [notification, setNotification] = useState(true);
  const [emailAlert, setEmailAlert] = useState(true);
  const [startup, setStartup] = useState("on");
  const [location, setLocation] = useState(false);

  const handleSave = () => {
    console.log({
      theme,
      notification,
      emailAlert,
      startup,
      location,
    });
    alert("Settings Saved!");
  };

  const themeColors = [
    { color: "bg-yellow-500", value: "yellow" },
    { color: "bg-black", value: "black" },
    { color: "bg-blue-600", value: "blue" },
    { color: "bg-green-500", value: "green" },
    { color: "bg-red-600", value: "red" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-semibold mb-6">Settings</h1>

      <div className="space-y-6 max-w-2xl">
        {/* Theme Colors */}
        <div>
          <Label className="block mb-2">Theme Color</Label>
          <div className="flex gap-3 flex-wrap">
            {themeColors.map((t) => (
              <button
                key={t.value}
                onClick={() => setTheme(t.value)}
                className={`w-8 h-8 rounded-full border-2 ${
                  theme === t.value ? "border-black" : "border-transparent"
                } ${t.color}`}
              />
            ))}
          </div>
        </div>

        {/* Notification */}
        <div className="flex items-center gap-10">
          <Label>Notification Alert</Label>
          <Switch checked={notification} onCheckedChange={setNotification} />
        </div>

        {/* Email */}
        <div className="flex items-center  gap-10">
          <Label>Email Alert</Label>
          <Switch checked={emailAlert} onCheckedChange={setEmailAlert} />
        </div>

        {/* Startup */}
        <div className="flex items-center  gap-10">
          <Label>Opening On Windows Start-up</Label>
          <Select value={startup} onValueChange={setStartup}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Choose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="on">On</SelectItem>
              <SelectItem value="off">Off</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className="flex items-center  gap-10">
          <Label>Turn on Location</Label>
          <Switch checked={location} onCheckedChange={setLocation} />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            onClick={handleSave}
            className="bg-yellow-500 hover:bg-yellow-600 text-white"
          >
            ✔ Save
          </Button>
        </div>
      </div>
    </div>
  );
}
