// CombinedComponent.tsx
"use client";
import React from 'react';
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Inter } from 'next/font/google';
import './styles.css';

// Define the Inter font with TypeScript
const inter = Inter({
 subsets: ['latin'],
 display: 'swap',
 variable: '--font-inter',
});

// Define the Component
const Component: React.FC = () => {
 return (
    <div className="grid md:grid-cols-2 items-start gap-4">
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-0">
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div
              style={{
                height: 400,
              }}
            >
              <img alt="Map" className="aspect-[2/1] object-cover" height={200} src="/placeholder.svg" width={400} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Search</CardTitle>
            <CardDescription>Search for hospitals by name or location.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                 <Label htmlFor="search">Search</Label>
                 <Input className="mt-1" id="search" placeholder="Search for hospitals" />
                </div>
                <div className="relative">
                 <Label htmlFor="location">Location</Label>
                 <Input className="mt-1" id="location" placeholder="Enter your location" />
                </div>
              </div>
              <Button size="sm">Search</Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Hospitals</CardTitle>
          <CardDescription>Showing 10 nearby hospitals with oxygen and blood supply.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div
            className="overflow-auto"
            style={{
              height: "calc(100vh - 12rem)",
            }}
          >
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Name
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Location
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Oxygen
                 </th>
                 <th className="px-4 py-3 text-sm font-medium tracking-wider text-gray-500 uppercase dark:text-gray-500">
                    Blood
                 </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                 <td className="p-4">St. Mary's Hospital</td>
                 <td className="p-4">1234 Elm St, Toronto, ON</td>
                 <td className="p-4">4</td>
                 <td className="p-4">2</td>
                </tr>
                <tr>
                 <td className="p-4">General Hospital</td>
                 <td className="p-4">5678 Oak St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">2</td>
                </tr>
                <tr>
                 <td className="p-4">City Hospital</td>
                 <td className="p-4">9101 Pine St, Toronto, ON</td>
                 <td className="p-4">3</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Central Hospital</td>
                 <td className="p-4">1212 Maple St, Toronto, ON</td>
                 <td className="p-4">5</td>
                 <td className="p-4">4</td>
                </tr>
                <tr>
                 <td className="p-4">Community Hospital</td>
                 <td className="p-4">1313 Birch St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Memorial Hospital</td>
                 <td className="p-4">1414 Cedar St, Toronto, ON</td>
                 <td className="p-4">2</td>
                 <td className="p-4">3</td>
                </tr>
                <tr>
                 <td className="p-4">University Hospital</td>
                 <td className="p-4">1515 Spruce St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">1</td>
                </tr>
                <tr>
                 <td className="p-4">Children's Hospital</td>
                 <td className="p-4">1616 Pine St, Toronto, ON</td>
                 <td className="p-4">3</td>
                 <td className="p-4">0</td>
                </tr>
                <tr>
                 <td className="p-4">Veterans Hospital</td>
                 <td className="p-4">1717 Elm St, Toronto, ON</td>
                 <td className="p-4">4</td>
                 <td className="p-4">2</td>
                </tr>
                <tr>
                 <td className="p-4">Methodist Hospital</td>
                 <td className="p-4">1818 Oak St, Toronto, ON</td>
                 <td className="p-4">0</td>
                 <td className="p-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
 );
};

// Define the LayoutProps interface for the Layout component
interface LayoutProps {
 children: React.ReactNode;
}

// Define the Layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
 return (
    <html lang="en">
      <body className={inter.variable + inter.variable}>
        {children}
      </body>
    </html>
 );
};

// Export the components
export { Component, Layout };
