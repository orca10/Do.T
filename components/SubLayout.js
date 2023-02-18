import SubHeader from './SubHeader';
import { useRouter } from 'next/router'

const SubLayout = ({ children }) => {
  var HeaderTitle = ""
  const router = useRouter()

  if (router.pathname.includes('scholarship')) {
    HeaderTitle = "장학금"
  }
  if (router.pathname.includes('contest')) {
    HeaderTitle = "공모전"
  }
  if (router.pathname.includes('activity')) {
    HeaderTitle = "대외활동"
  }

  return (
    <div className='flex mx-auto justify-center '>
      <div className='w-full max-w-md bg-[#FFFFFF]'>
        <SubHeader title={HeaderTitle} />
        <div className='min-h-screen'>{children}</div>
      </div>
    </div >
  );
};

export default SubLayout