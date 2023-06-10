import { Grid, GridItem } from "@chakra-ui/layout"
import { Show } from "@chakra-ui/media-query"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"


function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'>
        {/* add navbar component */}
        <Navbar />
      </GridItem>
      {/* used for media query this item will not shown below 980px */}
      <Show above="lg">
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
