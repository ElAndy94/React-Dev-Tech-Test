import React from 'react';

import './JobItem.scss';
import locationImg from '../../../assets/images/shape.svg';

const jobItem = (props: any) => (
  <li key={props._id} className='jobs__list'>
    <div className='job__item'>
      <h1>{props.title}</h1>
      <p className='item--desc'>{props.desc}</p>
      <div className='item--location'>
        <img src={locationImg} className='locationImg' />
        <h2>{props.location}</h2>
      </div>
      <p className='item--salary'>£ {props.salary} Annual Salary</p>
      <div className='item-button'>
        <button>More Info</button>
      </div>
    </div>
  </li>
);

export default jobItem;
