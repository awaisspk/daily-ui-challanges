import {Flex} from '@components/Flex';
import {DropdownMenuTrigger} from '@radix-ui/react-dropdown-menu';
import {styled} from '@stitchesConfig';
import {Chevron} from './chevron';

const Wrapper = styled('div', Flex, {
  width: '100px',
  margin: 'auto',
  height: '40px',
  backgroundColor: 'transparent',
});

const StyledTrigger = styled(DropdownMenuTrigger, {
  width: '120px',
  borderRadius: '$full',
  height: '100%',
  backgroundColor: '#fff',
  border: 'none',
  '&:focus:not(:focus-visible)': {
    outline: 'none',
  },
  '&:focus-visible': {
    outline: '2px solid #FCE2C2',
  },
});

const Text = styled('span', {
  width: '80px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  userSelect: 'none',
  textOverflow: 'ellipsis',
});

const IconBox = styled('div', {
  width: 30,
  height: 26,
});

type Props = React.ComponentProps<typeof StyledTrigger>;

export const Trigger = (props: Props) => {
  const {children} = props;
  return (
    <StyledTrigger>
      <Wrapper center>
        <Text>{children}</Text>
        <IconBox>
          <Chevron />
        </IconBox>
      </Wrapper>
    </StyledTrigger>
  );
};
