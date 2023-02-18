import SubHeader from './SubHeader';

const SubLayout = ({ children }) => {

  var HeaderTitle = ""

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