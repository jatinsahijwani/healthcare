import React from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import '../styles.css'; // Adjust the path as necessary

const Page: React.FC = () => {
 return (
    <div className="px-4 py-12 space-y-12 md:px-6 lg:px-8 max-w-screen-md mx-auto">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Medical Diagnosis</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information and symptoms to get started</p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" placeholder="Enter your age" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" placeholder="Enter your address" required />
        </div>
        <fieldset className="space-y-2">
          <legend className="text-sm font-medium leading-6">Gender Identity</legend>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Input id="gender-male" name="gender" type="radio" value="male" />
              <Label className="text-sm font-medium leading-6" htmlFor="gender-male">
                Male
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input id="gender-female" name="gender" type="radio" value="female" />
              <Label className="text-sm font-medium leading-6" htmlFor="gender-female">
                Female
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Input id="gender-other" name="gender" type="radio" value="other" />
              <Label className="text-sm font-medium leading-6" htmlFor="gender-other">
                Other
              </Label>
            </div>
          </div>
        </fieldset>
        <form className="space-y-2">
          <Label htmlFor="symptoms">Symptoms</Label>
          <div className="grid grid-cols-1 gap-2" id="symptoms-container">
            <Input id="symptoms" placeholder="Enter your symptoms" required />
          </div>
          <Button onClick={undefined}>Add Symptom</Button>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Card>
        <CardHeader>
          <div className="text-xl font-bold">Potential Diseases</div>
          <p className="text-sm font-normal leading-5">Based on your symptoms</p>
        </CardHeader>
        <CardContent className="grid gap-4">
          <h3 className="font-semibold">1. Common Cold</h3>
          <p className="text-sm">
            The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually
            harmless, although it might not feel that way. Many types of viruses can cause a common cold.
          </p>
          <Separator />
          <h3 className="font-semibold">2. Influenza (Flu)</h3>
          <p className="text-sm">
            Influenza is a viral infection that attacks your respiratory system — your nose, throat, and lungs.
            Influenza is commonly called the flu, but it's not the same as stomach "flu" viruses that cause diarrhea and
            vomiting.
          </p>
        </CardContent>
      </Card>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Doctors in Your Area</h2>
        <ul className="grid gap-4">
          <li>
            <Card>
              <CardContent className="flex items-center space-y-0">
                <UserCircleIcon className="w-6 h-6" />
                <div className="flex-1 grid gap-1.5">
                 <h3 className="font-semibold">Dr. Sarah Johnson</h3>
                 <p className="text-sm">Cardiologist</p>
                </div>
                <Button size="sm">Contact</Button>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="flex items-center space-y-0">
                <UserCircleIcon className="w-6 h-6" />
                <div className="flex-1 grid gap-1.5">
                 <h3 className="font-semibold">Dr. Alex Lee</h3>
                 <p className="text-sm">Dermatologist</p>
                </div>
                <Button size="sm">Contact</Button>
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="flex items-center space-y-0">
                <UserCircleIcon className="w-6 h-6" />
                <div className="flex-1 grid gap-1.5">
                 <h3 className="font-semibold">Dr. Emily Chen</h3>
                 <p className="text-sm">Pediatrician</p>
                </div>
                <Button size="sm">Contact</Button>
              </CardContent>
            </Card>
          </li>
        </ul>
      </div>
    </div>
 );
};

function UserCircleIcon(props: React.SVGProps<SVGSVGElement>) {
 return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
 );
}

export default Page;
