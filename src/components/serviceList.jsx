import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeService, editService, clearServiceField } from '../actions/actionCreators';

export default function ServiceList() {
  const storedItems = useSelector(state => state.serviceList);
  const filteredItems = useSelector(state => state.serviceFilter);
  const [items, setItems] = useState(storedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const itemsToSet = filteredItems.filterText ? filteredItems.filteredItems : storedItems;
    setItems(itemsToSet);
    return;
  }, [filteredItems, storedItems])

  const handleRemove = id => {
    dispatch(removeService(id));
    dispatch(clearServiceField());
  }
  const handleEdit = (item) => {
    dispatch(editService(item.id, item.name, item.price));
  }

  return (
    <ul>
      {items.map(item => <li key={item.id}> {item.name} - {item.price}
        <button className="button" onClick={() => handleEdit(item)}>Edit</button>
        <button className="button" onClick={() => handleRemove(item.id)}>Remove</button></li>
      )}
    </ul>
  )
}