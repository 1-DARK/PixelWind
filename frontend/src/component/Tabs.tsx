import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import { Card, CardDescription, CardHeader } from "../components/ui/card";

export function TabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 border-2 p-13 border-emerald-900">
      <Tabs defaultValue="PixelWind">
        <TabsList>
          <TabsTrigger value="PixelWind" className="text-">
            PixelWind
          </TabsTrigger>
          <TabsTrigger value="Ark">Ark</TabsTrigger>
          <TabsTrigger value="Zag">Zag</TabsTrigger>
        </TabsList>
        <TabsContent value="PixelWind">
          <Card className="bg-black text-white">
            <CardHeader>
              <CardDescription>
                Chakra UI is a component library for building web applications.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="Ark">
          <Card className="bg-black text-white">
            <CardHeader>
              <CardDescription>
                Ark UI is a headless library for building reusable, scalable
                design systems
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="Zag">
          <Card className="bg-black text-white">
            <CardHeader>
              <CardDescription>
                Zag.js provides a set of UI components powered by Finite State
                Machines
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
