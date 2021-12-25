import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {styled} from '@stitchesConfig';
import * as SliderPrimitive from '@radix-ui/react-slider';
import {motion} from 'framer-motion';
import {Dispatch, SetStateAction, useState} from 'react';
import {Flex} from '@components/Flex';

export const Framer = () => {
  const [x, setX] = useState([0]);
  const [y, setY] = useState([0]);
  return (
    <Container center>
      <Box
        css={{
          backgroundColor: 'blue',
          position: 'relative',
          width: 200,
          height: 200,
          borderRadius: '10px',
          transformOrigin: `${x}% ${y}%`,
          transform: 'translateX(400px) rotate(45deg)',
        }}
        as={motion.div}
        // animate={{rotate: 360}}
        // transition={{repeat: Infinity, duration: 2}}
      >
        <Box
          css={{
            width: 10,
            height: 10,
            borderRadius: '10px',
            transform: `translate(calc(${x}px + ${x}px) ,calc(${y}px + ${y}px)) `,
            // transform: `translate(95px,95px)`,
            backgroundColor: 'red',
            position: 'absolute',
          }}
        />
      </Box>
      <Box css={{position: 'absolute', top: 100, left: 100}}>
        <Flex gap="3">
          <Slider value={x} setValue={setX} />
          <span>{x}</span>
        </Flex>
        <Flex gap="3">
          <Slider value={y} setValue={setY} />
          <span>{y}</span>
        </Flex>
      </Box>
    </Container>
  );
};

const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
});

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: 'rgba(0,0,0,0.5)',
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': {height: 3},
  '&[data-orientation="vertical"]': {width: 3},
});

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',
  height: '100%',
});

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  borderRadius: 10,
});

type SliderProps = {
  value: number[];
  setValue: Dispatch<SetStateAction<number[]>>;
};

const Slider = ({value, setValue}: SliderProps) => {
  return (
    <form>
      <StyledSlider
        defaultValue={[50]}
        min={0}
        value={value}
        onValueChange={setValue}
        max={100}
        step={1}
        aria-label="Volume"
      >
        <StyledTrack>
          <StyledRange />
        </StyledTrack>
        <StyledThumb />
      </StyledSlider>
    </form>
  );
};
