import { CSSObject, Heading, Box, Flex, Input, Textarea } from "@chakra-ui/react";
import KBox from "@components/common/KBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { CareerBlock } from "./CareerCommon";
import { CareerBlock as CareerBlockInterface } from "@components/career/type";

const CareerSide = () => {
  const data: Array<CareerBlockInterface> = [
    {
      title: "업무경험",
      section: [
        {
          sectionTitle: "주식회사 피엘지(PLZ Co. Ltd.)",
          setTitle: ": 마이크로 물류 서비스 신규 배달대행서비스",
          subheadings: "프론트엔드 개발자",
          date: "2022-03 ~ 재직 중 (5개월)",
          tag: ["ReactJS", "Typescript"],
          list: [
            {
              title: "백오피스 프로젝트 프론트 개발 2022-03 배달대행 서비스",
              date: "2021 - 03",
              contents: ["백오피스 프론트 개발", "배달대행 서비스 백오피스 메인 그래프차트 개발", "프론트엔드 기술 검토"],
            },
          ],
        },
        {
          sectionTitle: "RMT KOREA",
          setTitle: ": 포인트 쇼핑몰 및 결제 시스템",
          subheadings: "퍼블리셔",
          date: "2020-08 ~ 2021-08 (1년 1개월)",
          tag: ["Vue.js", "Vanilla", "Javascript", "jQuery", "HTML5", "CSS3"],
          list: [
            {
              title: "포인트거래소 웹시스템 키오스크서비스 구축 프로젝트 참여",
              date: "2021-05 ~ 2021-08 ",
              contents: ["키오스크 서비스 디자인 퍼블리싱 개발 및 유지보수", "키오스크 거래 테스트 "],
            },
            {
              title: "포인트거래소 웹시스템 디자인 퍼블리싱 프로젝트",
              date: "2021-03 ~ 2021-05 ",
              contents: ["포인트 거래소 웹시스템 UI 개발", "포인트 거래소 웹시스템 반응형 웹 사이트 개발 및 유지보수", "포인트 거래소 구글 스토어 출시 참여"],
            },
            {
              title: "쇼핑몰 웹시스템 키오스크 연동 프로젝트 참여               ",
              date: "2021-02 ~ 2021-03",
              contents: ["쇼핑몰 웹시스템 와 키오스크 연동 시 디자인 및 UIUX 개선", "쇼핑몰 키오스크 명세서 출력 개발"],
            },
            {
              title: "쇼핑몰 웹시스템 디자인 리뉴얼 참여 ",
              date: "2020-09 ~ 2021-02 ",
              contents: ["쇼핌몰 웹시스템 디자인 리뉴얼 퍼블리싱 개발", "쇼핑몰 웹시스템 웹 표준화 개발", "디자이너 외주 관리"],
            },
          ],
        },
      ],
    },
  ];
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
