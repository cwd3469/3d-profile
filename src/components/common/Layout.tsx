import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import Menu from "@components/common/Menu";
import { CSSObject } from "@emotion/react";
interface Layout_t {
  children: JSX.Element;
}

const Layout = (props: Layout_t) => {
  return (
    <Box bg="#E0F4F6" color="black">
      <Flex align="center" direction="column" justify="center" style={{ width: "100vw", height: "100vh" }}>
        <Box bg="#fff" p={2} borderRadius="50px" overflow="hidden">
          <Box bg="#ECF4F5" borderRadius="50px" overflow="hidden">
            <Grid templateColumns="repeat(10, 2fr)" w="1024px" h="768px">
              <GridItem colSpan={1} rowSpan={1}>
                <Menu />
              </GridItem>
              <GridItem colSpan={9} rowSpan={1}>
                {props.children}
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Layout;
