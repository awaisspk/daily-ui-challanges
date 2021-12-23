import {Flex} from '@components/Flex';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  Root,
} from '@radix-ui/react-dropdown-menu';
import {styled} from '@stitchesConfig';
import {useState} from 'react';
import {Trigger} from './trigger';

const jobList = [
  'All jobs',
  'Web developer',
  'Andriod developer',
  'Ios developer',
  'Frontend developer',
  'Backend developer',
  'Full stack enginner',
  'Cloud developer',
  'Artificial engineer',
  'Computer networking',
  'Data science',
  'Machine learning',
];

const Content = styled(DropdownMenuContent, {
  backgroundColor: 'white',
  userSelect: 'none',
  px: '$5',
  py: '$5',
  boxShadow: '0px 17px 42px -16px #F3D7BE',
  borderRadius: '20px',
});

const RadioGroup = styled(DropdownMenuRadioGroup, Flex, {});
const RadioItem = styled(DropdownMenuRadioItem, {
  // backgroundColor: '#FDF5E7',
  borderRadius: '20px',
  px: '10px',
  py: '4px',
  outlineColor: '#FDF5E7',
});

export const JobsMenu = () => {
  const [selected, setSelected] = useState(jobList[0]);
  return (
    <DropdownMenu modal={false}>
      <Trigger>{selected}</Trigger>
      <Content>
        <RadioGroup
          value={selected}
          onValueChange={setSelected}
          gap="1"
          flow="col"
        >
          {jobList.map((job, i) => (
            <RadioItem key={`job ${i}`} value={job}>
              {job}
            </RadioItem>
          ))}
        </RadioGroup>
      </Content>
    </DropdownMenu>
  );
};
