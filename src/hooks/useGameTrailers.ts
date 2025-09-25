import type GameTrailer from "@/entities/GameTrailer";
import ApiClient from "@/services/apiClient";
import { useQuery } from "@tanstack/react-query";

const useGameTrailers = (gameId:number) => {

    const apiClient = new ApiClient<GameTrailer>(`/games/${gameId}/movies`);

    return useQuery({    
        queryKey: ['gameTrailer', gameId],
        queryFn: apiClient.getAll
    })
}

export default useGameTrailers;