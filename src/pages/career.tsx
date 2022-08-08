import type { NextPage } from 'next';
import Layout from '@components/common/Layout';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import CareerSide from '@components/career/CareerSide';
import CareerCenter from '@components/career/CareerCenter';

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(14, 1fr)" h="100%">
        <GridItem colSpan={5} rowSpan={1}>
          <CareerCenter />
        </GridItem>
        <GridItem colSpan={9} rowSpan={1}>
          <CareerSide />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Home;
