import { CheckIcon } from "@chakra-ui/icons"
import { Flex, Text } from "@chakra-ui/react"

type BillCardProps = {
  month: string,
  amount: string
  paid: boolean
}

export const BillCard = (props: BillCardProps) => {
  return (
    <Flex>
      <Text>September</Text>
      <CheckIcon />
    </Flex>
  )
}