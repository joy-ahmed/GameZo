import { Badge } from "@chakra-ui/layout"

interface Props {
  score: number
}

const CriticScore = ({score}: Props) => {
  const color = score >= 90 ? 'green' : score >= 80 ? 'yellow' : '';
  return (
   <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore;