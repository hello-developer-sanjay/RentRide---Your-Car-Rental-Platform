import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCars, searchCars } from './redux/actions';
import CarCard from './components/CarCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const [searchTerm, setSearchTerm] = useState('');
  const { page = '1' } = useParams();
  const currentPage = parseInt(page, 10);

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchCars(searchTerm, currentPage));
    } else {
      dispatch(fetchCars(currentPage));
    }
  }, [dispatch, searchTerm, currentPage]);

  const carsPerPage = 6; // Number of cars to display per page
  const totalPages = 10; // Hardcoded total pages for pagination

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const displayedCars = filteredCars.slice(startIndex, endIndex);

  return (
    <div className="App">
   
      
      <SearchBar
        searchTerm={searchTerm}
        onSearch={(term, page) => dispatch(searchCars(term, page))}
        onInputChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="car-list">
        {displayedCars.map((car) => (
          <CarCard key={car._id} car={car} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

export default App;
