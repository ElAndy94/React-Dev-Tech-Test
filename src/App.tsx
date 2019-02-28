import React from 'react';

import './App.scss';
import Vacancies from './components/Vacancies/Vacancies';
import JobList from './components/JobList/JobList';

interface Props {}

const App = (props: Props) => {
  return (
    <div className='App'>
      <Vacancies />
      <JobList />
    </div>
  );
};

export default App;
