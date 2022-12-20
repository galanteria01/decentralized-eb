import { CheckIcon } from "@chakra-ui/icons"
import { Card, Flex, Text } from "@chakra-ui/react"

type BillCardProps = {
  month: string,
  amount: string
  paid: boolean
}

export const BillCard = (props: BillCardProps) => {
  const showBill = () => {}
  return (
    <Card cursor={'pointer'} onClick={showBill} w={'100%'}>
      <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} p={4}>
        <Text fontSize={24} fontWeight={600}>September (₹224)</Text>
        <CheckIcon />
      </Flex>
    </Card>
  )
}