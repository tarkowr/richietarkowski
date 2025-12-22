import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Landing } from './components/Landing/Landing';
import { Projects } from './components/Projects/Projects';
import { Error } from './components/Error/Error';

export const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
}

const Home = () => {
    return (
      <>
        <Landing />
        <Projects />
      </>
    );
}