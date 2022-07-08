import { Avatar, Box, CSSObject, Grid, GridItem, Flex, Text } from "@chakra-ui/react";

const HomeCenter = () => {
  const fontCenter: CSSObject = {
    textAlign: "center",
  };

  return (
    <Box p={4} w="100%" h="100%">
      <Flex flexDirection="column" w="100%" h="100%">
        <Box h="30px"></Box>
        <Box bg="#FFFFFF" borderRadius="30px">
          <Box position="relative" w="100%" h="85px">
            <Flex justifyContent="center">
              <Avatar size="xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" top="-25px" />
            </Flex>
          </Box>
          <Text sx={fontCenter} fontWeight="bold" fontSize="md" paddingBottom="5px">
            Bess Willis
          </Text>
          <Text sx={fontCenter} fontSize="sm" color="#C3C4C9">
            24 years Califarnia
          </Text>
          <Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" color="#5CBEC7">
                Blood
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                -B
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" color="#5CBEC7">
                Blood
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                -B
              </Text>
            </Flex>
            <Flex flexDirection="column">
              <Text fontSize="sm" color="#5CBEC7">
                Blood
              </Text>
              <Text fontSize="3xl" fontWeight="bold">
                -B
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box bg="blackAlpha.300"></Box>
      </Flex>
    </Box>
  );
};

export default HomeCenter;
