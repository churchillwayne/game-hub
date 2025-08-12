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
import type { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/ui/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/ui/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const showAside = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show when={showAside}>
        <Box px={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Box>
      </Show>
      <GridItem area="main">
        <HStack gap={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
