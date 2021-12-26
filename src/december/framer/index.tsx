import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {styled} from '@stitchesConfig';
import * as SliderPrimitive from '@radix-ui/react-slider';
import {motion} from 'framer-motion';
import {Dispatch, SetStateAction, useState} from 'react';
import {Flex} from '@components/Flex';
import Image from 'next/image';

export const Framer = () => {
  return (
    <Container center css={{backgroundColor: '#0099CC'}}>
      <Title>
        <Hover data-content="HOVER">HOVER</Hover>
      </Title>
    </Container>
  );
};

const Title = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  perspective: '300px',
  perspectiveOrigin: '50% 50%',
});

const Hover = styled('h1', {
  textAlign: 'center',
  fontSize: '12vmin',
  color: 'hsl(100 100% 0% / 0.8)',
  lineHeight: '1rem',
  transform: 'rotateY(50deg)',
  perspective: '150px',
  perspectiveOrigin: '0% 50%',
  transition : '300ms',
  '&:hover': {
    transform: 'rotateY(0deg)',
  },
});

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
