import useGameTrailers from "@/hooks/useGameTrailers";
import { Spinner } from "@chakra-ui/react";

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
      <video
        src={firstTrailer.data[480]}
        poster={firstTrailer.preview}
        controls
      />
    </>
  ) : null;
};

export default GameTrailer;
