import { ChevronDownIcon, InfoOutlineIcon, SunIcon } from "@chakra-ui/icons"
import { Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useAppDispatch } from "../app/hooks"
import { addUser } from "../features/user/userSlice"
import Link from "next/link"

export const Navbar = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const handleLogout = () => {
    dispatch(addUser(""));
    router.push('/')
  }
  const handleTransaction = () => {
    router.push('/transactions')
  }
  const handleAccount = () => {
    router.push('/account')
  }
  return (
    <Flex
      width={'100%'}
      justifyContent={'space-between'}
      p={8}
    >
      <Link href={'/home'}>
        <Image src={'/fire.png'} alt={'Image Icon'} height={12} />
      </Link>
      <Flex>
        <IconButton
          icon={<SunIcon />}
          aria-label="Toggle Theme"
          colorScheme="green"
          onClick={toggleColorMode}
          mx={2}
        />

        <Menu>
          <MenuButton as={Button} colorScheme="green" rightIcon={<ChevronDownIcon />}>
            User
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleAccount}>Account Profile</MenuItem>
            <MenuItem onClick={handleTransaction}>Transactions</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}