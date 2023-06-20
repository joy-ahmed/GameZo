import { Grid, GridItem } from "@chakra-ui/layout"
import { Show } from "@chakra-ui/media-query"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genres } from "./hooks/useGenres"


function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null)

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
    >
      <GridItem area='nav'>
        {/* add navbar component */}
        <Navbar />
      </GridItem>
      {/* used for media query this item will not shown below 980px */}
      <Show above="lg">
        <GridItem area='aside' paddingX={5}>
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
