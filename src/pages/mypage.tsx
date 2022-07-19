import type { NextPage } from "next";
import Layout from "@components/common/Layout";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import MypageSide from "@components/mypage/MypageSide";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(14, 1fr)" h="100%">
        <GridItem colSpan={5} rowSpan={1}>
          <div>center</div>
        </GridItem>
        <GridItem colSpan={9} rowSpan={1}>
          <MypageSide />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
