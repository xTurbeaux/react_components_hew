
import React from 'react';

import '../css/Filter.css';

const Filter = (data) => {
  const dropdownChangeHandler = (event) => {
    data.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select className='filter' value={data.selected} onChange={dropdownChangeHandler}>
            <option value='2880'>2880</option>
            <option value='2881'>2881</option>
            <option value='2882'>2882</option>
            <option value='2883'>2883</option>
            <option value='2884'>2884</option>
            <option value='2885'>2885</option>
            <option value='2886'>2886</option>
            <option value='2887'>2887</option>
            <option value='2888'>2888</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;