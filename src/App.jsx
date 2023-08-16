import "./App.css";
import Header from "./Components/Header/Header";
import Poster from "./Components/Navbar/Poster";
import MovieList from "./Components/Movies/MovieList";


function App() {
  return (
    
    <div className="font-mono" >
    <Header />
      {/* <Card /> */}
      <Poster/>
      <MovieList/>
    </div> 
  );
}

export default App;
