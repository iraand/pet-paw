import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useFetch  from "./utils/useFetch";
import CircleLoader from "react-spinners/ClipLoader";

import './scss/main.scss';
import Home from './pages/home'
import {Navbar} from './components/Navbar'

const Voting = lazy(() => import ('./pages/voting'));
const Breeds = lazy(() => import ('./pages/breeds'));
const Breed = lazy(() => import ('./pages/breed'));
const Gallery = lazy(() => import ('./pages/gallery'));
const Search = lazy(() => import ('./pages/search'));
const Favourites = lazy(() => import ('./pages/favourites'));
const Likes = lazy(() => import ('./pages/likes'));
const Dislikes = lazy(() => import ('./pages/dislikes'));

function App() {

  useFetch(); 
  
  return (
    <div className='container'>    
      <Router> 
      <Navbar className="desktop-navbar"/>      
        <Suspense fallback={<CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}>           
          <Routes>           
            <Route exact path={'/pet-paw'} element={<><Navbar className="smartphone-navbar"/> <Home /></>} ></Route>
            <Route path={'/voting'} element={<Voting />} ></Route>
            <Route path={'/breeds'} element={<Breeds />} ></Route>
            <Route path={'/breeds/:id'} element={<Breed />} ></Route>
            <Route path={'/gallery'} element={<Gallery />} ></Route>  
            <Route path={'/search/:id'} element={<Search />} ></Route> 
            <Route path={'/favourites'} element={<Favourites />} ></Route>
            <Route path={'/likes'} element={<Likes />} ></Route> 
            <Route path={'/dislikes'} element={<Dislikes />} ></Route>             
          </Routes>
        </Suspense>
      </Router>                   
    </div>   
  );
}

export default App;
