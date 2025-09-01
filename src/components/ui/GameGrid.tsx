import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardcontainer from "./GameCardcontainer";
import type { GameQuery } from "@/App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

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

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        padding="20px"
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spaceX={3}
      >
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
    </InfiniteScroll>
  );
};

export default GameGrid;
