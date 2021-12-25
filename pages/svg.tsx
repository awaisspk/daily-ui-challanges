import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import {useRef} from 'react';

const SVG = () => {
  const x = useMotionValue(0);
  const input = [0, 100];

  const keyframes = [
    'M 17,10 C 17,10 25.05562,18.111008 32,25 25.283226,31.494766 17,40 17,40',
    'M 32.858258,10 C 32.858258,10 24.802638,18.111008 17.858258,25 24.575032,31.494766 32.858258,40 32.858258,40',
  ];

  const d = useTransform(x, input, keyframes);
  const constrainRef = useRef(null);

  return (
    <Container center>
      <Box
        css={{
          width: 200,
          height: 200,
          borderRadius: '20px',
          backgroundColor: 'rgba(138,74,243,1)',
        }}
        ref={constrainRef}
      >
        <Box
          as={motion.div}
          css={{
            width: 70,
            height: 70,
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          drag
          style={{x}}
          dragConstraints={constrainRef}
        >
          <motion.svg width="40" height="40" viewBox="0 5 40 40">
            <motion.path fill="none" stroke="#000" strokeWidth="2" d={d} />
          </motion.svg>
        </Box>
      </Box>
    </Container>
  );
};

export default SVG;
