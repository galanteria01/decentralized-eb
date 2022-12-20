import {
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { HugeBillCard } from '../components/HugeBillCard'
import { PastBills } from '../components/PastBills'

const Home = () => (
  <Container px={200} height="100vh">
    <Navbar />
    <VStack w={'100%'}>
      <HugeBillCard amount='100' month='September' paid={true} />
      <Heading my={2} alignSelf={'flex-start'}>
        Past Bills
      </Heading>
      <PastBills />
    </VStack>

    <Footer>
      <Text>Built by Galanteria</Text>
    </Footer>
  </Container>
)

export default Home
