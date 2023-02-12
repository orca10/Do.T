import Layout from 'components/Layout'
import Main from './main';
import Community from './community';

export default function Home() {
  return (
    <>
      <Layout children={<Community />} />
    </>
  );
};