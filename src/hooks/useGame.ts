import gamesService from "@/services/gamesService";
import { useQuery } from "@tanstack/react-query";

const useGame = (slug:string) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => gamesService.get(slug)
})

export default useGame;