/**
 * v0 by Vercel.
 * @see https://v0.dev/t/STnmAebtmjI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";
import { Progress } from "@/components/ui/progress"
import { Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"

export default function Component() {
  return (
    <div className="bg-[#1a1a2e] text-white min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <SlidersIcon className="text-pink-500" />
          <h2 className="text-xl font-bold">AI Content Generation</h2>
          <p>Experience the power of AI in generating unique content.</p>
          <div className="space-y-2">
            <Progress className="w-full" value={70} />
            <Progress className="w-full" value={40} />
            <Progress className="w-full" value={85} />
          </div>
        </Card>
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <CheckCircleIcon className="text-green-500" />
          <h2 className="text-xl font-bold">Automated Proofreading</h2>
          <p>Let AI handle the proofreading of your documents.</p>
          <div className="space-y-2">
            <Progress className="w-full" value={60} />
            <Progress className="w-full" value={30} />
            <Progress className="w-full" value={90} />
          </div>
        </Card>
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <LightbulbIcon className="text-yellow-500" />
          <h2 className="text-xl font-bold">Contextual Suggestions</h2>
          <p>Get AI-powered suggestions based on your writing context.</p>
          <div className="space-y-2">
            <Progress className="w-full" value={50} />
            <Progress className="w-full" value={75} />
            <Progress className="w-full" value={20} />
          </div>
        </Card>
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <SmileIcon className="text-blue-500" />
          <h2 className="text-xl font-bold">Sentiment Analysis</h2>
          <p>Understand the sentiment of your text with AI analysis.</p>
          <div className="space-y-2">
            <Progress className="w-full" value={80} />
            <Progress className="w-full" value={65} />
            <Progress className="w-full" value={45} />
          </div>
        </Card>
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <BarChartIcon className="text-purple-500" />
          <h2 className="text-xl font-bold">Data Visualization</h2>
          <p>Visualize data trends and patterns effectively.</p>
          <CurvedlineChart className="w-full h-[200px]" />
        </Card>
        <Card className="bg-[#0f3460] rounded-lg p-6 space-y-4">
          <BookOpenIcon className="text-red-500" />
          <h2 className="text-xl font-bold">Text Summarization</h2>
          <p>Summarize your lengthy documents with AI technology.</p>
          <div className="space-y-2">
            <Progress className="w-full" value={55} />
            <Progress className="w-full" value={85} />
            <Progress className="w-full" value={30} />
          </div>
        </Card>
      </div>
    </div>
  )
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function BookOpenIcon(props) {
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}


function CheckCircleIcon(props) {
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LightbulbIcon(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}


function SlidersIcon(props) {
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
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  )
}


function SmileIcon(props) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}