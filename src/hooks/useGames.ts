import type { GameQuery } from "@/App";
import type { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import gamesService, { type Game } from "../services/gamesService";

const useGames = (gameQuery:GameQuery)=>   
  useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => {
               return gamesService.getAll({
                    params: {
                      genres:gameQuery.genre?.id, 
                      parent_platforms: gameQuery.platform?.id,
                      ordering: gameQuery.sortOrder,
                      search: gameQuery.searchText,
                      page: pageParam
                    }
                })
            },
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
              return lastPage.next ? allPages.length + 1 : undefined;
            }
});
  
export default useGames;
