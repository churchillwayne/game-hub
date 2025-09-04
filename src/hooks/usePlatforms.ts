import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platformsService";
import platforms from "@/data/platforms";
import ms from "ms";

const usePlatforms = ()=> useQuery({
  queryKey: ['platforms'],
  queryFn: platformsService.getAll,
           staleTime: ms('24h'),
           initialData: platforms
});

export default  usePlatforms;