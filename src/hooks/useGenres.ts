import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import genresService from "../services/genresService";

const useGenres = ()=> useQuery({
  queryKey: ['genres'],
  queryFn: genresService.getAll,                           
           staleTime: 24 * 60 * 60 * 1000, //24 hours
           initialData: {count: genres.length, next: null, results: genres}
});

export default  useGenres;