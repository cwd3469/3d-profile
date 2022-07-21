import { CSSObject, Heading, Box, Flex, Input, Textarea } from "@chakra-ui/react";
import KBox from "@components/common/KBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const CareerSide = () => {
  return (
    <KBox>
      <Flex flexDirection="column" gap="15px">
        <Swiper direction={"vertical"} slidesPerView={6} spaceBetween={0} mousewheel={true} modules={[Mousewheel]} className="career-swiper">
          <SwiperSlide>
            <CareerBox title="타입라인">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CareerBox title="업무경험">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <CareerBox title="학력">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <CareerBox title="개인 프로젝트">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            <CareerBox title="수상/자격증">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <CareerBox title="출판/논문/특허">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            <CareerBox title="테스트/과제관 결과">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            <CareerBox title="활동">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            <CareerBox title="외국어">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>

          <SwiperSlide>
            {" "}
            <CareerBox title="첨부 파일">
              <Box w="100%" h="100%"></Box>
            </CareerBox>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </KBox>
  );
};

interface CareerBox {
  children: JSX.Element;
  title: string;
}

const CareerBox = (props: CareerBox) => {
  const careerBox: CSSObject = {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "20px",
    bg: "#fff",
  };
  return (
    <Box sx={careerBox}>
      <Flex alignItems="stretch">
        <Heading fontSize="md" color="#333" flexGrow="1">
          {props.title}
        </Heading>
        <Box flexGrow="8">{props.children}</Box>
      </Flex>
    </Box>
  );
};

export default CareerSide;
