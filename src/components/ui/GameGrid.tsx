import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardcontainer from "./GameCardcontainer";
import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Box padding="10px">
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spaceX={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardcontainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardcontainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardcontainer key={game.id}>
                <GameCard game={game} />
              </GameCardcontainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} marginY={5}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
