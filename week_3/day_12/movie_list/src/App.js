import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MoviesPage from './components/MoviesPage';
import AddMoviePage from './components/AddMoviePage';

// unlock storage on Firebase

// install bootstrap
// install react-router-dom
// install firebase

// create components folder
// create firebase folder
// create models folder
// create services folder

// scaffold AddMoviesPage component
// scaffold MoviesPage component
// create our MoviesPage CSS

// create firebase file
// copy previous config file & add Storage

// scaffold Movie Modal

// scaffold file service
// scaffold our movie service
// update Movie model

// setup our Routing between pages
// update our AddMoviesPage
// update file service
// update our movie service
// complete our AddMoviesPage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />}></Route>
        <Route path="/add-movie" element={<AddMoviePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
