import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {Root, Image, Fallback} from '@radix-ui/react-avatar';
import {styled} from '@stitchesConfig';

const Wrapper = styled('div', Flex, {
  width: 120,
  height: 120,
  borderRadius: '100%',
  backgroundColor: '#ECF0FC',
});

const StyledRoot = styled(Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 'calc(100% - 20px)',
  height: 'calc(100% - 20px)',
  borderRadius: '100%',
});

const StyledImage = styled(Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});
const StyledFallback = styled(Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: '#bcc0c9',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

export const Avatar = () => {
  return (
    <Wrapper center>
      <StyledRoot>
        <StyledImage src="/galaxyx.jpg" />
        <StyledFallback />
      </StyledRoot>
    </Wrapper>
  );
};
