import type { GameQuery } from "@/App";
import type { FetchResponse } from "@/services/apiClient";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import gamesService, { type Game } from "../services/gamesService";
import ms from "ms";

const useGames = (gameQuery:GameQuery)=>   
  useInfiniteQuery<FetchResponse<Game>,Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => {
               return gamesService.getAll({
                    params: {
                      genres:gameQuery.genreId, 
                      parent_platforms: gameQuery.platformId,
                      ordering: gameQuery.sortOrder,
                      search: gameQuery.searchText,
                      page: pageParam
                    }
                })
            },
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
              return lastPage.next ? allPages.length + 1 : undefined;
            },
            staleTime: ms('24h')
});
  
export default useGames;
