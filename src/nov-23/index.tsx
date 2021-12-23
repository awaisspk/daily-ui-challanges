import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Text} from '@components/Text';
import {useEffect, useState} from 'react';
import {Checkbox} from './Checkbox';
import {Progress} from './Progress';

export const Nov23 = () => {
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    console.log(percentage);
  }, [percentage]);
  return (
    <Container center>
      <Flex
        flow="col"
        center
        gap="3"
        css={{
          backgroundColor: '#f7f6ff',
          px: 'clamp(1rem, 5%, 3rem)',
          py: '3rem',
          borderRadius: '20px',
          width : 'min(420px, 100vw - 20px)'
        }}
      >
        <Flex flow="col" css={{width : '70%',alignSelf : 'start'}}>
          <Text
            as="h1"
            css={{
              fontSize: 'clamp(1rem, 4vw + 1rem, 1.5rem)',
              fontWeight: '$700',
              alignSelf: 'start',
              mb : '0.5rem'
            }}
          >
            Take a quick tour
          </Text>
          <Text
            css={{
              fontSize: 'clamp(0.6rem, 4vw + 0.2rem, 1rem)',
              alignSelf: 'start',
              mb : '0.5rem'
            }}
          >
            Here are a few steps to help you hti the ground
          </Text>
        </Flex>
        <Progress value={percentage} />
        <Checkbox id="1" setPercentage={setPercentage}>
          Experience contextual conversations
        </Checkbox>
        <Checkbox id="2" setPercentage={setPercentage}>
          Brand your customer experience
        </Checkbox>
        <Checkbox id="3" setPercentage={setPercentage}>
          Offer support beyond your website
        </Checkbox>
        <Checkbox id="4" setPercentage={setPercentage}>
          Top customer support with bots
        </Checkbox>
        <Checkbox id="5" setPercentage={setPercentage}>
          Build your team
        </Checkbox>
      </Flex>
    </Container>
  );
};
