import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function EkycForm() {
  const startLoader = () => {
    
  }
  const [sent,setSent] = useState(false);
  return (
    <Card className="w-full max-w-md dark:bg-gray-800 dark:text-white">
      <CardHeader>
        <div>
          <UserIcon className="dark:text-white" />
        </div>
        <div className="flex gap-1">
          <ShieldCheckIcon className="w-4 h-4 dark:text-white" />
          <span>eKYC Verification</span>
        </div>
        <div className="text-sm">Enter your Aadhar number and OTP to verify your identity.</div>
      </CardHeader>
      <CardContent className="grid gap-6">
        <form>
          <div className="space-y-2">
            <Label className="sm:col-span-2" htmlFor="aadhar">
              Aadhar Number
            </Label>
            <Input id="aadhar" placeholder="Enter your Aadhar number" required type="text" />
          </div>
          <div className={`space-y-2 ${sent ? '': 'hidden'}`} id="otpField">
            <Label className="sm:col-span-2" htmlFor="otp">
              OTP
            </Label>
            <Input id="otp" placeholder="Enter your OTP" required type="text" />
          </div>
          <Button className="w-full mt-2" onClick={() => {
            startLoader();
            setSent(true);
          }} type="button">
            {sent ? 'Verify OTP' : 'Send OTP'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

function ShieldCheckIcon(props) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
