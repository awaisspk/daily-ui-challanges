import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {keyframes, styled} from '@stitchesConfig';
import {motion} from 'framer-motion';

const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
});

const Gradient = styled('div', Flex, {
  borderRadius: '100%',
  width: '250px',
  height: '250px',
  background:
    'conic-gradient(from 180deg at 50% 50%, #000000, #0f0506, #241013, #41161f, #651b2e, #8b1e3d, #ae1e4b, #c71c55, #d11b59)',
  animation: `${spin} 0.8s linear infinite`,
});

const Box = styled('div', {
  width: 'calc(100% - 10px)',
  height: 'calc(100% - 10px)',
  borderRadius: '100%',
  backgroundColor: '#000',
  color: '#fff',
});

export const Loading = () => {
  return (
    <Container center css={{backgroundColor: '#000000'}}>
      <Flex
        center
        css={{
          width: 300,
          height: 300,
        }}
      >
        <Gradient center>
          <Box />
        </Gradient>
        <Text
          css={{
            position: 'absolute',
            color: '#fff',
            fontWeight: '600',
            fontSize: '$3',
          }}
        >
          Loading...
        </Text>
      </Flex>
    </Container>
  );
};
