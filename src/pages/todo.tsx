import type { NextPage } from "next";
import Layout from "@components/common/Layout";
import { Box, Flex, Center, Square, Text, GridItem, Grid } from "@chakra-ui/react";
import TodoCenter from "@components/todo/TodoCenter";
import TodoSide from "@components/todo/TodoSide";

const Todo: NextPage = () => {
  return (
    <Layout>
      <Grid templateColumns="repeat(14, 1fr)">
        <GridItem colSpan={5} rowSpan={1}>
          <TodoCenter />
        </GridItem>
        <GridItem colSpan={9} rowSpan={1}>
          <TodoSide />
        </GridItem>
      </Grid>
    </Layout>
  );
};

export default Todo;
