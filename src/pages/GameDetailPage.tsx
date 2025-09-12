import ExpandableText from "@/components/expandableText";
import CriticScore from "@/components/ui/CriticScore";
import DefinitionItem from "@/components/ui/DefinitionItem";
import GameAttributes from "@/components/ui/GameAttributes";
import useGame from "@/hooks/useGame";
import {
  Grid,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
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
      <ExpandableText>{game.description_raw}</ExpandableText>
      <GameAttributes game={game} />
    </>
  );
};

export default GameDetailPage;
