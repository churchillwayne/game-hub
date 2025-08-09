import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { List as ChakraList, HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();

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
