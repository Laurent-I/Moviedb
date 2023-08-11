import ToggleMovie from "../UI/Toggle"
import CardList from "./CardList"

const MovieList = () => {
    return (
        <>
        <ToggleMovie before = "Today" after ="This Week"/>
        <div className="m-4 font-bold text-lg text-gray-700">Trending</div>
        <div className="mx-24">
        <CardList/>
        </div>
         
        </>
    )

}

export default MovieList