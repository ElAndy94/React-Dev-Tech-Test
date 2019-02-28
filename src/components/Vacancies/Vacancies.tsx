import React from 'react';

import './Vacancies.scss';
import Vacancy from './Vacancy/Vacancy';

interface Props {}

const vacancies = (props: Props) => {
  return (
    <div className='vacancies'>
      <h1>Vacancies</h1>
      <p>
        To get a feel for what it’s like to work for us then please visit Who We
        Are or see what we’ve been up to within ITC News. <br /> Due to
        continued growth, we currently have the following vacancy:
      </p>
      <Vacancy />
    </div>
  );
};

export default vacancies;
