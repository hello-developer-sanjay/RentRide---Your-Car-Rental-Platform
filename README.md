RentRide - Your Ultimate Car Rental Platform
RentRide is a sophisticated car rental platform built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application allows users to search, view, and rent cars seamlessly. Whether you're planning a weekend getaway or need a temporary ride, RentRide has got you covered.

RentRide Logo

Features
Search Cars: Easily search for cars based on your preferences and needs.
View Car Details: Get detailed information about each car, including images, specifications, and rental prices.
Rent Now: Instantly rent a car with the click of a button.
Pagination: Conveniently navigate through the list of cars with our pagination feature.
Responsive Design: Enjoy a seamless experience on various devices, including desktops, tablets, and smartphones.
Technologies Used
Frontend: React.js, Redux, HTML, CSS
Backend: Node.js, Express.js
Database: MongoDB
Deployment: AWS S3, Heroku
Getting Started
Prerequisites
Node.js and npm installed on your machine
MongoDB Atlas account (for database hosting)
AWS S3 account (for hosting images)
Heroku account (for backend deployment)
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd client
npm install
cd ../server
npm install
Set up environment variables:

Create a .env file in the server directory and add the following variables:

env
Copy code
MONGODB_URI=YOUR_MONGODB_URI
AWS_ACCESS_KEY_ID=YOUR_AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY=YOUR_AWS_SECRET_ACCESS_KEY
AWS_BUCKET_NAME=YOUR_AWS_BUCKET_NAME
Run the application:

bash
Copy code
# Start the server
cd server
npm start

# Start the client (in a separate terminal)
cd client
npm start
The application will be accessible at http://localhost:3000.

Contributing
If you'd like to contribute to RentRide, please fork the repository and create a pull request. You can also open issues for bug reports or feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Happy Renting! 🚗🔑
