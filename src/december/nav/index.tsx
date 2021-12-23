import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {styled} from '@stitchesConfig';
import {motion} from 'framer-motion';
import React, {ReactNode, useEffect, useState} from 'react';
import {Message, Settings, Camera, Home, User} from './icons';

const data = [
  {
    name: 'Home',
    icon: <Home />,
  },
  {
    name: 'Profile',
    icon: <User />,
  },
  {
    name: 'Message',
    icon: <Message />,
  },
  {name: 'Camera', icon: <Camera />},
  {
    name: 'Settings',
    icon: <Settings />,
  },
];

const Nav = styled('nav', Flex, {
  background: '#fcfcfc',
  borderRadius: '1.5rem',
  position: 'relative',
  height: '100px',
  px: '$7',
});

const Circle = styled(motion.div, {
  position: 'absolute',
  width: '70px',
  height: '70px',
  background: '#2bfa56',
  top: '-40%',
  borderRadius: '100%',
  zIndex: '1',
  border: '5px solid #1d1e22',
  transition: '0.5s',

  '&::after': {
    content: '',
    position: 'absolute',
    top: '58%',
    left: '-19px',
    width: '20px',
    height: '20px',
    borderTopRightRadius: '20px',
    boxShadow: '0 -10px 0 0 #1d1e22',
  },

  '&::before': {
    content: '',
    position: 'absolute',
    top: '58%',
    right: '-19px',
    width: '20px',
    height: '20px',
    borderTopLeftRadius: '20px',
    boxShadow: '0 -10px 0 0 #1d1e22',
  },
});

export const MobileNav = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  return (
    <Container center css={{background: '#1d1e22'}}>
      <Nav>
        <Flex as="ul">
          {data.map((link, i) => (
            <MenuLink
              key={link.name + i}
              {...link}
              index={i}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
          <Circle
            layout
            css={{
              transform: `translateX(${70 * activeItem}px)`,
            }}
          />
        </Flex>
      </Nav>
    </Container>
  );
};

const LinkWrapper = styled('li', Flex, {
  flexShrink: 0,
  position: 'relative',
  width: '70px',
  zIndex: 2,

  '& svg': {
    width: '35px',
  },
});

const LinkText = styled('span', {
  position: 'absolute',
  fontSize: '0.9rem',
  color: '#7a7a7a',
  userSelect: 'none',
  opacity: 0,
  transition: '0.5s',
  transform: 'translateY(30px)',
  variants: {
    active: {
      true: {
        opacity: 1,
        transform: 'translateY(15px)',
      },
    },
  },
});

const Icon = styled('div', {
  transition: '0.5s',
  variants: {
    active: {
      true: {
        transform: 'translateY(-100%)',
      },
    },
  },
});

type MenuLinkProps = {
  icon: ReactNode;
  name: string;
  index: number;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
  activeItem: number | null;
};

const MenuLink = ({
  icon,
  name,
  index,
  activeItem,
  setActiveItem,
}: MenuLinkProps) => {
  const isActive = activeItem === index;
  return (
    <LinkWrapper flow="col" center gap="1" onClick={() => setActiveItem(index)}>
      <Icon active={isActive}>{icon}</Icon>
      <LinkText active={isActive}>{name}</LinkText>
    </LinkWrapper>
  );
};
