"use client";

import Footer from "../homescreen/_components/Footer";
import Navigation from "../homescreen/_components/Navigation";
import SeeMoreHero from "./_components/DetailsHero";

import { PaginationDemo } from "./_components/Pagination";

type HomeProps = {
  movie: {
    movieName: string;
    description: string;
    id: number;
    rating: number;
    genre: string;
    posterImage: string;
  };
};

export default function Home({ movie }: HomeProps) {
  return (
    <div className="min-h-screen bg-background w-full">
      <Navigation />
      <main className="max-w-360 mx-auto sm:px-6 lg:px-8">
        <section className="py-8 md:py-12">
          <SeeMoreHero movie={movie} title="upcoming" />
        </section>
        <section className="py-8 md:py-12">
          <PaginationDemo />
        </section>
      </main>
      <Footer />
    </div>
  );
}
