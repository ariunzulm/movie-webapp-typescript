import { Button } from "@/components/ui/button";
import { Download, Play, Plus, RectangleEllipsis } from "lucide-react";

const Buttons = () => {
  return (
    <div className="flex items-center gap-4 sm:text-md">
      <Button className="w-fit text-sm font-semibold shadow-lg rounded-lg  text-black border border-zinc-200 bg-gray-200 gap-1.5 py-1 hover:bg-gray-900 hover:scale-105 transition-all duration-200 hover:text-white group/btn">
        <Play className="w-3 h-3 group-hover/btn:fill-current " />
        <span>Play Trailer</span>
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 rounded-full border-2 border-white/50 hover:scale-125 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
      >
        <Plus className="w-4 h-4" />
      </Button>

      <Button
        size="icon"
        variant="ghost"
        className="h-12 w-12 rounded-full border-2 border-white/50 hover:scale-125 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
      >
        <Download className="w-4 h-4" />
      </Button>

      <Button className="w-fit text-sm font-semibold shadow-lg rounded-lg  text-white bg-transparent  backdrop-blur-md border border-zinc-200 gap-1.5 py-1 hover:bg-gray-900 hover:scale-105 transition-all duration-200 hover:text-white group/btn">
        <RectangleEllipsis className="w-3 h-3 group-hover/btn:fill-current " />
        <span>Similars</span>
      </Button>
    </div>
  );
};
export default Buttons;
