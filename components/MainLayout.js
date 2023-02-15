import Header from './Header';
import NavBar from './NavBar';

const MainLayout = ({ children }) => {
  return (
    <div className='flex mx-auto justify-center '>

      {/* Hook Message */}
      {/* <div className='w-full max-w-md h-[] bg-[#FFD203]'></div> */}

      {/* Main Contents */}
      <div className='w-full max-w-md bg-[#FFFFFF]'>
        <Header />
        <div className='min-h-screen'>{children}</div>
        <NavBar />
      </div>
    </div >
  );
};

export default MainLayout