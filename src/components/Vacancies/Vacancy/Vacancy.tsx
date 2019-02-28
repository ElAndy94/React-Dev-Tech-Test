import React, { useRef, useState } from 'react';

import './Vacancy.scss';
import validate from '../../../shared/utility';

interface Props {}

const vacancy = (props: Props) => {
  const [errors, setErrors] = useState({
    titleVal: true,
    locationVal: true,
    departmentVal: true,
    salaryVal: true,
    descriptionVal: true
  });

  const titleEl = useRef<HTMLInputElement>(null);
  const locationEl = useRef<HTMLInputElement>(null);
  const departmentEl = useRef<HTMLInputElement>(null);
  const salaryEl = useRef<HTMLInputElement>(null);
  const descriptionEl = useRef<HTMLInputElement>(null);

  const onSubmit = (event: any) => {
    event.preventDefault();

    const title = titleEl.current.value;
    const location = locationEl.current.value;
    const department = departmentEl.current.value;
    const salary = salaryEl.current.value;
    const description = descriptionEl.current.value;

    let updatedErrors = validate(
      title,
      location,
      department,
      salary,
      description
    );
    setErrors(updatedErrors);

    let ifValidationPass = Object.values(errors).every(item => item === false);

    if (ifValidationPass === true) {
      console.log(title, location, department, salary);
    }
  };

  return (
    <form className='form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor='job-title'>Job Title*:</label>
        <input
          type='text'
          className={!errors.titleVal ? 'error input-mod' : 'input-mod'}
          id='job-title'
          ref={titleEl}
          placeholder='Job Title'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='location'>Location*:</label>
        <input
          type='text'
          className={!errors.locationVal ? 'error input-mod' : 'input-mod'}
          id='location'
          ref={locationEl}
          placeholder='Manchester, United Kingdom'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='department'>Department:</label>
        <input
          type='text'
          className={!errors.departmentVal ? 'error input-mod' : 'input-mod'}
          id='department'
          ref={departmentEl}
          placeholder='Development'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='salary'>Salary*:</label>
        <input
          type='text'
          className={!errors.salaryVal ? 'error input-mod' : 'input-mod'}
          id='salary'
          ref={salaryEl}
          placeholder='25,000'
        />
      </div>
      <div className='form-control'>
        <label htmlFor='description'>Description*:</label>
        <input
          type='text'
          className={!errors.descriptionVal ? 'error input-mod' : 'input-mod'}
          id='description'
          ref={descriptionEl}
          placeholder='Explain the role and criteria here...'
        />
      </div>
      <div className='form-actions'>
        <button type='submit'>Post Job</button>
      </div>
    </form>
  );
};

export default vacancy;
