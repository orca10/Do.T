import Header from './Header';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className='flex w-full mx-auto justify-center'>
      {/* Hook Message */}
      <div className='w-full max-w-md bg-[#FFD203] h-screen'></div>

      {/* Main Contents */}
      <div className='w-full max-w-md bg-[#FFFFFF] h-screen'>
        <Header />
        <NavBar />
      </div>
    </div>
  );
};

export default Layout