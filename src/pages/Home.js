import Hero from '../components/Hero'
import Differences from '../components/Differences'
import {
  Container,
  Typography,
  Box
} from '@material-ui/core'

export default function HomePage () {
  return (
    <Box>
      <Hero/>
      <Container>
        <Differences/>
      </Container>
    </Box>
  )
}
