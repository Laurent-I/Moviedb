import logo from '../../assets/images/logo.png'
import {Tooltip}  from 'react-tooltip'
import LinkTooltipContent from './LinkToolTipContent';
import { useState } from 'react';


 
function Header() {
    const [isOpen , setIsOpen] = useState(false)

    const mouseLeaveHandler = ()=>{
        setIsOpen(false)
    }
    const mouseEnterHandler = () => {
        setIsOpen(true)
    }
    
  return (
    <div className='h-16 w-full bg-blue-800 flex p-3 items-center'>
        <img src={logo} alt="Logo" className='h-10 mr-1'/>
        <p className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 mr-4'>WATCHERS</p>
        <div className='flex items-center justify-between'>
        <nav className='flex items-center'>
      <ul className='flex space-x-2 items-center font-bold gap-4'>
        <li className='hover:text-blue-400 movie' data-tooltip-id='movie' data-tooltip-variant='light'>
        <a href="#">Movies</a>
          <Tooltip id='movie' isOpen={isOpen} place="bottom" content={ <LinkTooltipContent />} delayShow={300} className='p-2 cursor-pointer' openOnClick />
        </li>
        <li className='hover:text-blue-400' data-tooltip-id='movie' onMouseLeave={mouseLeaveHandler} onClick={mouseEnterHandler}> 
        <a href="#">TV Shows</a>
          <Tooltip  place="bottom" content={ <LinkTooltipContent />} delayShow={300}/>
        </li>
        <li className='hover:text-blue-400'data-tooltip-id='movie' onMouseEnter={mouseEnterHandler} onClick={mouseLeaveHandler}>
        <a href="#">People</a>
          <Tooltip  place="bottom" content={ <LinkTooltipContent />} delayShow={300}/>
        </li>
        <li className='hover:text-blue-400' data-tooltip-id='movie' onMouseEnter={mouseEnterHandler} onClick={mouseLeaveHandler}>
        <a href="#">More</a>
          <Tooltip  place="bottom" content={<LinkTooltipContent />} delayShow={300}/>
        </li>
      </ul>
    </nav>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-auto">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
</div>

    </div>
  )
}

export default Header