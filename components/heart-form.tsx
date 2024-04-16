"use client";
import { useState } from "react";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function HeartForm() {
  const [bp,setBp] = useState('');
  const [sg,setSg] = useState('');
  const [al,setAl] = useState('');
  const [su,setSu] = useState('');
  const [rbc,setRbc] = useState('');
  const [pc,setPc] = useState('');
  const [pcc,setPcc] = useState('');

  const handleSubmit = async() => {
    const response = await fetch('http://127.0.0.1:5000/predictkidney',{
      method: 'POST',
      body: JSON.stringify({
        bp,sg,al,su,rbc,pcc,pc
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    localStorage.setItem('diagnosis',data.prediction);
  }
  return (
    <div className="flex justify-center w-[100vw] h-[100vh] bg-gradient-to-br from-gray-400 to-gray-900">
      <Card className="w-full max-w-3xl scale-90 bg-gradient-to-br from-gray-900 to-gray-400 rounded-lg p-6">
        <CardHeader>
          <CardTitle className="text-white">Cancer Diagnosis</CardTitle>
          <CardDescription className="text-white">
            Enter the patient's information to assess the risk of Cancer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white" htmlFor="name">
                Age in Years
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="name" placeholder="Age in Years" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="age">
                Trest Bps
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="age" placeholder="Trest Bps" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="gender">
                Cholesterol
              </Label>
              <Input className="bg-white text-white rounded-md p-2" id="gender" placeholder="Cholesterol" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="symptoms">
                Thalach
              </Label>
              <Input value={bp} onChange={(e) => setBp(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="BThalach" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Old Peak
              </Label>
              <Input value={sg} onChange={(e) => setSg(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Old Peak" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Sex_0
              </Label>
              <Input value={al} onChange={(e) => setAl(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Sex_0" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
                Sex_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="Sex_1" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CP_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CP_0" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CP_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CP_1" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CP_2
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CP_2" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CP_3
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CP_3" required />
            </div>
            <div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              FBS_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="FBS_0" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              RESTECG_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="RESTECG_0" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              RESTECG_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="RESTECG_1" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              RESTECG_2
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="RESTECG_2" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              EXANG_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="EXANG_0" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              EXANG_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="EXANG_1" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              SLOPE_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="SLOPE_0" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              SLOPE_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="SLOPE_1" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              SLOPE_2
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="SLOPE_2" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CA_0
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CA_0" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CA_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CA_1" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              CA_2
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="CA_02" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              THAL_1
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="THAL_1" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              THAL_2
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="THAL_2" required />
            </div><div className="space-y-2">
              <Label className="text-white" htmlFor="tests">
              THAL_3
              </Label>
              <Input value={su} onChange={(e) => setSu(e.target.value)} className="bg-white text-white rounded-md p-2" id="gender" placeholder="THAL_3" required />
            </div>
            
          </div>
          <Button onClick={handleSubmit} className="w-full bg-white text-gray-400 hover:bg-gray-900 hover:text-white">Assess Risk</Button>
        </CardContent>
      </Card>
    </div>
  )
}
