import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import Container from 'react-bootstrap/Container';
import Movie from './components/Movie';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [search, setSearch] = useState("Batman");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    let keyWord = search;
    console.log(keyWord)
    if (keyWord) {

      axios.get('https://www.omdbapi.com/?apikey=394a13bb&s=' + search)
        .then(async function (response) {
          console.log(response.data.Search)
          setSearchResults(response.data.Search);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [searchResults, search])
  return (
    <>
      <TopBar search={search} setSearch={setSearch} />
      <div className='movieBox'>
        {searchResults ?
          searchResults.map(movie => {
            return (
              <Movie movie={movie} />
            )
          }) : "No Movies Found"
        }
      </div>
    </>
  );
}

export default App;
