import useGameTrailers from "@/hooks/useGameTrailers";
import { Heading, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, isLoading, error } = useGameTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const firstTrailer = trailers?.results[0];

  return firstTrailer ? (
    <>
      <Heading as="h1" marginY={5} fontSize="5xl">
        Trailer
      </Heading>
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </>
  ) : null;
};

export default GameTrailer;
