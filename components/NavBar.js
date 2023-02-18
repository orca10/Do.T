import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav className='sticky bottom-0 bg-white max-w-md text-[#808080] border-t w-full pb-3 pt-5 flex justify-between text-sm'>
      {/* 홈 */}
      <Link href={"/"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          {router.pathname === "/" ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[28.04px] h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M10.7765 2.1532L3.22019 8.04127C1.95846 9.02262 0.935059 11.1115 0.935059 12.6956V23.0839C0.935059 26.3363 3.58469 29 6.83715 29H23.0714C26.3239 29 28.9735 26.3363 28.9735 23.0979V12.8919C28.9735 11.1956 27.8379 9.02262 26.45 8.05529L17.7862 1.98497C15.8235 0.611085 12.6691 0.681181 10.7765 2.1532Z"
                fill="#FFA12E"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path d="M14.9541 23.3923V19.1865Z" fill="#FFA12E"></path>
              <path
                d="M14.9541 23.3923V19.1865"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[28.04px] h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M11.3786 2.1532L3.82224 8.04127C2.56051 9.02262 1.53711 11.1115 1.53711 12.6956V23.0839C1.53711 26.3363 4.18674 29 7.4392 29H23.6735C26.9259 29 29.5755 26.3363 29.5755 23.0979V12.8919C29.5755 11.1956 28.44 9.02262 27.0521 8.05529L18.3882 1.98497C16.4255 0.611085 13.2712 0.681181 11.3786 2.1532Z"
                stroke="#808080"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.5562 23.3923V19.1865"
                stroke="#808080"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          )}

          {router.pathname === '/' ? (
            <span className='text-primary font-extrabold'>홈</span>
          ) : (
            <span>홈</span>
          )}
        </a>
      </Link>

      {/* 커뮤니티 */}
      <Link href={"/community"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          <svg width="31" height="30" viewBox="0 0 31 30"
            fill={`${router.pathname.includes('community') ? "#FFA12E" : "#FFFFFF"}`}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M29.4543 6.95011V14.0902C29.4543 15.8682 28.8662 17.3663 27.8162 18.4023C26.7802 19.4523 25.2822 20.0403 23.5041 20.0403V22.5744C23.5041 23.5264 22.4401 24.1004 21.6561 23.5684L20.2981 22.6724C20.4241 22.2384 20.4801 21.7623 20.4801 21.2583V15.5603C20.4801 12.7043 18.5761 10.8002 15.72 10.8002H6.21381C6.01781 10.8002 5.83581 10.8142 5.65381 10.8282V6.95011C5.65381 3.38004 8.03385 1 11.6039 1H23.5041C27.0742 1 29.4543 3.38004 29.4543 6.95011Z"
              stroke={`${router.pathname.includes('community') ? "#FFA12E" : "#808080"}`}
              stroke-width="1.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M20.48 15.5604V21.2584C20.48 21.7625 20.424 22.2385 20.298 22.6725C19.78 24.7305 18.0719 26.0186 15.7199 26.0186H11.9118L7.68373 28.8326C7.05371 29.2666 6.21369 28.8046 6.21369 28.0486V26.0186C4.78567 26.0186 3.59566 25.5426 2.76964 24.7166C1.92963 23.8765 1.45361 22.6865 1.45361 21.2584V15.5604C1.45361 12.9004 3.10564 11.0663 5.65369 10.8283C5.83569 10.8143 6.01769 10.8003 6.21369 10.8003H15.7199C18.5759 10.8003 20.48 12.7044 20.48 15.5604Z"
              stroke={`${router.pathname.includes('community') ? "#FFA12E" : "#808080"}`}
              stroke-width="1.75"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          {router.pathname.includes('community') ? (
            <span className='text-primary font-extrabold'>커뮤니티</span>
          ) : (
            <span>커뮤니티</span>
          )}
        </a>
      </Link>

      {/* 스크랩 */}
      <Link href={"/scrap"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          <svg width="31" height="30" viewBox="0 0 31 30"
            fill={`${router.pathname.includes('scrap') ? "#FFA12E" : "#FFFFFF"}`}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M17.9948 3.02185L20.4789 7.99003C20.8176 8.68162 21.7209 9.34498 22.4831 9.47201L26.9855 10.2201C29.8648 10.6999 30.5423 12.7888 28.4675 14.8495L24.9672 18.3498C24.3744 18.9426 24.0498 20.0858 24.2332 20.9045L25.2354 25.2375C26.0257 28.6672 24.205 29.994 21.1705 28.2015L16.9504 25.7033C16.1882 25.2516 14.932 25.2516 14.1558 25.7033L9.93563 28.2015C6.91521 29.994 5.08037 28.6531 5.87076 25.2375L6.87286 20.9045C7.05635 20.0858 6.73172 18.9426 6.13893 18.3498L2.63862 14.8495C0.577961 12.7888 1.24133 10.6999 4.12061 10.2201L8.62302 9.47201C9.37107 9.34498 10.2744 8.68162 10.6131 7.99003L13.0972 3.02185C14.4522 0.32605 16.654 0.32605 17.9948 3.02185Z"
              stroke={`${router.pathname.includes('scrap') ? "#FFA12E" : "#808080"}`}
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          {router.pathname.includes('scrap') ? (
            <span className='text-primary font-extrabold'>스크랩</span>
          ) : (
            <span>스크랩</span>
          )}
        </a>
      </Link>

      {/* 마이페이지 */}
      <Link href={"/mypage"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          <svg width="26" height="30" viewBox="0 0 26 30"
            fill={`${router.pathname.includes('mypage') ? "#FFA12E" : "#FFFFFF"} `}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0566 15C16.9226 15 20.0566 11.866 20.0566 8C20.0566 4.13401 16.9226 1 13.0566 1C9.19065 1 6.05664 4.13401 6.05664 8C6.05664 11.866 9.19065 15 13.0566 15Z"
              stroke={`${router.pathname.includes('mypage') ? "#FFA12E" : "#808080"}`}
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M25.0823 29.0002C25.0823 23.5822 19.6923 19.2002 13.0563 19.2002C6.42027 19.2002 1.03027 23.5822 1.03027 29.0002"
              stroke={`${router.pathname.includes('mypage') ? "#FFA12E" : "#808080"} `}
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          {router.pathname.includes('mypage') ? (
            <span className='text-primary font-extrabold'>마이페이지</span>
          ) : (
            <span>마이페이지</span>
          )}
        </a>
      </Link>
    </nav >
  )
}