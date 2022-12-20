import { Link as ChakraLink, Button, useToast } from '@chakra-ui/react'

import { Container } from './Container'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import { useAppDispatch } from '../app/hooks'
import { addUser } from '../features/user/userSlice'

export const CTA = () => {
  const router = useRouter();
  const toast = useToast()
  const dispatch = useAppDispatch()
  const loginMetaMask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    dispatch(addUser(address))
    toast({
      position: 'bottom',
      title: 'Wallet Connected',
      description: 'you are now connected to Metamask',
      duration: 3000,
      isClosable: true,
    })
    router.push('/home');
  }
  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom={0}
      width="full"
      maxWidth="3xl"
      py={3}
    >
      <Button
        as={ChakraLink}
        variant="outline"
        colorScheme="green"
        rounded="button"
        flexGrow={1}
        mx={2}
        width="full"
        onClick={loginMetaMask}
      >
        Login
      </Button>
      <Button
        as={ChakraLink}
        isExternal
        href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript"
        variant="solid"
        colorScheme="green"
        rounded="button"
        flexGrow={3}
        mx={2}
        width="full"
      >
        Read More
      </Button>
    </Container >
  )
}