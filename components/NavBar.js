import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  return (
    <nav className='bg-white max-w-md text-[#808080] border-t fixed bottom-0 w-full pb-3 pt-5 flex justify-between text-sm'>
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
          {router.pathname === "/community" ? (
            <svg
              width="29"
              height="28"
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M28.0563 5.95011V13.0902C28.0563 14.8682 27.4683 16.3663 26.4183 17.4023C25.3823 18.4523 23.8842 19.0403 22.1062 19.0403V21.5744C22.1062 22.5264 21.0422 23.1004 20.2581 22.5684L18.9001 21.6724C19.0261 21.2384 19.0821 20.7623 19.0821 20.2583V14.5603C19.0821 11.7043 17.1781 9.80018 14.3221 9.80018H4.81586C4.61986 9.80018 4.43786 9.81421 4.25586 9.82821V5.95011C4.25586 2.38004 6.6359 0 10.206 0H22.1062C25.6763 0 28.0563 2.38004 28.0563 5.95011Z"
                fill="#FFA12E"
              ></path>
              <path
                d="M19.082 14.5604V20.2584C19.082 20.7625 19.026 21.2385 18.9 21.6725C18.382 23.7305 16.674 25.0186 14.3219 25.0186H10.5139L6.28578 27.8326C5.65576 28.2666 4.81574 27.8046 4.81574 27.0486V25.0186C3.38772 25.0186 2.19771 24.5426 1.37169 23.7166C0.531676 22.8765 0.0556641 21.6865 0.0556641 20.2584V14.5604C0.0556641 11.9004 1.70769 10.0663 4.25574 9.82832C4.43775 9.81432 4.61974 9.80029 4.81574 9.80029H14.3219C17.178 9.80029 19.082 11.7044 19.082 14.5604Z"
                fill="#FFA12E"
              ></path>
            </svg>
          ) : (
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M29.4543 6.95011V14.0902C29.4543 15.8682 28.8662 17.3663 27.8162 18.4023C26.7802 19.4523 25.2822 20.0403 23.5041 20.0403V22.5744C23.5041 23.5264 22.4401 24.1004 21.6561 23.5684L20.2981 22.6724C20.4241 22.2384 20.4801 21.7623 20.4801 21.2583V15.5603C20.4801 12.7043 18.5761 10.8002 15.72 10.8002H6.21381C6.01781 10.8002 5.83581 10.8142 5.65381 10.8282V6.95011C5.65381 3.38004 8.03385 1 11.6039 1H23.5041C27.0742 1 29.4543 3.38004 29.4543 6.95011Z"
                stroke="#808080"
                stroke-width="1.75"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20.48 15.5604V21.2584C20.48 21.7625 20.424 22.2385 20.298 22.6725C19.78 24.7305 18.0719 26.0186 15.7199 26.0186H11.9118L7.68373 28.8326C7.05371 29.2666 6.21369 28.8046 6.21369 28.0486V26.0186C4.78567 26.0186 3.59566 25.5426 2.76964 24.7166C1.92963 23.8765 1.45361 22.6865 1.45361 21.2584V15.5604C1.45361 12.9004 3.10564 11.0663 5.65369 10.8283C5.83569 10.8143 6.01769 10.8003 6.21369 10.8003H15.7199C18.5759 10.8003 20.48 12.7044 20.48 15.5604Z"
                stroke="#808080"
                stroke-width="1.75"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          )}

          {router.pathname === '/community' ? (
            <span className='text-primary font-extrabold'>커뮤니티</span>
          ) : (
            <span>커뮤니티</span>
          )}
        </a>
      </Link>
      {/* 스크랩 */}
      <Link href={"/scrap"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          {router.pathname === "/scrap" ? (
            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M17.5969 3.02185L20.0809 7.99003C20.4197 8.68162 21.323 9.34498 22.0851 9.47201L26.5876 10.2201C29.4668 10.6999 30.1443 12.7888 28.0695 14.8495L24.5692 18.3498C23.9764 18.9426 23.6518 20.0858 23.8353 20.9045L24.8374 25.2375C25.6278 28.6672 23.8071 29.994 20.7725 28.2015L16.5524 25.7033C15.7902 25.2516 14.5341 25.2516 13.7578 25.7033L9.53768 28.2015C6.51726 29.994 4.68242 28.6531 5.47281 25.2375L6.47492 20.9045C6.6584 20.0858 6.33377 18.9426 5.74098 18.3498L2.24068 14.8495C0.180011 12.7888 0.843376 10.6999 3.72266 10.2201L8.22507 9.47201C8.97312 9.34498 9.87642 8.68162 10.2152 7.99003L12.6992 3.02185C14.0542 0.32605 16.256 0.32605 17.5969 3.02185Z"
                fill="#FFA12E"
                stroke="#FFA12E"
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
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M17.9948 3.02185L20.4789 7.99003C20.8176 8.68162 21.7209 9.34498 22.4831 9.47201L26.9855 10.2201C29.8648 10.6999 30.5423 12.7888 28.4675 14.8495L24.9672 18.3498C24.3744 18.9426 24.0498 20.0858 24.2332 20.9045L25.2354 25.2375C26.0257 28.6672 24.205 29.994 21.1705 28.2015L16.9504 25.7033C16.1882 25.2516 14.932 25.2516 14.1558 25.7033L9.93563 28.2015C6.91521 29.994 5.08037 28.6531 5.87076 25.2375L6.87286 20.9045C7.05635 20.0858 6.73172 18.9426 6.13893 18.3498L2.63862 14.8495C0.577961 12.7888 1.24133 10.6999 4.12061 10.2201L8.62302 9.47201C9.37107 9.34498 10.2744 8.68162 10.6131 7.99003L13.0972 3.02185C14.4522 0.32605 16.654 0.32605 17.9948 3.02185Z"
                stroke="#808080"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          )}

          {router.pathname === '/scrap' ? (
            <span className='text-primary font-extrabold'>스크랩</span>
          ) : (
            <span>스크랩</span>
          )}
        </a>
      </Link>

      {/* 마이페이지 */}
      <Link href={"/mypage"} legacyBehavior>
        <a className='flex flex-col items-center space-y-2 w-1/4'>
          {router.pathname === "/mypage" ? (
            <svg
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[24.05px] h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M12.2607 14C16.1267 14 19.2607 10.866 19.2607 7C19.2607 3.13401 16.1267 0 12.2607 0C8.39475 0 5.26074 3.13401 5.26074 7C5.26074 10.866 8.39475 14 12.2607 14Z"
                fill="#FFA12E"
              ></path>
              <path
                d="M24.2864 28.0002C24.2864 22.5822 18.8964 18.2002 12.2604 18.2002C5.62437 18.2002 0.234375 22.5822 0.234375 28.0002"
                fill="#FFA12E"
              ></path>
            </svg>
          ) : (
            <svg
              width="27"
              height="30"
              viewBox="0 0 27 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[24.05px] h-7"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M13.6582 15C17.5242 15 20.6582 11.866 20.6582 8C20.6582 4.13401 17.5242 1 13.6582 1C9.79221 1 6.6582 4.13401 6.6582 8C6.6582 11.866 9.79221 15 13.6582 15Z"
                stroke="#808080"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M25.6843 29.0002C25.6843 23.5822 20.2943 19.2002 13.6583 19.2002C7.02232 19.2002 1.63232 23.5822 1.63232 29.0002"
                stroke="#808080"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          )}

          {router.pathname === '/mypage' ? (
            <span className='text-primary font-extrabold'>마이페이지</span>
          ) : (
            <span>마이페이지</span>
          )}
        </a>
      </Link>
    </nav >
  )
}