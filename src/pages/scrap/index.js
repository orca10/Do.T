import MainLayout from 'components/MainLayout'

export default function Scrap() {
  return (
    <>
      <MainLayout>
        <div className='w-full relative'>
          <div className='overflow-hidden relative'>
            {/* TODO: url 연결 */}
            <a>
              <div className='flex flex-col h-40 bg-white border-t-[1px] border-[#eaeaea] pl-2'>
                <div className='flex justify-center items-center mt-3 w-20 h-5 bg-[#EFEFEF] text-primary px-3 text-center text-[10px] rounded-xl'>생활비</div>
                <span className='mt-4 text-sub'>한국장학재단</span>
                <span className='mt-4 font-bold'>푸른등대 기부장학금</span>
                <span className='mt-4 text-primary text-xs'>D-7</span>
                <div className='absolute mt-6 right-3 w-28 h-28 bg-primary/20'></div>
              </div>
            </a>
            <div className='flex flex-col h-40 bg-white border-t-[1px] border-[#eaeaea] pl-2'>
              <div className='flex justify-center items-center mt-3 w-20 h-5 bg-[#EFEFEF] text-primary px-3 text-center text-[10px] rounded-xl'>생활비</div>
              <span className='mt-4 text-sub'>한국장학재단</span>
              <span className='mt-4 font-bold'>푸른등대 기부장학금</span>
              <span className='mt-4 text-primary text-xs'>D-7</span>
              <div className='absolute mt-6 right-3 w-28 h-28 bg-primary/20'></div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};