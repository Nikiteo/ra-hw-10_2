import './App.css';
import ServiceAdd from './components/serviceAdd';
import Filter from './components/serviceFilter';
import ServiceList from './components/serviceList';

export default function App() {
  return (
    <div className="App">
      <Filter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}