import TextLogo from 'data/text+logo.svg'
import Link from 'next/link';

export default function Header() {
  return (
    <div className='z-10 bg-[#FFFFFF] w-full h-14 max-w-md px-5 font-medium sticky top-0 flex items-center mb-4'>
      {/* logo */}
      <Link className='absolute' href={'/'}>
        <TextLogo />
      </Link>

      {/* search */}
      <Link className='absolute left-[80%]' href={'/search'}>
        <svg
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M25.3652 25L19.5652 19.2M22.6986 11.6667C22.6986 17.5577 17.9229 22.3333 12.0319 22.3333C6.14086 22.3333 1.36523 17.5577 1.36523 11.6667C1.36523 5.77563 6.14086 1 12.0319 1C17.9229 1 22.6986 5.77563 22.6986 11.6667Z"
            stroke="#444444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </Link>

      {/* alert */}
      <Link className='absolute right-5' href={'/alert'}>
        <svg
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M14.9303 25H9.8777M19.983 8.57895C19.983 6.56889 19.1845 4.64115 17.7631 3.21982C16.3418 1.79849 14.4141 1 12.404 1C10.394 1 8.46622 1.79849 7.04489 3.21982C5.62356 4.64115 4.82506 6.56889 4.82506 8.57895C4.82506 12.4823 3.8404 15.1549 2.74043 16.9226C1.81259 18.4137 1.34868 19.1593 1.36569 19.3673C1.38452 19.5976 1.43331 19.6854 1.61889 19.823C1.78649 19.9474 2.54202 19.9474 4.05309 19.9474H20.7549C22.266 19.9474 23.0215 19.9474 23.1891 19.823C23.3747 19.6854 23.4235 19.5976 23.4423 19.3673C23.4593 19.1593 22.9954 18.4137 22.0676 16.9226C20.9676 15.1549 19.983 12.4823 19.983 8.57895Z"
            stroke="#444444"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

      </Link>
    </div>
  )
}