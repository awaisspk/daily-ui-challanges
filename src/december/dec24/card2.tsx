import {Box} from '@components/Box';
import {Flex} from '@components/Flex';

const data = [
  'login',
  'join',
  'Change language',
  'Image & vedio API',
  'App & Plugins',
  'FAQ',
  'Partnerships',
  'Inprint & Terms',
];

export const Card2 = () => {
  return (
    <Flex
      as="ul"
      flow="col"
      css={{
        userSelect: 'none',
        backgroundColor: '#2D2559',
        listStyleType: 'none',
        px: '$4',
        py: '$4',
        borderRadius: '10px',
      }}
    >
      {data.map((d, i) => (
        <Box
          key={d + i}
          as="li"
          css={{
            color: '#fff',
            fontWeight: '500',
            width: '200px',
            px: '$4',
            py: '$2',
            borderRadius: '5px',
            '&:hover': {
              background: 'rgba(145, 36, 89, 0.2)',
            },
          }}
        >
          {d}
        </Box>
      ))}
    </Flex>
  );
};
