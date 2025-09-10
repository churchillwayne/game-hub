import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  List as ChakraList,
  Heading,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading>Genres</Heading>
      <ChakraList.Root listStyleType="none">
        {data?.results.map((genre) => (
          <ChakraList.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius="8px"
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                variant="ghost"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ChakraList.Item>
        ))}
      </ChakraList.Root>
    </>
  );
};

export default GenreList;
