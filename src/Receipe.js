import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Receipe = () => {
  const reci = useParams();
  const reciTitle = reci.title.toLowerCase().replaceAll(' ', '-');

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    if (recipe.length === 0) {
      async function getRecipes() {
        // const reci = await useParams();
        const response = await fetch(`https://cookbook-backend-group3.herokuapp.com/recipes/${reciTitle}`);

        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          console.error(message);
          return;
        }

        const records = await response.json();

        setRecipe((prev) => [...prev, records]);
      }

      getRecipes();
      return;
    }
  }, [recipe.length]);

  if (recipe.length > 0) {
    return (
      <div className="my-5">
        <div className="p-4 shadow-lg m-auto" style={{ width: '95%', minHeight: 300 }}>
          <img
            src={recipe[0].foto}
            className="card-img-top"
            alt="salad"
            style={{ width: '50%', padding: 20 }}
          />
          <div
            className="py-auto d-inline-block"
            style={{
              maxHeight: 800,
              width: '50%',
              verticalAlign: 'middle',
              padding: 20,
              overflow: 'scroll',
            }}>
            <h1 className="text-center text-dark mb-4">{recipe[0].title}</h1>
            <p className="text-center text-dark mb-3" style={{ fontStyle: 'italic' }}>
              {recipe.shortDescription}
            </p>
            <div className="text-center border rounded shadow-sm m-2 p-2">
              <p className="d-inline pe-3">Serves: {recipe[0].info[0]} People</p>
              <p className="d-inline">Cooking time: {recipe[0].info[1]} Minutes</p>
            </div>
            <div className="border rounded shadow-sm m-2 p-3">
              <h3 className="text-center">Ingredients</h3>
              <ul>
                {recipe[0].ingredients.map((i, index) => (
                  <li key={index}>{i}</li>
                ))}
              </ul>
            </div>

            <div className="border rounded shadow m-2 p-4">
              <h3 className="text-center mb-3">Procedure</h3>
              {recipe[0].descr.map((el, index) => (
                <p key={index}>{el}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Receipe;
