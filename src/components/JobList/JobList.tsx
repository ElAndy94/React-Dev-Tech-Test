import React, { useState } from 'react';

import JobItem from './JobRole/JobItem';
import jobGenerator from '../../randomJobGenerator';
import './JobList.scss';

interface Props {}

const jobList = (props: Props) => {
  const [input, setInput] = useState('');

  const jobs = jobGenerator()
    .filter(el => {
      return el.title.toLowerCase().indexOf(input.toLowerCase()) !== -1;
    })
    .map(job => {
      return (
        <JobItem
          key={job._id}
          title={job.title}
          location={job.location}
          salary={job.salary}
          desc={job.desc}
        />
      );
    });

  return (
    <React.Fragment>
      <input
        className='searchBar'
        value={input}
        onInput={e => setInput(e.currentTarget.value)}
      />

      <ul className='jobs__list'>{jobs}</ul>
    </React.Fragment>
  );
};

export default jobList;
