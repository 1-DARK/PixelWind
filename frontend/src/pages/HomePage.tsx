import { ArrowRight, Pencil, Terminal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { BadgeDemo } from "../component/Badge";
import { ItemDemo } from "../component/Item";
import { TabsDemo } from "../component/Tabs";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-28 pl-10">
        <Link to="/sx">
          <Button
            variant="outline"
            className="bg-[#0D1117] text-[#7EE0C2] border cursor-pointer border-[#1A1F25] hover:bg-[#111821] hover:text-[#9FF4D8] transition-all flex items-center gap-2"
          >
            <Pencil className="w-4 h-4" />
            <span>[New] TagsInput Component</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      <div className="pl-10 pt-8 text-5xl max-w-3xl leading-snug">
        PixelWind is a component system for building products{" "}
        <span className="text-[#7EE0C2]">with speed</span>.
      </div>

      <div className="pl-10 pt-4 max-w-3xl text-xl text-gray-500">
        Accessible React components for building high-quality web apps and
        design systems.{" "}
        <span className="text-white">Works with Next.js RSC</span>
      </div>

      <div className="pt-10 pl-10 flex gap-4">
        <Link to="/sa" className="text-white">
          <Button
            variant="outline"
            className="bg-[#369075] hover:text-white hover:bg-[#3b7c68] border cursor-pointer border-[#1A1F25] transition-all flex items-center gap-2"
          >
            Start Building
          </Button>
        </Link>
        <Link to="/ss">
          <Button
            variant="outline"
            className="bg-[#0D1117] text-[#7EE0C2] border cursor-pointer border-[#1A1F25] hover:bg-[#111821] hover:text-[#9FF4D8] transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>npm i @wind-ui/react</span>
          </Button>
        </Link>
      </div>
      <div className="pl-10 pt-20 flex flex-wrap sm:flex-nowrap gap-15">
        <BadgeDemo />
        <ItemDemo />
        <TabsDemo />
      </div>
    </div>
  );
};

export default HomePage;
