import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterService } from '../actions/actionCreators';

export default function Filter() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.serviceList);
  const [filterText, setFilterText ] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(filterService(items, value));
    setFilterText(value);
  }
  return (
    <div>
      <input type="text" value={filterText} onChange={handleChange} placeholder="Поиск"></input>
    </div>
  );
}