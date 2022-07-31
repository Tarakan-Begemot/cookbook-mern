import React, { useState, useEffect } from 'react';
import SomeDishCard from './SomeDishCard';

const SomeDish = () => {
  const [soups, setSoups] = useState([]);

  useEffect(() => {
    if (soups.length === 0) {
      async function getRecipes() {
        const response = await fetch(`https://cookbook-backend-group3.herokuapp.com/recipes`);

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }

        const records = await response.json();
        setSoups(records);
      }

      getRecipes();
      return;
    }
  }, [soups.length]);

  return (
    <>
      <div className="row my-5">
        {soups.map((recipe, index) => (
          <SomeDishCard recipe={recipe} key={index} />
        ))}
      </div>
    </>
  );
};

export default SomeDish;
