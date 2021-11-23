import {Flex} from '@components/Flex';
import {styled} from '@stitches/react';
import {motion} from 'framer-motion';
import {Text} from '@components/Text';

type Props = {
  value: number;
};

export const Progress = ({value}: Props) => {
  return (
    <Flex center gap="4" css={{width: '100%',mb : '1rem'}}>
      <Text
        css={{
          fontWeight: 'bold',
          fontSize: '1.8rem',
          color : 'rgba(22, 24, 46, 0.9)'
        }}
      >
        {value}%
      </Text>
      <Range>
        <StyledProgress
          initial={{width: '0%'}}
          animate={{width: `${value}%`}}
        />
      </Range>
    </Flex>
  );
};

const Range = styled('div', {
  all: 'unset',
  position: 'relative',
  height: '12px',
  width: '100%',
  backgroundColor: '#ecebfb',
  borderRadius: '15px',
});

const StyledProgress = styled(motion.div, {
  position: 'absolute',
  backgroundColor: '#16182e',
  height: '100%',
  borderRadius: '15px',
});
