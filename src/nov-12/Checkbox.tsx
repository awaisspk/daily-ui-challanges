import {Flex} from '@components/Flex';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import {styled} from '@stitchesConfig';
import {Dispatch, SetStateAction} from 'react';
import {CheckIcon} from './Icons/CheckIcon';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '#fff',
  box: '2rem',
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'backgroundColor 900ms',
  outline: 'none',
  boxShadow: '0 0 0 3px #DFDDF1',
  '&[data-state="checked"]': {
    backgroundColor: 'rgba(22,24,45,0.9)',
  },

  '&:focus': {
    outlineOffset: '2px',
    outline: '2px solid black',
  },
});

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {});

const Label = styled(LabelPrimitive.Root, {
  fontFamily: '$primary',
  fontSize: 'clamp(0.8rem, 0.175rem + 1.333vw, 1rem)',
  lineHeight: '23px',
  color: '#16183e',
  fontWeight: 400,
  userSelect: 'none',
});

type CheckBoxProps = {
  id: string;
  children: React.ReactNode;
  setPercentage: Dispatch<SetStateAction<number>>;
};

export const Checkbox = (props: CheckBoxProps) => {
  const {id, children, setPercentage} = props;

  const handleCheckChange = (event: CheckboxPrimitive.CheckedState) => {
    if (event.valueOf()) {
      setPercentage((value) => value + 20);
    } else {
      setPercentage((value) => value - 20);
    }
  };

  return (
    <Flex center gap="3" css={{alignSelf: 'start',mb :'$2'}}>
      <StyledCheckbox id={id} onCheckedChange={handleCheckChange}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </StyledCheckbox>
      <Label htmlFor={id}>{children}</Label>
    </Flex>
  );
};
