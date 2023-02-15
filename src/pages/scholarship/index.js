import SubLayout from 'components/SubLayout'
import SsDropDown from 'components/DropDown/SsDropDown'
import PriorityDropDown from 'components/DropDown/PriorityDropDown'

export default function Scholarship() {
  return (
    <>
      <SubLayout>
        <div className='w-full px-3 h-14'>
          <div className='float-left'><SsDropDown /></div>
          <div className='float-right'><PriorityDropDown /></div>
        </div>
        <div className='w-full relative'>
          <div className='overflow-hidden relative'>
            <div className='flex flex-col flex-wrap flex-none h-40 bg-white border-t-[1px] border-[#eaeaea] mt-5'>
              <h1>배너</h1>
            </div>
            <div className='flex flex-col flex-wrap flex-none h-40 bg-white border-t-[1px] border-[#eaeaea]'>
              <h1>배너</h1>
            </div>
            <div className='flex flex-col flex-wrap flex-none h-40 bg-white border-t-[1px] border-[#eaeaea]'>
              <h1>배너</h1>
            </div>
          </div>
        </div>
      </SubLayout>
    </>
  )
}