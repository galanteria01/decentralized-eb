import { Heading, VStack } from "@chakra-ui/react"
import { TransactionsList } from "../components/TransactionsList"

type TransactionsProps = {

}

export const Transactions = (props: TransactionsProps) => {
  return (
    <VStack>
      <Heading>Transactions</Heading>
      <TransactionsList />
    </VStack>
  )
}