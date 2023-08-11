// import styles from './Poster.module.css'
import PosterSearch from './PosterSearch'

const Poster = () => {
  return (
    
<section className=" bg-cover bg-no-repeat bg-[url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg')] bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Welcome.</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Millions of movies, TV shows and people to discover. Explore now.</p>
        <div>
            <PosterSearch/>
        </div>
    </div>
</section>

  )
}

export default Poster