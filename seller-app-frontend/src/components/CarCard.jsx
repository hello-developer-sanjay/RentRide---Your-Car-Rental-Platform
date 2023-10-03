/* eslint-disable react/prop-types */
import React from 'react';

const CarCard = ({ car }) => {
  const formattedPrice = `${car.price} $ /Month`;

  const handleRentNow = () => {
    // Implement your rent now logic here, e.g., navigate to a rent page, show a modal, etc.
    alert(`Rent Now: ${car.name}`);
  };

  return (
    <div className="car-card">
      <img src={car.imageURL} alt={car.name} />
      <h2>{car.name}</h2>
      <p>Year: {car.year}</p>
      <p>Price: {formattedPrice}</p>
      
      <p>Transmission: {car.transmission}</p> {/* Additional detail: Transmission */}
      <p>Fuel Type: {car.fuelType}</p> {/* Additional detail: Fuel Type */}
      <p>Seats: {car.seats}</p> {/* Additional detail: Number of Seats */}
     
      <button onClick={handleRentNow}>Rent Now</button>
    </div>
  );
};

export default CarCard;
