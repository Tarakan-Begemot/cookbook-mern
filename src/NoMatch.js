import React from 'react';
import { Link, useParams } from 'react-router-dom';

const NoMatch = () => {
  const capitalize = (string) => {
    return string.slice(14, 15).toUpperCase() + string.slice(15);
  };
  const variable = useParams();
  const variable1 = JSON.stringify(variable);
  const variable2 = variable1.replace('*', 'name');
  const variable3 = JSON.parse(variable2);

  return (
    <>
      <div style={{ minHeight: 316 }} className="p-5 text-center m-5">
        <h1 className="mb-5">
          "At the moment, we have no recipes for <b>{capitalize(variable3.name)}</b>"
        </h1>
        <Link to="/cookbook-mern">
          <button className="btn btn-warning mt-5">Go to Main</button>
        </Link>
      </div>
    </>
  );
};

export default NoMatch;
