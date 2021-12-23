import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import * as MenuPrimitive from '@radix-ui/react-dropdown-menu';
import {styled} from '@stitchesConfig';
import {useState} from 'react';
import {DropdownIcon} from './icon';

const MenuContent = styled(MenuPrimitive.Content, {});
const Label = styled(MenuPrimitive.Label, {});
const Menu = MenuPrimitive.Root;

const Trigger = styled(MenuPrimitive.Trigger, Flex, {
  borderRadius: '0.3em',
  border: '1px solid  rgba(15, 23, 48, 1)',
  px: '$2',
  py: '$1',
  overflow: 'hidden',
});

const Item = styled(MenuPrimitive.Item, {});

export const Nov25 = () => {
  const [open, setisOpen] = useState(false);
  return (
    <Container center>
      <Menu onOpenChange={() => setisOpen(!open)}>
        <Trigger center gap="1">
          Names <DropdownIcon open={open} />
        </Trigger>
        <MenuContent>
          <Item>Name</Item>
          <Item>Last invoiced</Item>
          <Item>Most income generated</Item>
          <Item>Less income generated</Item>
        </MenuContent>
      </Menu>
    </Container>
  );
};
