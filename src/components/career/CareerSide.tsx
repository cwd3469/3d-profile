import { Flex } from '@chakra-ui/react';
import KBox from '@components/common/KBox';
import 'swiper/css';
import 'swiper/css/pagination';
import { CareerBlock } from './CareerCommon';
import { CareerBlock as CareerBlockInterface } from '@components/career/type';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authCareerInfo } from '@states/auth';

const CareerSide = () => {
  const data = useRecoilValue<Array<CareerBlockInterface>>(authCareerInfo);
  return (
    <KBox>
      <Flex flexDirection="column" gap="25px" overflowY="scroll" overflowX="hidden" h="708px">
        {data.map((contents, index) => {
          return <CareerBlock key={index} {...contents} />;
        })}
      </Flex>
    </KBox>
  );
};

export default CareerSide;
