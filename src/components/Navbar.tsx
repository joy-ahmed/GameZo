import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColormodeSwitch from './ColormodeSwitch'

const Navbar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize='60px' alt='logo' />
      <ColormodeSwitch />
    </HStack>
  )
}

export default Navbar