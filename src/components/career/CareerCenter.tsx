import { Heading, Box, Flex, Text, Image } from '@chakra-ui/react';
import KBox, { BoxCase } from '@components/common/KBox';
import { GrayDate } from '@components/common/KText';
import { ProfileInfo } from '@components/home/HomeCenter';
import { SectionTitle } from '@components/home/HomeGraph';
import { CareerPortfolio } from '@components/home/type';
import { authCareerPortfolio } from '@states/auth';
import { useRecoilValue } from 'recoil';

const CareerCenter = () => {
  const myPage = useRecoilValue<Array<CareerPortfolio>>(authCareerPortfolio);
  return (
    <Box p={4} h="100%" w="100%">
      <Flex flexDirection="column">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <SectionTitle text="Career List" />
          <GrayDate date="26 Aug 2022" />
        </Flex>
        <Flex flexDirection="column" padding="15px 0px" gap="14px">
          <ProfileInfo />
          <KBox type={BoxCase.small}>
            <Flex flexDirection="column" gap="10px" overflowX="hidden" overflowY="scroll" h="350px">
              {myPage.map((item, idx) => {
                return (
                  <a key={idx} href={item.url} target="_blank" rel="noreferrer">
                    <Flex
                      padding="15px"
                      border="1px solid #ddd"
                      borderRadius="15px"
                      justifyContent="space-between"
                      alignItems="center">
                      <Flex flexDirection="column" w="70%">
                        <Heading fontSize="sm">{item.title}</Heading>
                        <Text fontSize="12px" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis">
                          {item.url}
                        </Text>
                      </Flex>
                      <Box>
                        <Image src={item.image} alt={item.title} h="30px" />
                      </Box>
                    </Flex>
                  </a>
                );
              })}
            </Flex>
          </KBox>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CareerCenter;
