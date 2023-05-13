import { Flex, Heading, VStack } from "@chakra-ui/react"
import StrapiApi from "../api/StrapiApi"
import { PastBills } from "./PastBills";
import { BillCard } from "./BillCard";

export const TransactionsList = () => {
  const api = new StrapiApi();
  return (
    <VStack w={'100%'}>
      <BillCard month="September" amount="224" paid={true} />
      <BillCard month="August" amount="81" paid={false} />
      <BillCard month="July" amount="59" paid={true} />
      <BillCard month="June" amount="224" paid={true} />
      <BillCard month="May" amount="281" paid={false} />
      <BillCard month="April" amount="159" paid={true} />
    </VStack>
  )
}