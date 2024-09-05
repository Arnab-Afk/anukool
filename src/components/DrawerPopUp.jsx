import * as React from "react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "sdfsdf",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];


const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(90)
  const [name, setName] = React.useState("Recuirter")
  const [candidate, setCandidate] = React.useState("Candidate")

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <div className="mt-10 flex justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <div>
          <DrawerContent>
            <div className="flex justify-center space-x-4">
              <div className="max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Similarity Score</DrawerTitle>
                  <DrawerDescription>
                    Similarity score between{" "}
                    <span className="text-primary">{candidate}</span> and his
                    respective recuiter{" "}
                    <span className="text-primary">{name}</span>
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {goal}
                      </div>
                      <div className="text-[0.70rem] text-muted-foreground">
                        *percentage
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <Bar
                          dataKey="goal"
                          style={{
                            fill: "hsl(var(--foreground))",
                            opacity: 0.9,
                          }}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
              <div className="max-w-sm">
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="flex-1 text-start ml-7">
                      <div className="text-4xl font-bold tracking-tighter">
                        CS Group 2
                      </div>
                      
                    </div>
                  </div>
                  <div className="px-4 mt-6 sm:px-6 lg:px-8">
                    <div className="sm:flex sm:items-center">
                      Details of the group members
                    </div>
                    <div className="mt-8 flow-root">
                      <div className="-mx-4 -my-2  sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th
                                    scope="col"
                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                  >
                                    Name
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  >
                                    Designation
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  >
                                    Specilization
                                  </th>
                                  
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                  <tr key={person.email}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                      {person.name}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                      {person.title}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                      {person.email}
                                    </td>
                                    
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DrawerContent>
        </div>
      </Drawer>
    </div>
  );
}

export default DrawerDemo