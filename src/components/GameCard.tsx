import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Games } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCropedImageUrl from '../services/image-url'


interface Props {
  games: Games
}


const GameCard = ({ games }: Props) => {
  return (
    <Card>
      <Image src={getCropedImageUrl(games.background_image)} />
      <CardBody>
        <Heading fontSize='2xl'>{games.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatformIconList platforms={games.parent_platforms.map(p => p.platform)} />
          <CriticScore score={games.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}

export default GameCard