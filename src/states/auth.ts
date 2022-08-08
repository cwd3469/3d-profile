import { atom, selector } from 'recoil';
import { CareerBlock as CareerBlockInterface } from '@components/career/type';
import { CareerPortfolio, Mybodyinfo } from '@components/home/type';

const authCareerInfo = atom<Array<CareerBlockInterface>>({
  key: 'authCareerInfo',
  default: [
    {
      id: 's-0',
      title: '업무경험',
      section: [
        {
          sectionTitle: '주식회사 피엘지(PLZ Co. Ltd.)',
          setTitle: ': 마이크로 물류 서비스 신규 배달대행서비스',
          subheadings: '프론트엔드 개발자',
          date: '2022-03 ~ 재직 중 (5개월)',
          tag: ['ReactJS', 'Typescript'],
          list: [
            {
              title: '백오피스 프로젝트 프론트 개발 2022-03 배달대행 서비스',
              date: '2021 - 03',
              contents: [
                '백오피스 프론트 개발',
                '배달대행 서비스 백오피스 메인 그래프차트 개발',
                '프론트엔드 기술 검토',
              ],
            },
          ],
        },
        {
          sectionTitle: 'RMT KOREA',
          setTitle: ': 포인트 쇼핑몰 및 결제 시스템',
          subheadings: '퍼블리셔',
          date: '2020-08 ~ 2021-08 (1년 1개월)',
          tag: ['Vue.js', 'Vanilla', 'Javascript', 'jQuery', 'HTML5', 'CSS3', 'CSS3', 'CSS3', 'CSS3'],
          list: [
            {
              title: '포인트거래소 웹시스템 키오스크서비스 구축 프로젝트 참여',
              date: '2021-05 ~ 2021-08 ',
              contents: ['키오스크 서비스 디자인 퍼블리싱 개발 및 유지보수', '키오스크 거래 테스트 '],
            },
            {
              title: '포인트거래소 웹시스템 디자인 퍼블리싱 프로젝트',
              date: '2021-03 ~ 2021-05 ',
              contents: [
                '포인트 거래소 웹시스템 UI 개발',
                '포인트 거래소 웹시스템 반응형 웹 사이트 개발 및 유지보수',
                '포인트 거래소 구글 스토어 출시 참여',
              ],
            },
            {
              title: '쇼핑몰 웹시스템 키오스크 연동 프로젝트 참여               ',
              date: '2021-02 ~ 2021-03',
              contents: ['쇼핑몰 웹시스템 와 키오스크 연동 시 디자인 및 UIUX 개선', '쇼핑몰 키오스크 명세서 출력 개발'],
            },
            {
              title: '쇼핑몰 웹시스템 디자인 리뉴얼 참여 ',
              date: '2020-09 ~ 2021-02 ',
              contents: [
                '쇼핌몰 웹시스템 디자인 리뉴얼 퍼블리싱 개발',
                '쇼핑몰 웹시스템 웹 표준화 개발',
                '디자이너 외주 관리',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's-1',
      title: '학력',
      section: [
        {
          sectionTitle: '한양사아버대학교',
          setTitle: '4학년 재학',
          subheadings: '컴퓨터 공학 전공 • 학사',
          date: '2021-01 ~ 재학 중',
        },
        {
          sectionTitle: '청강문화산업대',
          setTitle: '3.5 / 4.5 학점 ',
          subheadings: '조리과 전공 • 전문학사',
          date: '2012-03 ~ 2016-02',
        },
      ],
    },
    {
      id: 's-2',
      title: '개인 프로젝트',
      section: [
        {
          sectionTitle: 'Biz Chemy MBTI 취미 메이트 매칭 서비스',
          setTitle:
            'MBTI 궁합지표를 기반으로 나랑 궁합이 맞는 유저를 매칭 시켜서 서로 커뮤니케이션하는 어플리케이션입니다.',
          sectionLink: 'https://github.com/MBTI-matching/MMfrontend',
          sectionContents: [
            '소켓통신 채팅 구현 : stomp.js를 사용 TCP소켓 통신 구현 , socket통신 상태 주기에 따른 메세지 전송 - socket 메세지 전송 개선',
            '내정보 페이지 구현 & 추가 정보 페이지 구현 : 코드 재사용성을 중점으로 구현 , 프로필이미지 error 개선 ->browser-image-compression 사용해 이미지 사이즈를 2mb으로 축소해 서버로 전달',
          ],
          date: '2021-01 ~ 재학 중',
          tag: ['ReactJS', 'Redux.js', 'Redux-Thunk', 'styled-components'],
        },
      ],
    },
    {
      id: 's-3',
      title: '활동',
      section: [
        {
          sectionTitle: '항해99 4기 스파르타 코딩 클럽',
          sectionLink: 'https://spartacodingclub.kr',
          sectionContents: [
            'REACT',
            '- REDUX를 활용한 데이터 관리',
            '- AXIOS를 활용한 DB데이터 관리',
            '- styled-components에 ThemeProvider 활용한 스타일 관리',
            '- 클라이언트 사이드 렌더링 이해',
            '- 리엑트 라이프사이클에 이해',
            '- CRUD 구현',
            '- 파이어베이스',
          ],
          date: '2021-11 ~ 2022-02',
        },
        {
          sectionTitle: '그린컴퓨터 학원 퍼블리셔 과정',
          sectionContents: [
            'HTML 5',
            '- 시멘틱 마크업',
            '',
            'css 3.0',
            '- transition 속성을 활용한 사용자 인터렉션 tramsition 메뉴제작',
            '- A@keyframe 코드를 사용한 인트로 모션 제작',
            '- ::before,::after 가상요소를 활용한 사용자 인터렉션 에니메이션 제작',
            '- @media screen 코드를 이용한 반응형 웹페이지 하드코딩 제작            ',
            '- flex,grid속성을 활용한 반응형 웹페이지 하드코딩 제작            ',
            '',
            'js',
            '- 자바스크립트 ES6 기본 core문법',
            '- 자바스크립트 Dom -요소찾는것  ',
            '- web animation APL를 활용한 사용자 인터렉션 하드코딩  ',
            '- 바닐자자바스크립트를 황용한 사용자 인터렉션 하드코딩 ',
          ],
          date: '2021-11 ~ 2022-02',
        },
      ],
    },
  ],
});

const authCareerPortfolio = atom<Array<CareerPortfolio>>({
  key: 'authCareerPortfolio',
  default: [
    {
      url: 'https://github.com/cwd3469',
      image: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      title: 'Git hub',
    },
    {
      url: 'https://jooganesik.tistory.com/',
      image:
        'https://w.namu.la/s/aec084b1eda1878b6aba5c6edba4950075de77d601abdef0894f59c164089a096c2dd305fc578a64f8519dd129f3aea87dc54660d52820a1b33c259f1295501c029b476298a743c46270368b49a10e654d7ed144a377841668564ebb3724b3b0',
      title: 'Tistory',
    },
    {
      url: 'https://3d-profile.site/',
      image: 'https://cdn-icons-png.flaticon.com/512/208/208761.png',
      title: '3d-profile',
    },
    {
      url: 'https://www.bizchemy.com/',
      image: 'https://www.bizchemy.com/static/media/appIcon.21942fbb31686cb7c99e.png',
      title: 'Bizchemy',
    },
  ],
});

const authUserInfo = atom<Mybodyinfo>({
  key: 'authUserInfo',
  default: {
    autherProfileImage: 'https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_1280.jpg',
    autherName: 'JooYoung choi',
    autherAge: '29 year South Korea',
    autherBlood: 'A',
    autherHeight: '170',
    autherWeight: '85',
    autherId: 'autherId123',
  },
});

export { authCareerInfo, authCareerPortfolio, authUserInfo };
