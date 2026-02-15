"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldDescription } from "@/components/ui/field";
import { getSearchMovies } from "@/lib/api/search-movies";
import { Movie } from "@/lib/types";
import { ChevronDown, Loader, Loader2, SearchIcon } from "lucide-react";
import { ChangeEventHandler, use, useEffect, useState } from "react";

type SearchProps = {
  title: string;
  movies: Movie[];
};

const Search = ({ movies }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
    console.log({ setSearchValue });
  };

  useEffect(() => {
    if (searchValue === "") {
      setSearchResult([]);
      setIsOpen(false);
      return;
    }
    setIsLoading(true);

    const timer = setTimeout(async () => {
      try {
        const data = await getSearchMovies(searchValue);
        setSearchResult(data.results);
        setIsOpen(true);
      } catch (error) {
        console.error({ error });
        setSearchResult([]);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleMovieSelect = (movieId: number) => {
    setSearchValue("");
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col justify-center w-full max-w-2xl mx-auto mt-20 mb-100">
      <Field className="w-full ">
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              {isLoading && (
                <Loader2 className="text-muted-foreground animate-spin" />
              )}
              {!isLoading && <SearchIcon className="text-muted-foreground" />}
            </InputGroupAddon>

            <InputGroupInput
              value={searchValue}
              onChange={onChangeSearchValue}
              placeholder="Type here to search..."
              className="text-black"
            />
          </InputGroup>
          {searchResult.length > 0 && (
            <DropdownMenuContent className="w-full min-w-125 absolute bottom-0">
              {searchResult.slice(0, 8).map((movie) => (
                <DropdownMenuItem
                  key={movie.id}
                  onClick={() => handleMovieSelect(movie.id)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {movie.title && (
                      <img
                        src={movie.poster_path}
                        alt={movie.title}
                        className="aspect-video h-full w-full object-cover"
                      />
                    )}
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </Field>
      {searchValue && !isLoading && searchResult.length === 0 && (
        <p className="text-sm text-muted-foreground mt-2 text-center">
          No movies found
        </p>
      )}
    </div>
  );
};

export default Search;
