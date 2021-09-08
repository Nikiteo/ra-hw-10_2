import { useSelector, useDispatch } from 'react-redux';
import { changeServiceField, addService, clearServiceField, updateService } from '../actions/actionCreators';

export default function ServiceAdd(props) {
  const item = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (item.id) {
      dispatch(updateService(item.id, item.name, item.price));
      dispatch(clearServiceField());
    } else if (item.name && item.price) {
      dispatch(addService(item.name, item.price));
      dispatch(clearServiceField());
    }
  };

  const handleReset = () => {
    dispatch(clearServiceField());
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit'>Save</button>
      <button type='reset'>Cancel</button>
    </form>
  )
}
