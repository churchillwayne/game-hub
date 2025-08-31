import type { GameQuery } from "@/App";
import type { FetchResponse } from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";
import gamesService, { type Game } from "../services/gamesService";

const useGames = (gameQuery:GameQuery)=>   
  useQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => gamesService.getAll({
                    params: {
                      genres:gameQuery.genre?.id, 
                      parent_platforms: gameQuery.platform?.id,
                      ordering: gameQuery.sortOrder,
                      search: gameQuery.searchText
                    }
                  })         
});
  
export default useGames;
