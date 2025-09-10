import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import PlatformSelector from "./components/ui/PlatformSelector";
import SortSelector from "./components/ui/SortSelector";
import GameHeading from "./components/ui/GameHeading";

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
