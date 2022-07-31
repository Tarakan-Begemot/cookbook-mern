import React from 'react';
import { Link } from 'react-router-dom';

function SomeDishCard({ recipe }) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="col-lg-3 padding-edit my-2">
      <Link
        to={'/cookbookreact/soups/' + recipe.title.toLowerCase().replaceAll(' ', '-')}
        className="text-decoration-none">
        <div className="card p-2 shadow-lg m-auto" style={{ width: '95%', minHeight: 300 }}>
          <div style={{ overflow: 'hidden' }}>
            <img
              src={recipe.foto}
              className="card-img-top"
              alt={capitalize(recipe.title)}
              style={{ maxHeight: 177, objectFit: 'cover' }}
            />
          </div>
          <div className="card-body  py-auto">
            <p className="card-title text-center text-dark fs-4">{capitalize(recipe.title)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SomeDishCard;
