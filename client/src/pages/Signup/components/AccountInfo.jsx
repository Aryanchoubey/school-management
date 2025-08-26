import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";


export const AccountInfo = ({ nextStep }) => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          Setup your Account
        </h2>
        <p className="text-gray-600">
          Let's get started with your basic information
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email Address or Mobile Number
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email or mobile number"
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className="text-sm font-medium">
            Organization Name
          </Label>
          <Input
            id="organization"
            placeholder="Enter your organization name"
            className="h-12"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="school" className="text-sm font-medium">
            School Name
          </Label>
          <Input
            id="school"
            placeholder="Enter your school name"
            className="h-12"
          />
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <Button
          onClick={nextStep}
          className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 h-12"
          size="lg"
        >
          Next Step
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
