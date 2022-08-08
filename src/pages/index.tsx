import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from '@components/common/Layout';
import { Grid, GridItem } from '@chakra-ui/react';
import HomeCenter from '@components/home/HomeCenter';
import HomeGraph from '@components/home/HomeGraph';

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Grid templateColumns="repeat(14, 1fr)" h="100%">
          <GridItem colSpan={5} rowSpan={1}>
            <HomeCenter />
          </GridItem>
          <GridItem colSpan={9} rowSpan={1}>
            <HomeGraph />
          </GridItem>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
