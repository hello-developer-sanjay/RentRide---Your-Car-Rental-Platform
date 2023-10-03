import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCars } from '../redux/actions';


function CarSearch() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    dispatch(searchCars(searchQuery));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search cars..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

    </div>

  );
}

export default CarSearch;