import useGenres from "@/hooks/useGenres";
import type { Genre } from "@/services/genresService";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  List as ChakraList,
  Heading,
  HStack,
  Image,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, isLoading, error } = useGenres();

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
                onClick={() => onSelectGenre(genre)}
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
