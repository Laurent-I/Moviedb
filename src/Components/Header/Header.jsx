import logo from '../../assets/images/logo.png'
import { Popover, Whisper} from 'rsuite'
import { useState } from 'react'
 
const movietooltip = (
  <Popover className='absolute'>
    <ul className='bg-gray-700 w-32 flex flex-col rounded-lg'>
    <li className='hover:cursor-pointer p-2 hover:bg-blue-400 w-full rounded-md hover:font-bold'>Popular</li> 
    <li className='hover:cursor-pointer p-2 hover:bg-blue-400 w-full rounded-md hover:font-bold'>Now Playing</li>
    <li className='hover:cursor-pointer p-2 hover:bg-blue-400 w-full rounded-md hover:font-bold'>Top Rated</li> 
    <li className='hover:cursor-pointer p-2 hover:bg-blue-400 w-full rounded-md hover:font-bold'>Upcoming</li>
    </ul>
    </Popover>
)

function Header() {
  const [isSearchClicked, setSearchClicked] = useState(false);

  const defaultSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-10 cursor-pointer">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
  
  const clickedSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-10 hover:cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

  );
  
  const svgToRender = isSearchClicked ? clickedSVG : defaultSVG;
    
  const handleSearchClick = () => {
    setSearchClicked(!isSearchClicked);
  };
  const searchInput = isSearchClicked ? <input type="text" placeholder="Enter your search" className='flex'/> : null;
  return (
    <div className='h-16 w-full bg-blue-800 flex p-3 items-center justify-between'>
      {/* Logo */}
      <div className='flex'>
      <img src={logo} alt="Logo" className='h-10 mr-1'/>
        <p className='font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-green-500 to-blue-400 mr-4'>WATCHZY</p>
      </div>
        
        <div className='flex items-center'>
          {/* Navigation */}
        <nav className='flex items-center'>
      <ul className='flex space-x-2 items-center font-bold gap-8' >
        <Whisper placement='bottom' trigger='hover' controlId='control-id-hover-enterable' speaker={movietooltip} enterable>
<li className='hover:text-blue-400 movie'>
        <a href="#">Movies</a>
        </li>
        </Whisper>
        <Whisper placement='bottom' trigger='hover' controlId='control-id-hover-enterable' speaker={movietooltip} enterable>
<li className='hover:text-blue-400 movie'>
        <a href="#">TV Shows</a>
        </li>
        </Whisper>
        <Whisper placement='bottom' trigger='hover' controlId='control-id-hover-enterable' speaker={movietooltip} enterable>
<li className='hover:text-blue-400 movie'>
        <a href="#">People</a>
        </li>
        </Whisper>
        <Whisper placement='bottom' trigger='hover' controlId='control-id-hover-enterable' speaker={movietooltip} enterable>
<li className='hover:text-blue-400 movie'>
        <a href="#">More</a>
        </li>
        </Whisper>
      </ul>
    </nav>
</div>
    {/* Search */}
    <div>
    <div onClick={handleSearchClick}>
        {svgToRender}
      </div>
      {searchInput}
      </div>
    </div>
  )
}

export default Header