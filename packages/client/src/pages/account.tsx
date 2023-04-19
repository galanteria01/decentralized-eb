import { VStack } from "@chakra-ui/react"
import { ProfilePage } from "../components/Profile"
import { Navbar } from "../components/Navbar"

type AccountProps = {

}

export default function Account(props: AccountProps) {
  return (
    <VStack>
      <Navbar />
      <ProfilePage name="Shoury Sharma" username="galanteria01" avatarUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
    </VStack>
  )
}
