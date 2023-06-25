
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genres } from '../hooks/useGenres';

interface Props {
  selectedGenre: Genres | null
}

const GameGrid = ({selectedGenre}: Props) => {

  const {data, error, isLoading} = useGames(selectedGenre);
  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={3} >
        {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}> <GameCardSkeleton /> </GameCardContainer>)}
        {data.map(game => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} games={game}/>
          </GameCardContainer>

        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid