import {Container} from '@components/Container';
import {css, styled} from '@stitchesConfig';
import {motion} from 'framer-motion';

export const CssConceptsPart1 = () => {
  const cubes = [0, 1, 2, 3];
  return (
    <Container
      center
      css={{
        perspective: '8000px',
        perspectiveOrigin: 'bottom',
        backgroundColor: '#000',
      }}
    >
      <Wrapper
        initial={{rotateX: '-30deg', rotateY: '0deg'}}
        animate={{rotateX: '-30deg', rotateY: '-360deg'}}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <Top />
        <Cube>
          {cubes.map((i) => (
            <Side
              key={i}
              css={{transform: `rotateY(calc(90deg * ${i})) translateZ(100px)`}}
            >
              <Number>0{i + 1}</Number>
            </Side>
          ))}
        </Cube>
        <Bottom />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled(motion.div, {
  position: 'relative',
  width: '200px',
  height: '200px',
  transformStyle: 'preserve-3d',
});

const sidebase = css({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
});

const Cube = styled(motion.div, sidebase, {
  transformStyle: 'preserve-3d',
});

const Side = styled(motion.span, sidebase, {
  background: 'linear-gradient(#151515, #00ec00)',
  transformStyle: 'preserve-3d',
});

const Top = styled(motion.div, sidebase, {
  backgroundColor: 'black',
  transform: 'rotateX(90deg) translateZ(100px)',
});

const Bottom = styled(motion.div, sidebase, {
  backgroundColor: '#00ec00',
  transform: 'rotateX(90deg) translateZ(-180px)',
  filter: 'blur(10px)',
  boxShadow: `0 0 120px rgba(0,255,0,0.4) ,
              0 0 200px rgba(0,255,0,0.4), 
              0 0 300px rgba(0,255,0,0.4), 
              0 0 500px rgba(0,255,0,1) `,
});

const Number = styled('div', sidebase, {
  color: '#fff',
  fontSize: '6rem',
  fontWeight: '$900',
  textAlign: 'center',
  lineHeight: '200px',
  textShadow: '0 0 0 ',
  transform: 'translateZ(30px)',
});
