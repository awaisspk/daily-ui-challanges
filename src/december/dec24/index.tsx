import {Box} from '@components/Box';
import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Avatar} from './avatar';
import {styled} from '@stitchesConfig';
import {Settings} from './settings';
import {Card2} from './card2';

export const Dec24 = () => {
  return (
    <Container main="spaceAround" cross="center" wrap="wrap">
      <Card1 />
      <Card2 />
    </Container>
  );
};

const CardContainer = styled('div', Flex, {
  backgroundColor: '#fff',
  boxShadow: ' 0px 44px 88px #D2DBF5',
  borderRadius: '20px',
  width: 'min(440px,100% - 10px)',
  minHeight: '440px',
});

const Card1 = () => {
  return (
    <CardContainer center>
      <Flex flow="col" center gap="6">
        <User />
        <Settings />
      </Flex>
    </CardContainer>
  );
};

const User = () => {
  return (
    <Flex flow="col" center gap="5">
      <Avatar />
      <Flex flow="col" gap="1">
        <Box
          as="h3"
          css={{
            fontSize: '2rem',
            lineHeight: '40px',
            textAlign: 'center',
            color: '#120C35',
          }}
        >
          Ildiko Gasper
        </Box>
        <Box
          as="span"
          css={{
            fontSize: '1rem',
            textAlign: 'center',
            color: '#120C35',
          }}
        >
          Ildiko Gasper
        </Box>
      </Flex>
    </Flex>
  );
};
