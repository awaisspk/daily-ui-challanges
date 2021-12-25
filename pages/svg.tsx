import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {motion} from 'framer-motion';

const SVG = () => {
  return (
    <Box
      css={{
        width: '100vw',
        height: '100vh',
        // backgroundColor: 'blue',
        padding: '200px',
      }}
    >
      <svg
        width="200px"
        height="200px"
        viewBox="10 10 100 100"
        style={{
          backgroundColor: 'red',
          overflow: 'visible',
        }}
      >
        <motion.circle
          fill="orange"
          cx="50%"
          cy="50%"
          r="50%"
          strokeWidth="0"
          stroke="#000"
        />
        <line
          x1="0%"
          x2="100%"
          y1="50%"
          y2="50%"
          strokeWidth="5%"
          stroke="green"
        />
        <polygon points="0,0 50,50 100,0" fill="lime" />
        <polyline points="0,0 50,50" strokeWidth="1" stroke="blue" />
      </svg>
      <Example />
    </Box>
  );
};

export default SVG;

export const Example = () => {
  return (
    <Container center css={{position: 'relative', zIndex: 1}}>
      <Box
        css={{
          position: 'absolute',
          zIndex: 3,
          width: 200,
          height: 200,
          backgroundColor: 'rgba(222,22,22,1)',
          '&:before': {
            content: '',
            position: 'absolute',
            transform: 'translate(120%,120%)',
            zIndex: 2,
            width: 100,
            height: 100,
            backgroundColor: 'Orange',
          },
        }}
      ></Box>

      <Box
        css={{
          position: 'absolute',
          transform: 'translate(-100%,-100%)',
          zIndex: 2,
          width: 100,
          height: 100,
          backgroundColor: 'blue',
        }}
      ></Box>
    </Container>
  );
};
