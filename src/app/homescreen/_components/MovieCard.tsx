import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function MovieCard({ name, rating, posterImage }) {
  return (
    <div className="px-5 h-auto w-full">
      <div>
        <div className="flex justify-between mb-8">
          <h3 className="font-semibold text-2xl leading-8">Upcoming</h3>
          <div className="flex flex-wrap items-center text-sm">
            <Button>See more</Button>
            <Button size="icon" aria-label="Submit">
              <ArrowRight />
            </Button>
          </div>
        </div>

        <div className="bg-[#F4F4F5] rounded-lg min-h-77.25">
          <img
            src="/list-1.png"
            alt="Movie name"
            className="h-auto object-cover"
          />
          <div className="min-h-19">
            <div className="flex items-center gap-1.5 px-3 py-1.5">
              <Star fill="#FDE047" className="text-amber-200" />
              <p className="text-lg font-semibold text-gray-900">6.9</p>
              <p className="text-base text-gray-400">/10</p>
            </div>
            <p className="text-[12px] font-normal text-[#09090B] px-5 leading-relaxed w-93">
              Get Away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
