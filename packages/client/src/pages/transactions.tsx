import { Heading, VStack } from "@chakra-ui/react"
import { TransactionsList } from "../components/TransactionsList"
import { Navbar } from "../components/Navbar"

type TransactionsProps = {

}

export default function Transactions(props: TransactionsProps) {
  return (
    <VStack>
      <Navbar />
      <Heading>Transactions</Heading>
      <TransactionsList />
    </VStack>
  )
}
