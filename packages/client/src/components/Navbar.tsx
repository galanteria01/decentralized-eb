import { InfoOutlineIcon, SunIcon } from "@chakra-ui/icons"
import { Flex, IconButton, Image, useColorMode } from "@chakra-ui/react"

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Flex
      width={'100%'}
      justifyContent={'space-between'}
      p={8}
    >
      <Image src={'/fire.png'} alt={'Image Icon'} height={12} />
      <Flex>
        <IconButton
          icon={<SunIcon />}
          aria-label="Toggle Theme"
          colorScheme="green"
          onClick={toggleColorMode}
          mx={2}
        />
        <IconButton
          icon={<InfoOutlineIcon />}
          aria-label="Toggle Theme"
          colorScheme="green"
          onClick={toggleColorMode}
          mx={2}
        />
      </Flex>
    </Flex>
  )
}