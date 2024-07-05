"use client";
import { getRequest } from "@/app/Instances";
import MovieListSkeleton from "../common/Skeleton/MovieListSkeleton";
import MovieCard from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
import { errorMessage } from "@/app/utils/common.util";

const MovieList = () => {
  const getMovieDetails = async () => {
    try {
      const response = await getRequest("/movie/v1/get-movie");
      return response.data.data;
    } catch (error) {
      errorMessage("Failed to get Movies data. Please try again later.");
      console.log(error);
      throw new Error("Failed to fetch movies data");
    }
  };

  const { data, isLoading } = useQuery({
    queryKey: ["movieListData"],
    queryFn: getMovieDetails,
  });

  return (
    <div className="flex items-center justify-center pt-24">
      {isLoading ? (
        <MovieListSkeleton />
      ) : data?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data.map(({ _id, movieName, image_url }) => (
            <MovieCard key={_id} name={movieName} image={image_url} id={_id} />
          ))}
        </div>
      ) : (
        <p className="text-2xl mt-8 font-semibold text-gray-600">
          No Movie found.
        </p>
      )}
    </div>
  );
};

export default MovieList;
