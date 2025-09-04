import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import genresService from "../services/genresService";
import ms from 'ms';

const useGenres = ()=> useQuery({
  queryKey: ['genres'],
  queryFn: genresService.getAll,
           staleTime: ms('24h'),
           initialData: genres
});

export default  useGenres;