import useGameScreenshots from "@/hooks/useGameScreenshots";
import getCroppedImageUrl from "@/services/image-url";
import { Heading, Spinner, Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!screenshots) return null;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} margin={10}>
        {screenshots.results.map((screenshot) => (
          <Image
            alt={screenshot.id.toString()}
            key={screenshot.id}
            src={getCroppedImageUrl(screenshot.image)}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
