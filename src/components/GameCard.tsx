import React from 'react'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Games } from '../hooks/useGames'
import PlatformIconList from './PlatformIconList'


interface Props {
  games: Games
}


const GameCard = ({ games }: Props) => {
  return (
    <Card borderRadius={'10px'} overflow={'hidden'}>
      <Image src={games.background_image} />
      <CardBody>
        <Heading fontSize='2xl'>{games.name}</Heading>
        <PlatformIconList platforms={games.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  )
}

export default GameCard