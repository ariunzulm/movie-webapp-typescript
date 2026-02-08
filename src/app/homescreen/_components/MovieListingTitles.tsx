import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type MovieListingTitlesProps = {
  title: string;
};

export default function MovieListingTitles({ title }: MovieListingTitlesProps) {
  return (
    <div className="flex justify-between my-8 px-5">
      <h3 className="font-semibold text-2xl leading-8">{title}</h3>
      <div className="flex items-center text-sm">
        <Button>See more</Button>
        <Button size="icon">
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
