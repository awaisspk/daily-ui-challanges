import {Container} from '@components/Container';
import {styled} from '@stitchesConfig';
import {AnimateSharedLayout, motion} from 'framer-motion';
import {useState} from 'react';

const menuItems = ['Lorem', 'ipsum', 'dolor', 'sit'];

export const NOV24 = () => {
  return (
    <Container center>
      <Menu />
    </Container>
  );
};

const Item = styled(motion.li, {
  listStyle: 'none',
  cursor: 'pointer',
  position: 'relative',
});

const Underline = styled(motion.div, {
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  height: '4px',
  borderRadius: '15px',
  opacity: 0.85,
  backgroundColor: 'white',
});

type MenuItemProps = {
  text: string;
  selected: boolean;
  onClick: React.MouseEventHandler<HTMLLIElement>;
};

const MenuItem = ({text, selected, onClick}: MenuItemProps) => {
  return (
    <Item
      onClick={onClick}
      initial={{opacity: 0.5}}
      animate={{opacity: selected ? 1 : 0.5}}
    >
      {text}
      {selected && <Underline layoutId="underline" />}
    </Item>
  );
};

const Wrapper = styled('nav', {
  width: 'min(400px, 100vw - 20px)',
  backgroundColor: '#ffd11b',
  px: 'clamp(1rem, 5%, 1.5rem)',
  py: '1rem',
  borderRadius: '10px',
});

const StyledMenu = styled('ul', {
  display: 'flex',
  gap: '$5',
});

const Menu = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Wrapper>
      <AnimateSharedLayout>
        <StyledMenu>
          {menuItems.map((mi, i) => (
            <MenuItem
              text={mi}
              key={i}
              selected={selected === i}
              onClick={() => setSelected(i)}
            />
          ))}
        </StyledMenu>
      </AnimateSharedLayout>
    </Wrapper>
  );
};
