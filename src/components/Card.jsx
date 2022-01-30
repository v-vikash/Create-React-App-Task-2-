import React from 'react';
import '../styles/Card.css'

const Card = ({ person }) => {
  return <div className='project col3'>
      <div className='profile'>
        <img src={person.avatar} alt={person.first_name} />
        <h4 className='name'>{person.first_name + " " + person.last_name}</h4>
        <h4 className='email'>{person.email}</h4>
      </div>
  </div>;
};

export default Card;
