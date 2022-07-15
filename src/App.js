import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CircleLoader from "react-spinners/ClipLoader";

import './scss/main.scss';
import Home from './pages/home'
import {Navbar} from './components/Navbar'



const Voting = lazy(() => import ('./pages/voting'));
const Breeds = lazy(() => import ('./pages/breeds'));
const Breed = lazy(() => import ('./pages/breed'));
const Gallery = lazy(() => import ('./pages/gallery'));

function App() {
  return (
    <div className='container'>    
      <Router> 
        <Navbar />       
        <Suspense fallback={<CircleLoader speedMultiplier={1} color={"#FF868E"} size={150} className="loader"/>}>           
          <Routes>           
            <Route exact path={'/'} element={<Home />} ></Route>
            <Route path={'/voting'} element={<Voting />} ></Route>
            <Route path={'/breeds'} element={<Breeds />} ></Route>
            <Route path={'/breed/:id'} element={<Breed />} ></Route>
            <Route path={'/gallery'} element={<Gallery />} ></Route>          
          </Routes>
        </Suspense>
      </Router>                   
    </div>   
  );
}

export default App;
