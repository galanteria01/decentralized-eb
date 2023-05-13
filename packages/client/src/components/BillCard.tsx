import { CheckIcon, MinusIcon } from "@chakra-ui/icons"
import { Card, Flex, Text } from "@chakra-ui/react"

type BillCardProps = {
  month: string,
  amount: string
  paid: boolean
}

export const BillCard = (props: BillCardProps) => {
  const showBill = () => { }
  return (
    <Card cursor={'pointer'} onClick={showBill} w={'90%'} m={12}>
      <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'} p={4}>
        <Text fontSize={24} fontWeight={600}>{props.month} ({props.amount})</Text>
        {
          props.paid ? <CheckIcon /> : <MinusIcon />
        }
        {/* <CheckIcon /> */}
      </Flex>
    </Card>
  )
}