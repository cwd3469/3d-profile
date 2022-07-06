import { Avatar, Box, Grid, GridItem } from "@chakra-ui/react";

const HomeCenter = () => {
  const centerPosition = {
    position: "absolute",
    left: "50%",
    top: "-30px",
    transform: "translateX(-50%)",
  };

  return (
    <Box p={4} w="100%" h="100%">
      <Grid templateColumns="repeat(1, 10fr)" w="100%" h="100%">
        <GridItem colSpan={1} rowSpan={4}>
          <Grid templateColumns="repeat(1, 10fr)" w="100%" h="100%">
            <GridItem colSpan={1} rowSpan={2} bg="red.500"></GridItem>
            <GridItem colSpan={1} rowSpan={8} bg="#FFFFFF" borderRadius="30px">
              <Box position="relative" w="100%" h="100%">
                <Avatar sx={centerPosition} size="xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={1} rowSpan={6} bg="blackAlpha.300"></GridItem>
      </Grid>
    </Box>
  );
};

export default HomeCenter;
