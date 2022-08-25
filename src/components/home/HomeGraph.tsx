import React from 'react';
import { Box, Heading, Flex, CSSObject, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Mousewheel, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRecoilValue } from 'recoil';
import { todoGoalListAtom } from '@states/todo';
import { GoalData, CareerPortfolio } from '@components/home/type';
import { ChartList } from '@components/common/Chart';
import { GraphBtn } from '@components/common/KButton';
import KBox from '@components/common/KBox';

const HomeGraph = () => {
  const goals = useRecoilValue<Array<GoalData>>(todoGoalListAtom);

  const myPage: Array<CareerPortfolio> = [
    {
      url: 'https://github.com/cwd3469',
      image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      title: 'Git hub',
    },
    {
      url: 'https://www.tistory.com/',
      image:
        'https://w.namu.la/s/aec084b1eda1878b6aba5c6edba4950075de77d601abdef0894f59c164089a096c2dd305fc578a64f8519dd129f3aea87dc54660d52820a1b33c259f1295501c029b476298a743c46270368b49a10e654d7ed144a377841668564ebb3724b3b0',
      title: 'Tistory',
    },
    {
      url: 'https://www.notion.so/c793454c6cae45f893c9f7e0d89dc84a',
      image:
        'https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png',
      title: 'Notion',
    },
  ];
  const [chartFilter, setChartFilter] = React.useState(String);
  const arr = ['D', 'W', 'M', 'Y'];
  const selectClick = (txt: string) => {
    setChartFilter(txt);
  };
  return (
    <KBox>
      <Flex flexDirection="column" w="100%" h="100%" gap="30px">
        <Box>
          <Flex flexDirection="column" gap="10px">
            <Flex justifyContent="space-between" alignItems="center">
              <SectionTitle text=" Final goal" />
              <Flex alignItems="center" gap="10px">
                <GraphBtn Icon={<StarIcon />} />
                <Heading fontSize="sm" color="#5CBEC7">
                  See All
                </Heading>
              </Flex>
            </Flex>

            <Swiper
              slidesPerView={3.2}
              spaceBetween={10}
              mousewheel={true}
              modules={[Mousewheel, Scrollbar]}
              className="final-swiper">
              {goals.map((x, index) => {
                return (
                  <SwiperSlide key={index}>
                    <FinalItem {...x} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Flex>
        </Box>
        <Box borderTop="1px solid #eee">
          <Flex flexDirection="column" gap="10px" paddingTop="20px">
            <Flex justifyContent="space-between" alignItems="center">
              <SectionTitle text="Todo Chart" />
              <Flex alignItems="center" gap="10px">
                {arr.map((item, index) => {
                  return <GraphBtn key={index} text={item} onClick={() => selectClick(item)} />;
                })}
              </Flex>
            </Flex>
            <ChartList type={chartFilter} />
          </Flex>
        </Box>
        <Box borderTop="1px solid #eee">
          <Flex flexDirection="column" gap="10px" paddingTop="20px">
            <Flex justifyContent="space-between" alignItems="center">
              <SectionTitle text="Go Run!" />
              <Flex alignItems="center" gap="10px">
                <GraphBtn Icon={<StarIcon lineHeight="1" />} />
                <Heading fontSize="sm" color="#5CBEC7">
                  See All
                </Heading>
              </Flex>
            </Flex>
            <Flex alignItems="center" gap="10px">
              {myPage.map((item, index) => {
                return <StartItem key={index} image={item.image} url={item.url} title={item.title} />;
              })}
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </KBox>
  );
};

export const SectionTitle = (props: { text: string }) => {
  return (
    <Heading color="#5CBEC7" fontSize="xl">
      {props.text}
    </Heading>
  );
};

const hoverAction: CSSObject = {
  transition: 'ease-out 0.2s',
  cursor: 'pointer',
  '&:hover': {
    boxShadow: 'rgba(0, 0, 0, 0.35) 3px 3px 10px',
  },
};

const StartItem = (props: CareerPortfolio) => {
  const ItmeStyle: CSSObject = {
    cursor: 'pointer',
    borderRadius: '20px',
    height: '140px',
    backgroundColor: '#fff',
    w: '100px',
    border: '1px solid #eee',
  };
  return (
    <Box sx={{ ...hoverAction, ...ItmeStyle }}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%" gap="10px">
        <Box w="60px" h="60px" bg="#fff" borderRadius="100%" alignItems="center" justifyContent="center">
          <Image w="100%" src={props.image} alt={props.title} />
        </Box>
        <Heading color="#000" fontSize="md">
          {props.title}
        </Heading>
      </Flex>
    </Box>
  );
};

const FinalItem = (props: GoalData) => {
  const BoxClick = (): void => {
    console.log(props.goalId);
  };
  const DoxTitle: CSSObject = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  };

  const ItemStyle: CSSObject = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '5px',
    border: '1px solid #eee',
  };

  return (
    <Box sx={{ ...hoverAction, ...ItemStyle }} onClick={BoxClick}>
      <Flex alignItems="stretch" w="200px">
        <Box w="7px" backgroundColor="salmon" borderRadius="30px" />
        <Flex w="180px" flexDirection="column" padding="10px">
          <Heading color="#C1C3C9" fontSize="10px" paddingBottom="10px" letterSpacing="-1px">
            {props.endDate}
          </Heading>
          <Heading color="#000" fontSize="md" sx={DoxTitle} paddingBottom="5px">
            {props.goalTitle}
          </Heading>
          <Heading color="#C1C3C9" fontSize="13px">
            D - 100
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HomeGraph;
