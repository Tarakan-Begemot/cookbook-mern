import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DishCard from './DishCard';
import SomeDish from './SomeDish';
import './App.css';
import menu from './menu.js';
import { GiChefToque } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { Route, Routes, Link } from 'react-router-dom';
// import useContentful from './useContentful';
import Receipe from './Receipe';
import NoMatch from './NoMatch';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (recipes.length === 0) {
      async function getRecipes() {
        const response = await fetch(`https://cookbook-backend-group3.herokuapp.com/recipes`);

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }

        const records = await response.json();
        setRecipes(records);
      }

      getRecipes();
      return;
    }
  }, [recipes.length]);

  return (
    <div className="container mt-5">
      <div
        className="bg-warning bg-gradient rounded d-flex justify-content-center align-items-center align-self-center"
        style={{ minHeight: 150 }}>
        <IconContext.Provider value={{ size: '100px', color: 'white' }}>
          <div>
            <GiChefToque />
          </div>
        </IconContext.Provider>
        <Link
          to="/cookbookreact"
          className="d-inline my-auto style-none"
          style={{ textDecoration: 'none' }}>
          <h1>CookBook</h1>
        </Link>
      </div>
      <Routes>
        <Route path="/cookbookreact" element={<MainMenu />} />

        <Route path="/cookbookreact/soups" element={<SomeDish />} />
        <Route path="/cookbookreact/soups/:title" element={<Receipe />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <div>
        <div className="bg-warning bg-gradient rounded p-2" style={{ minHeight: 55 }}>
          <p
            className="text-center"
            style={{ fontFamily: 'Roboto', fontSize: '1.5rem', color: '#0d6efd' }}>
            <b>Made by Team-3</b>
          </p>
          <p
            className="text-center"
            style={{ fontFamily: 'Roboto', fontSize: '0.8rem', color: 'grey' }}>
            copyright © 2022 all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

const MainMenu = () => {
  return (
    <div className="row my-5">
      {menu.map((dish, index) => (
        <DishCard dish={dish} key={index} />
      ))}
    </div>
  );
};
