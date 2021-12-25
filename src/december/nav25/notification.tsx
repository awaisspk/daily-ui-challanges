import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {styled} from '@stitchesConfig';
import Image from 'next/image';

type Props = {
  imgSrc: string;
  content: string;
  time: string;
  name: string;
};

export const Notification = (props: Props) => {
  const {time, imgSrc, content, name} = props;
  return (
    <Flex flow="col" cross="center" gap="5">
      <Flex gap="4" main="center">
        <Avatar src={imgSrc} name={name} />
        <Flex flow="col" gap="3">
          <Text>
            <span>{name}</span>
            {content}
          </Text>
          <Time>{time}</Time>
        </Flex>
      </Flex>
      <Flex gap="3">
        <Button ghost>Decline</Button>
        <Button>Accept</Button>
      </Flex>
    </Flex>
  );
};

type AvatarProps = {
  src: string;
  name: string;
};

const Avatar = ({src, name}: AvatarProps) => {
  return (
    <Box css={{position: 'relative'}}>
      <Image src={src} alt={name} width={80} height={80} />
    </Box>
  );
};

const Text = styled('div', {
  fontWeight: '$400',
  '& span': {
    fontSize: '1rem',
    fontWeight: '$700',
    mr: '1ch',
  },
});

const Time = styled('time', {
  color: 'rgba(22, 21, 68, 0.6)',
  fontSize: '$2',
  fontWeight: '$300',
});

const Button = styled('button', {
  px: '$8',
  py: '$4',
  border: 'none',
  borderRadius: '10px',
  background: '#161544',
  color: '#fff',

  variants: {
    ghost: {
      true: {
        backgroundColor: 'transparent',
        border: '1px solid #16154466',
        color: '#161544',
      },
    },
  },
});
