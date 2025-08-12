import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardcontainer from "./GameCardcontainer";
import type { Genre } from "@/hooks/useGenres";
import type { Platform } from "@/hooks/usePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spaceX={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardcontainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardcontainer>
          ))}
        {data.map((game) => (
          <GameCardcontainer key={game.id}>
            <GameCard game={game} />
          </GameCardcontainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
