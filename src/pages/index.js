import Layout from 'components/Layout'
import Main from './main';
import Community from './community';
import Mypage from './mypage';

export default function Home() {
  return (
    <>
      <Layout children={<Main />} />
    </>
  );
};