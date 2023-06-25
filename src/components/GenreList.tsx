// import React from 'react'
import { Button, HStack, Image, List, ListItem, Spinner} from '@chakra-ui/react';
import useGenres, { Genres } from '../hooks/useGenres'
import getCropedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if(error) return null;
  if(isLoading) return <Spinner />
  return (
    <List>
      { data.map(genre => <ListItem key={genre.id} paddingY={'5px'}>
        <HStack>
          <Image boxSize='32px' borderRadius={8} src={getCropedImageUrl(genre.image_background)} />
        <Button onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name.substring(0,10)}</Button>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList