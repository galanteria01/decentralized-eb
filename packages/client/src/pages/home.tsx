import {
  Text,
  VStack,
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { HugeBillCard } from '../components/HugeBillCard'

const Home = () => (
  <Container height="100vh" w={'100vw'}>
    <Navbar />
    <VStack w={'100%'}>
      <HugeBillCard amount='100' month='September' paid={true} />
    </VStack>

    <Footer>
      <Text>Built by Galanteria</Text>
    </Footer>
  </Container>
)

export default Home
