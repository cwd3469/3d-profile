import { Box, Flex } from "@chakra-ui/react";
import { ProfileInfo } from "@components/home/HomeCenter";
import { SectionTitle } from "@components/home/HomeGraph";

const CareerCenter = () => {
  return (
    <Box p="30px" h="100%" w="100%">
      <Flex flexDirection="column">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <Box h="20px" />
          <ProfileInfo />
        </Flex>
      </Flex>
    </Box>
  );
};

export default CareerCenter;
