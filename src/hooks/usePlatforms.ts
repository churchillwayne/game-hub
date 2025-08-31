import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platformsService";

const usePlatforms = ()=> useQuery({
  queryKey: ['platforms'],
  queryFn: platformsService.getAll,
           staleTime: 24 * 60 * 60 * 1000 //24 hours                 
});

export default  usePlatforms;