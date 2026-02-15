import { Button } from "@/components/ui/button";
import { ArrowLeft, Volume2 } from "lucide-react";
import Link from "next/link";

const LinkButtons = () => {
  return (
    <div>
      <Link href="/">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-6 left-6 z-50 h-12 w-12 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 right-6 z-50 h-12 w-12 text-white rounded-full hover:scale-125 border-2 border-white/50 bg-black/30 hover:bg-white/10 backdrop-blur-sm"
      >
        <Volume2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default LinkButtons;
