import { Avatar, Box, CSSObject, Grid, GridItem, Flex, Text, Heading } from "@chakra-ui/react";

const HomeCenter = () => {
  const fontCenter: CSSObject = {
    textAlign: "center",
  };

  const shadow: CSSObject = {
    boxShadow: "2px 1px 10px 1px rgba(0,0,0,0.1)",
  };
  const data = {
    autherProfileImage: "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_1280.jpg",
    autherName: "JooYoung choi",
    autherAge: "29 year South Korea",
    autherBlood: "A",
    autherHeight: "170",
    autherWeight: "85",
  };

  return (
    <Box p={4} w="100%" h="100%">
      <Flex flexDirection="column" w="100%" h="100%">
        <Box h="30px"></Box>
        <Box bg="#FFFFFF" borderRadius="30px" padding="0 10px 30px" sx={shadow}>
          <Box position="relative" w="100%" h="85px">
            <Flex justifyContent="center">
              <Avatar sx={shadow} size="xl" name="Segun Adebayo" src={data.autherProfileImage} top="-25px" />
            </Flex>
          </Box>
          <Text sx={fontCenter} fontWeight="bold" fontSize="md" paddingBottom="2px">
            {data.autherName}
          </Text>
          <Text sx={fontCenter} fontSize="sm" color="#C3C4C9">
            {data.autherAge}
          </Text>
          <Flex justifyContent="center" paddingTop="20px">
            {[data.autherBlood, data.autherHeight, data.autherWeight].map((item, index) => {
              return (
                <Flex key={index} flexDirection="column" w="30%">
                  <Heading textAlign="center" fontSize="sm" color="#5CBEC7">
                    {index === 0 ? "Blood" : index === 1 ? "Height" : "Weight"}
                  </Heading>
                  <Flex alignItems="end" gap="2px" justifyContent="center" paddingTop="5px">
                    {" "}
                    <Heading textAlign="center" fontSize="xl" fontWeight="bold">
                      {item}
                    </Heading>
                    <Heading fontSize="sm">{index === 0 ? "" : index === 1 ? "cm" : "kg"}</Heading>
                  </Flex>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box bg="blackAlpha.300"></Box>
      </Flex>
    </Box>
  );
};

export default HomeCenter;
