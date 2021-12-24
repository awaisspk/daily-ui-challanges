import type {NextPage} from 'next';
import {Dec24} from 'src/december/dec24';
import {Framer} from 'src/december/framer';
import {Loading} from 'src/december/Loading';
import {MobileNav} from 'src/december/nav';
import {JobSearch} from 'src/december/Search';
import {Nov23} from 'src/nov-23';
import {NOV24} from 'src/nov-24';
import {Nov25} from 'src/nov-25';

const Home: NextPage = () => {
  return (
    <div>
      {/* <Nov23 /> */}
      {/* <NOV24 /> */}
      {/* <Nov25 /> */}
      {/* <MobileNav /> */}
      {/* <Framer/> */}
      {/* <Loading /> */}
      {/* <JobSearch /> */}
      <Dec24 />
    </div>
  );
};

export default Home;
