import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  List as ChakraList,
  HStack,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <ChakraList.Root listStyleType="none">
      {data.map((genre) => (
        <ChakraList.Item key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8px"
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ChakraList.Item>
      ))}
    </ChakraList.Root>
  );
};

export default GenreList;
