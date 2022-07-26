import { Heading, Box, Flex, Text, Image } from "@chakra-ui/react";
import KBox, { BoxCase } from "@components/common/KBox";
import { ProfileInfo } from "@components/home/HomeCenter";
import { SectionTitle } from "@components/home/HomeGraph";
import { StartItem } from "@components/home/type";

const CareerCenter = () => {
  const myPage: Array<StartItem> = [
    {
      url: "https://github.com/cwd3469",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      title: "Git hub",
    },
    {
      url: "https://jooganesik.tistory.com/",
      image:
        "https://w.namu.la/s/aec084b1eda1878b6aba5c6edba4950075de77d601abdef0894f59c164089a096c2dd305fc578a64f8519dd129f3aea87dc54660d52820a1b33c259f1295501c029b476298a743c46270368b49a10e654d7ed144a377841668564ebb3724b3b0",
      title: "Tistory",
    },
    {
      url: "https://3d-profile.site/",
      image: "https://cdn-icons-png.flaticon.com/512/208/208761.png",
      title: "3d-profile",
    },
    {
      url: "https://www.bizchemy.com/",
      image: "https://www.bizchemy.com/static/media/appIcon.21942fbb31686cb7c99e.png",
      title: "Bizchemy",
    },
  ];
  return (
    <Box p={4} h="100%" w="100%">
      <Flex flexDirection="column">
        <Flex flexDirection="column" padding="15px 0px" gap="20px">
          <Box h="20px" />
          <ProfileInfo />
          <KBox type={BoxCase.small}>
            <Flex flexDirection="column" gap="10px" overflowX="hidden" overflowY="scroll" h="350px">
              {myPage.map((item, idx) => {
                return (
                  <a key={idx} href={item.url} target="_blank" rel="noreferrer">
                    <Flex padding="15px" border="1px solid #ddd" borderRadius="15px" justifyContent="space-between" alignItems="center">
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
