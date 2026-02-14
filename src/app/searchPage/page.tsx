// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   InputGroup,
//   InputGroupAddon,
//   InputGroupInput,
// } from "@/components/ui/input-group";
// import { Field, FieldDescription } from "@/components/ui/field";
// import { getSearchMovies } from "@/lib/api/search-movies";
// import { Movie } from "@/lib/types";
// import { Flame, SearchIcon } from "lucide-react";
// import { ChangeEventHandler, useEffect, useState } from "react";

// type SearchProps = {
//   title: string;
//   movies: Movie[];
// };

// const Search = ({ movies }: SearchProps) => {
//   const [searchValue, setSearchValue] = useState<string>("");

//   const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
//     setSearchValue(event.target.value);
//   };

//   useEffect(() => {
//     if (searchValue === "") {
//       return;
//     }

//     const timer = setTimeout(async () => {
//       const data = await getSearchMovies(searchValue);
//       console.log(data);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchValue]);

//   return (
//     <div>
//       {/* <Navigation /> */}
//       <div className="flex flex-col justify-center mt-20 w-fit">
//         <Field className="w-fit">
//           <InputGroup>
//             <InputGroupInput
//               value={searchValue}
//               onChange={onChangeSearchValue}
//               placeholder="Search..."
//               className="text-black"
//             />
//             <InputGroupAddon align="inline-start">
//               <SearchIcon className="text-muted-foreground" />
//             </InputGroupAddon>
//           </InputGroup>
//           <FieldDescription>
//             Discover Your Next Favorite
//             <div className="flex gap-2">
//               <Flame />
//               <p>
//                 Search through thousands of movies, TV shows, and anime series
//               </p>
//               <Flame />
//             </div>
//           </FieldDescription>
//         </Field>

//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline">Open</Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuGroup>
//               {movies.map((movie) => (
//                 <DropdownMenuItem key={movie.id}>
//                   {movie.title}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuGroup>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//     </div>
//   );
// };

// export default Search;
