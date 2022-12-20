import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

export const CTA = () => {
  const router = useRouter();
  const loginMetaMask = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner()
    console.log(signer)
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