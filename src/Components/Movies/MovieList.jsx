import ToggleMovie from "../UI/Toggle"
import CardList from "./CardList"
import styles from "./MovieList.module.css"


const MovieList = () => {
    return (
        <>
        <ToggleMovie before = "Today" after ="This Week"/>
        <div className="m-4 font-bold text-lg text-gray-700">Trending</div>
        <div className={`w-full ${styles['no-scrollbar']} overflow-x-auto`}>
        <CardList/>
        </div>
         
        </>
    )

}

export default MovieList