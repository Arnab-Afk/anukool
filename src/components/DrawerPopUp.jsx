import * as React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

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
];

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [candidate, setCandidate] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/data");
        const data = await response.json();
        setGoal(data.goal);
        setName(data.name);
        setCandidate(data.candidate);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function onClick(adjustment) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  if (!goal || !name || !candidate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-10 flex justify-center">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Similarity Score</DrawerTitle>
              <DrawerDescription>
                Similarity score between{" "}
                <span className="text-primary">{candidate}</span> and his
                respective recuiter <span className="text-primary">{name}</span>
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
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerDemo;
