import Layout from 'components/Layout'
import Header from 'components/Header';
import NavBar from 'components/NavBar';

export default function Home() {
  return (
    <>
      <div className='flex w-full mx-auto justify-center'>
        {/* Hook Message */}
        <div className='w-full max-w-md bg-[#FFD203] h-screen'></div>

        {/* Main Contents */}
        <div className='w-full max-w-md bg-[#FFFFFF] h-screen'>
          <Header />
          <div className='mt-20'>
            <div className='w-full relative'>
              <div className='overflow-hidden relative'>
                <div className='flex flex-col flex-wrap flex-none h-52 bg-primary/20 mx-8 rounded-[5px] drop-shadow-box'>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <div className='w-full relative'>
              <div className='overflow-hidden relative'>
                <div className='flex flex-col flex-wrap flex-none h-52 bg-primary/20 mx-8 rounded-[5px] drop-shadow-box'>
                </div>
              </div>
            </div>
          </div>
          <NavBar />
        </div>
      </div>
    </>
  );
};