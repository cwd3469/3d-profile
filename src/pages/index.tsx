import type { NextPage } from "next";
import Layout from "@components/common/Layout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import HomeCenter from "@components/home/HomeCenter";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(10, 2fr)" w="1024px" h="768px">
        <GridItem colSpan={3} rowSpan={1}>
          <HomeCenter />
        </GridItem>
        <GridItem colSpan={7} rowSpan={1} bg="#fff"></GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
