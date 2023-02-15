import MainLayout from 'components/MainLayout'
import DropDown from 'components/DropDown/DropDown';

export default function Community() {
  return (
    <>
      <MainLayout>
        <div>
          <DropDown />
        </div>
        <div className='mt-5'>
          <div className='w-full relative'>
            <div className='overflow-hidden relative'>
              <div className='flex flex-col flex-wrap flex-none h-44'>
                <a className='flex cursor-pointer flex-col pt-4 items-start'>
                  {/* 분류 */}
                  <div className='px-4 text-gray-400 text-xs'><span>대학생활</span></div>

                  {/* 제목 */}
                  <span className="flex items-center mt-1 px-4 py-1 text-base font-normal">[D.HARA] 카드뉴스 디자인</span>

                  {/* 본문 */}
                  <span className="flex items-center mt-1 px-4 py-1 text-sm font-normal text-gray-400">
                    안녕하세요! 디하라 서포터즈 4기입니다.<br></br>디하라는 포토샵과 일러스트를 이용하여 ∙∙∙</span>

                  {/* 좋아요 & 댓글 */}
                  <div className='px-4 flex items-center w-full font-medium text-xs my-5'>
                    {/* 좋아요 */}
                    <div className="flex">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.36365 12.9393C8.13444 13.0202 7.75691 13.0202 7.5277 12.9393C5.57264 12.2719 1.2041 9.48764 1.2041 4.76854C1.2041 2.68539 2.88275 1 4.95242 1C6.17938 1 7.26478 1.59326 7.94568 2.51011C8.62657 1.59326 9.71871 1 10.9389 1C13.0086 1 14.6872 2.68539 14.6872 4.76854C14.6872 9.48764 10.3187 12.2719 8.36365 12.9393Z" stroke="#FF5A54" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <span className='ml-2'>0</span>

                      {/* 댓글 */}
                      <div className='flex'>
                        <svg
                          className='ml-4'
                          width="14"
                          height="14"
                          iewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.57486 11.1695H4.27576C1.88293 11.1695 0.686523 10.5713 0.686523 7.58026V4.58923C0.686523 2.19641 1.88293 1 4.27576 1H9.0614C11.4542 1 12.6506 2.19641 12.6506 4.58923V7.58026C12.6506 9.97308 11.4542 11.1695 9.0614 11.1695H8.7623C8.57685 11.1695 8.39739 11.2592 8.28373 11.4088L7.38642 12.6052C6.99161 13.1316 6.34555 13.1316 5.95073 12.6052L5.05342 11.4088C4.95771 11.2772 4.73637 11.1695 4.57486 11.1695Z" stroke="#85BCFF" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M9.05949 6.38406H9.06486" stroke="#85BCFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M6.66593 6.38406H6.67131" stroke="#85BCFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M4.27238 6.38406H4.27775" stroke="#85BCFF" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className='ml-2'>0</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <div className='overflow-hidden relative'>
              <div className='flex flex-col flex-wrap flex-none h-40 bg-primary/20 rounded-[5px] drop-shadow-box'>
              </div>
            </div>
          </div>
          <div className='w-full relative'>
            <div className='overflow-hidden relative'>
              <div className='flex flex-col flex-wrap flex-none h-40 bg-primary/20 rounded-[5px] drop-shadow-box'>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>

    </>
  );
};

