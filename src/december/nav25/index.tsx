import {styled} from '@stitchesConfig';
import * as MenuPrim from '@radix-ui/react-dropdown-menu';
import * as SepPrim from '@radix-ui/react-separator';
import {Bell} from './icons';
import {Flex} from '@components/Flex';
import {data} from './data';
import {Notification} from './notification';
import {useState} from 'react';

export const Nav25 = () => {
  const [state, setState] = useState(false);
  return (
    <MenuPrim.Root
      modal={false}
      open={state}
      onOpenChange={(event) => {
        setState(event);
      }}
    >
      <Trigger>
        <Bell />
      </Trigger>
      <Content asChild side="bottom" sideOffset={5} align="end">
        <section>
          <Wrapper>
            <Flex main="spaceBtw" cross="center">
              <H2>Notifications</H2>
              <Pill>Mark all as read</Pill>
            </Flex>
            <Seperator />

            {data.map((user, i) => {
              return (
                <>
                  <MenuPrim.Item
                    key={user.name + i}
                    onSelect={(event) => {
                      event.preventDefault();
                    }}
                  >
                    <Notification {...user} />
                  </MenuPrim.Item>
                  <Seperator />
                </>
              );
            })}
          </Wrapper>
        </section>
      </Content>
    </MenuPrim.Root>
  );
};

const Trigger = styled(MenuPrim.Trigger, {
  width: '60px',
  height: '60px',
  borderRadius: '$md',
  backgroundColor: '#161544',
  border: 'none',
  '&:hover': {
    backgroundColor: '#444369',
  },
  '&:active': {
    backgroundColor: '#3d3c5e',
  },
});

const Content = styled(MenuPrim.Content, {
  width: 'min(400px,100%)',
  borderRadius: '3%',
  backgroundColor: 'hsl(0 0% 100% / 0.95)',
  py: '40px',
});

const Wrapper = styled('div', {
  width: '85%',
  marginX: 'auto',
});

export const Seperator = styled(SepPrim.Root, {
  backgroundColor: 'rgba(141,144,151,0.3)',
  width: '100%',
  height: 1,
  marginTop: '30px',
  marginBottom: '30px',
  '&:last-child': {
    margin: '0px',
    backgroundColor: 'transparent',
  },
});

const H2 = styled('h3', {
  fontSize: '$5',
});

const Pill = styled('div', {
  fontSize: '0.8rem',
  color: '#4B5ADE',
  backgroundColor: '#F2F4FF',
  borderRadius: '10px',
  px: '$3',
  py: '$1',
  textAlign: 'center',
  userSelect: 'none',
});
