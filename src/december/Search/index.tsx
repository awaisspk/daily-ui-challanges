import {Container} from '@components/Container';
import {Flex} from '@components/Flex';
import {Trigger} from '@radix-ui/react-dropdown-menu';
import {styled} from '@stitchesConfig';
import {SearchIcon} from './icons';
import {JobsMenu} from './jobs';

const NavContainer = styled('div', Flex, {
  width: 'min(1000px, 100%)',
  height: '90px',
  borderRadius: '$full',
  backgroundColor: '#FFFAF1',
  boxShadow: '0px 17px 42px -16px #F3D7BE',
});

const Nav = styled('nav', Flex, {});

export const JobSearch = () => {
  return (
    <Container main="center" css={{backgroundColor: '#FDF5E7'}}>
      <NavContainer cross="center" main="spaceBtw">
        <Flex css={{width: '90%', marginX: 'auto'}} main="spaceBtw">
          <Search />
          <Nav>
            <JobsMenu />
          </Nav>
        </Flex>
      </NavContainer>
    </Container>
  );
};

const IconBox = styled('div', {});
const Input = styled('input', {
  all: 'unset',
  color: '#182A6A',
  width: '100%',
  fontWeight: '$600',
  height: '100%',

  '&::placeholder': {
    color: 'inherit',
  },
});

const Search = () => {
  return (
    <Flex
      gap="2"
      center
      css={{
        width: 'min(400px, 100%)',
        transition: '300ms',
      }}
    >
      <IconBox>
        <SearchIcon />
      </IconBox>
      <Input type="text" placeholder="Search job by keywords" />
    </Flex>
  );
};
