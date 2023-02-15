import Link from 'next/link'
import TextLogo from 'data/text+logo.svg'

export default function SubHeader({ title }) {
  return (
    <div className='bg-[#FFFFFF] w-full h-14 max-w-md sticky top-0 items-center'>
      {/* GoBack Button */}
      <Link className='absolute ml-4 pt-4' href={'/'}>
        <svg width="11" height="21" viewBox="0 0 11 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.25385 20.124C9.03467 20.124 8.81549 20.0433 8.64246 19.8702L1.12119 12.349C-0.101594 11.1262 -0.101594 9.11898 1.12119 7.89619L8.64246 0.374925C8.97699 0.0403897 9.53071 0.0403897 9.86524 0.374925C10.1998 0.70946 10.1998 1.26317 9.86524 1.59771L2.34397 9.11898C1.79026 9.67269 1.79026 10.5725 2.34397 11.1262L9.86524 18.6475C10.1998 18.982 10.1998 19.5357 9.86524 19.8702C9.69221 20.0317 9.47303 20.124 9.25385 20.124Z" fill="#FFA12E" />
        </svg>
      </Link>
      <div className='font-bold text-primary text-center text-lg pt-3'>{title}</div>
    </div>
  )
}