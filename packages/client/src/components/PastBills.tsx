import { VStack } from "@chakra-ui/react"
import { BillCard } from "./BillCard"

type PastBills = {

}

export const PastBills = (props: PastBills) => {
  return (
    <VStack spacing={2} w={'100%'}>
      <BillCard month="September" amount="224" paid={true} />
    </VStack>
  )
}