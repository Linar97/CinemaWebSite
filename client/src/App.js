import './App.css';
import HomeComp from './components/Home';
import MainComp from './components/Main';
import MoviesComp from './components/main/Movies';
import SubscriptionsComp from './components/main/Subscriptions';
import AllMoviesComp from './components/main/movies/AllMovies';
import EditMovieComp from './components/main/movies/EditMovie';
import AddMovieComp from './components/main/movies/AddMovie';
import AllMembersComp from './components/main/members/AllMembers';
import AddMemberComp from './components/main/members/AddMember';
import EditMemberComp from './components/main/members/EditMember';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Movies - Subscriptions Web Site</h1>
        <Routes>
          <Route path='/' element={<HomeComp />}></Route>
          <Route path='/main' element={<MainComp />}>
            <Route path='movies' element={<MoviesComp />}>
              <Route path='allMovies' element={<AllMoviesComp />}></Route>
              <Route path='addMovie' element={<AddMovieComp />}></Route>
            </Route>
            <Route path='editMovie' element={<EditMovieComp />}></Route>
            <Route path='editMember' element={<EditMemberComp />}></Route>
            <Route path='members' element={<SubscriptionsComp />}>
              <Route path='allMembers' element={<AllMembersComp />}></Route>
              <Route path='addMember' element={<AddMemberComp />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
