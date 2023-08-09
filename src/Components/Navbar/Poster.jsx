import poster from '../../assets/images/poster.jpg'
// import styles from './Poster.module.css'
import PosterSearch from './PosterSearch'

const Poster = () => {
  return (
    <div className='flex items-center justify-center relative '>
        <div className='h-2/4 w-2/3 relative '>
        <div className='absolute  flex flex-wrap font-mono m-5 flex-col  opacity-100'>
            <h1 className='font-extrabold text-6xl py-4 '>Welcome.</h1>
            <p className='font-extrabold text-2xl mb-4'>Millions of movies, TV shows and people to discover. Explore now.</p>
            {/*Search*/}
            <PosterSearch/>
        </div>

        <img src={poster} alt="Poster" className/>
        </div>
       
    </div>
  )
}

export default Poster