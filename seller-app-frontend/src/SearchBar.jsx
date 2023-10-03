import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCars } from './redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(searchCars(searchTerm, 1));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by car name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
