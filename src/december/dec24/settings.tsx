import {Box} from '@components/Box';
import {Flex} from '@components/Flex';
import {Dots, Pen, Smile} from './icons';

const data = [
  {
    name: 'set a status',
    icon: <Smile />,
  },
  {
    name: 'Edit Profile',
    icon: <Pen />,
  },
  {
    name: 'More',
    icon: <Dots />,
  },
];

export const Settings = () => {
  return (
    <Flex gap="5" wrap="wrap" center>
      {data.map((d, i) => (
        <Flex
          flow="col"
          key={`${d}-${i}`}
          center
          css={{
            border: '1px solid #C2CDEF',
            borderRadius: '10px',
            width: '100px',
            height: '70px',
          }}
        >
          {d.icon}
          <Box as="span">{d.name}</Box>
        </Flex>
      ))}
    </Flex>
  );
};
