import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

type ProfilePageProps = {
  name: string;
  username: string;
  avatarUrl: string;
  bio?: string;
};

export const ProfilePage: React.FC<ProfilePageProps> = ({ name, username, avatarUrl, bio }) => {
  return (
    <Flex flexDir="column" maxW="600px" mx="auto">
      <Flex align="center" my={8}>
        <Image src={avatarUrl} alt={`${name}'s profile picture`} borderRadius="full" boxSize="100px" />
        <Box ml={4}>
          <Heading as="h1" size="2xl">
            {name}
          </Heading>
          <Text fontWeight="bold" fontSize="lg" color="gray.500">
            @{username}
          </Text>
        </Box>
      </Flex>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={8}>
        {bio && (
          <Box p="6">
            <Text fontSize="xl" color="gray.500" mb={4}>
              {bio}
            </Text>
          </Box>
        )}
        <Stack spacing={4} divider={<Box borderWidth="1px" borderColor="gray.200" />} p={6}>
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              About
            </Text>
            <Text color="gray.500">
              Lives in Bangalore
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="xl">
              Bills
            </Text>
            <Text color="gray.500">No bills yet.</Text>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};
