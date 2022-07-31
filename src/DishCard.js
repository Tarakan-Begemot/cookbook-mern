import React from 'react';
import { Link } from 'react-router-dom';

function DishCard({ dish }) {
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="col-lg-3 padding-edit my-2">
      <Link to={'/cookbook-mern/' + dish.title} className="text-decoration-none">
        <div className="card p-2 shadow-lg m-auto" style={{ width: '95%', minHeight: 300 }}>
          <img src={dish.image} className="card-img-top" alt={capitalize(dish.title)} />
          <div className="card-body  py-auto">
            <p className="card-title text-center text-dark fs-4">{capitalize(dish.title)}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DishCard;
