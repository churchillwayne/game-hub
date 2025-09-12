import GameGrid from "@/components/ui/GameGrid";
import GameHeading from "@/components/ui/GameHeading";
import GenreList from "@/components/ui/GenreList";
import PlatformSelector from "@/components/ui/PlatformSelector";
import SortSelector from "@/components/ui/SortSelector";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomePage = () => {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <Show when={showAside}>
        <Box px={5}>
          <GenreList />
        </Box>
      </Show>
      <GridItem area="main">
        <Box px={5}>
          <GameHeading />
          <HStack gap={5} marginBottom={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
