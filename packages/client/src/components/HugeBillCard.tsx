import {
  Button,
  Card,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react"

type HugeBillCardProps = {
  month: string,
  amount: string
  paid: boolean
}

export const HugeBillCard = (props: HugeBillCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Card h={300} w={1200} mx={12} p={8}>
        <Flex h={'100%'} flexDir={'column'} justifyContent={'space-between'}>
          <Flex w={'100%'} justifyContent={'space-between'}>
            <Text fontWeight={'600'} fontSize={42}>September Bill</Text>
            <Text fontWeight={'600'} fontSize={42}>₹224</Text>
          </Flex>
          <Flex w={'100%'} justifyContent={'space-between'}>
            <VStack>
              <Text>Due Date</Text>
              <Text>Units Used</Text>
            </VStack>
            <Button onClick={onOpen}>
              Pay Now
            </Button>
          </Flex>
        </Flex>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pay Through Ethereum</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your Monthly bill generated is ₹224 which can be converted to
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Pay Now</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}