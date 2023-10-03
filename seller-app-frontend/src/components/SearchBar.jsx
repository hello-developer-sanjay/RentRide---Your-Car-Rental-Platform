/* eslint-disable react/prop-types */



const SearchBar = ({ searchTerm, onSearch, onInputChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by car name..."
        value={searchTerm}
        onChange={onInputChange}
      />
      <button onClick={() => onSearch(searchTerm, 1)}>Search</button>
    </div>
  );
};

export default SearchBar;
