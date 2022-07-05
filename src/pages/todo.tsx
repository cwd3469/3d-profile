import type { NextPage } from "next";
import Layout from "@components/common/Layout";
import { Box, Flex, Center, Square, Text } from "@chakra-ui/react";

const Todo: NextPage = () => {
  return (
    <Layout>
      <Center w="100px" bg="green.500">
        <Text>Todo Box 1</Text>
      </Center>
    </Layout>
  );
};

export default Todo;
