import MainLayout from 'components/MainLayout'
import Main from './main';
import Community from './community';
import Mypage from './mypage';

export default function Home() {
  return (
    <>
      <MainLayout children={<Main />} />
    </>
  );
};