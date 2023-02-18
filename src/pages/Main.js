import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Main() {
  return (
    <>
      <div className='w-full relative'>
        <div className='overflow-hidden relative'>
          <div className='flex flex-col flex-wrap flex-none h-52 bg-primary/20 mx-8 rounded-[5px] drop-shadow-box mt-4'>
            <h1>배너</h1>
          </div>
        </div>
      </div>


      {/* 장학금, 공모전, 대외활동 */}
      <div className='bg-[#FFFFFF] grid grid-cols-3 grid-rows-1 mx-8 mt-14 gap-x-10'>
        <div className='w-full h-20 bg-primary/20 rounded-[5px] drop-shadow-box flex justify-center items-center'>
          <Link href={'/scholarship'}>
            <span>장학금</span>
          </Link>
        </div>
        <div className='w-full h-20 bg-primary/20 rounded-[5px] drop-shadow-box flex justify-center items-center'>
          <Link href={'/contest'}>
            <span>공모전</span>
          </Link>
        </div>
        <div className='w-full h-20 bg-primary/20 rounded-[5px] drop-shadow-box flex justify-center items-center'>
          <Link href={'/activity'}>
            <span>대외활동</span>
          </Link>
        </div>
      </div>

      {/* 추천 정보 */}
      <div className='mt-10'>
        <div className='w-full relative'>
          <div className='overflow-hidden relative'>
            <span className='mx-8 text-xl font-bold'>추천 정보</span>
            <div className='mt-8 flex flex-col flex-wrap flex-none h-52 bg-primary/20 mx-8 rounded-[5px] drop-shadow-box'>
              <h1>추천정보</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};