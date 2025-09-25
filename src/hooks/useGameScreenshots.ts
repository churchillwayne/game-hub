import type GameScreenshot from "@/entities/GameScreenshot";
import ApiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useGameScreenshots = (gameId:number) => {

    const apiClient = new ApiClient<GameScreenshot>(`/games/${gameId}/screenshots`);

    return useQuery({    
        queryKey: ['gameScreenshots', gameId],
        queryFn: apiClient.getAll
    })
}

export default useGameScreenshots;