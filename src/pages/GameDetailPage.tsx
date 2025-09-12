import useGame from "@/hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        {game.name}
      </Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
