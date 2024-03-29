import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { Dashboard, AddCircleOutline, AccountCircle, SvgIconComponent } from '@mui/icons-material';

import { useRouter } from 'next/router';

interface NavList {
  path: string;
  Icon: SvgIconComponent;
  name: string;
}

const Menu = () => {
  const navList: Array<NavList> = [
    {
      path: '/',
      Icon: Dashboard,
      name: 'Dashboard',
    },
    {
      path: '/todo?mode=view',
      Icon: AddCircleOutline,
      name: 'Todo',
    },
    {
      path: '/career',
      Icon: AccountCircle,
      name: 'Career',
    },
  ];

  return (
    <Box bg="#089BAB" borderRadius="20px" h="100%">
      <Flex direction="column" align="center" justify="center" h="100%">
        {navList.map((nav, index) => {
          return <MenuNav key={index} path={nav.path} Icon={nav.Icon} name={nav.name} />;
        })}
      </Flex>
    </Box>
  );
};

const MenuNav = (props: NavList) => {
  const router = useRouter();

  const style = {
    color: '#fff',
    backgroundColor: '#089BAB',
  };

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(props.path);
  };

  return (
    <Button style={style} variant="solid" borderRadius="50px" h="100px" w="75%" onClick={handleClick}>
      <Flex direction="column" alignItems="center" fontSize="12px" gap="5px">
        <props.Icon fontSize="small" />
        <Text fontSize="12px">{props.name}</Text>
      </Flex>
    </Button>
  );
};

export default Menu;
