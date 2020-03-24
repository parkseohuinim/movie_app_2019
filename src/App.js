import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRn-owKdGg249Q0W6JKMS3sj3fmA-1NAXHbmF_Mpv0936nk2CnN',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjiNclNYVVilJjHmtGFoJ-AIM_-jmKxLD6XWs5DWDxaeIuBocQ',
    rating: 4.3
  }
];

function Food({name, picture, rating}) {
  return <div>
          <h2>I like {name}</h2>
          <h4>{rating} / 5.0</h4>>
          <img src={picture} alt={name}></img>
        </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.picture} 
          rating={dish.rating}>
        </Food>
      ))}
    </div>
  );
}

export default App;
