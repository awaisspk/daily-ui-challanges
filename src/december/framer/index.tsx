import {Container} from '@components/Container';
import {styled} from '@stitchesConfig';
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

const Progress = styled('svg', {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  background: 'blue',
});

const Path = styled(motion.path, {
  pathLength: '1',
  strokeWidth: 4,
  stroke: 'Black',
  fill : 'BlanchedAlmond',
});

export const Framer = () => {
  const {scrollYProgress} = useViewportScroll();
  return (
    <>
      <Progress>
        <Path />
      </Progress>
    </>
  );
};
