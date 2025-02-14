import React, { useState } from "react";
import "../styles/extend.css";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";


import scorpio from "../assets/images/Products/cars/scorpio.png";
import linea from "../assets/images/Products/cars/linea.png";
import jaguar from "../assets/images/Products/cars/jaguar.png";
import maserati from "../assets/images/Products/cars/maserati.png";
import quattroporte from "../assets/images/Products/cars/quattroporte.png";
import benz from "../assets/images/Products/cars/benz.png";
import volkswagen from "../assets/images/Products/cars/volkswagen.png";
import whiteJaguar from "../assets/images/Products/cars/whiteJaguar.png";
import a6 from "../assets/images/Products/cars/a6.png";
import wrangler from "../assets/images/Products/cars/wrangler.png";
import verzel from "../assets/images/Products/cars/verzel.png";
import audi from "../assets/images/Products/cars/audi.png";


const carData = [
  { 
    image: scorpio, 
    name: "Scorpio", 
    type: "SUV",
    description: "A rugged and powerful SUV known for its off-road capabilities and strong road presence.",
    body: "SUV",
    seats: 7,
    doors: 5,
    luggage: "Large",
    transmission: "Manual",
    drive: "4WD",
    year: 2023,
    mileage: "15 km/l",
    fuelType: "Diesel",
    engine: "2.2L mHawk Diesel"
  },
  { 
    image: linea, 
    name: "Linea", 
    type: "Sedan",
    description: "A stylish and comfortable sedan with a smooth ride and elegant Italian design.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Medium",
    transmission: "Manual/Automatic",
    drive: "FWD",
    year: 2020,
    mileage: "18 km/l",
    fuelType: "Petrol",
    engine: "1.4L T-Jet Petrol"
  },
  { 
    image: jaguar, 
    name: "Jaguar", 
    type: "Luxury",
    description: "A premium luxury car that blends high performance with sophisticated British craftsmanship.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "AWD",
    year: 2023,
    mileage: "12 km/l",
    fuelType: "Petrol",
    engine: "3.0L Supercharged V6"
  },
  { 
    image: maserati, 
    name: "Maserati", 
    type: "Sports",
    description: "A high-performance sports car with Italian flair, delivering exhilarating speed and precision handling.",
    body: "Coupe",
    seats: 2,
    doors: 2,
    luggage: "Small",
    transmission: "Automatic",
    drive: "RWD",
    year: 2022,
    mileage: "8 km/l",
    fuelType: "Petrol",
    engine: "4.7L V8"
  },
  { 
    image: quattroporte, 
    name: "Quattroporte", 
    type: "Luxury",
    description: "A luxury sports sedan from Maserati, combining elegance, power, and cutting-edge technology.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "RWD",
    year: 2023,
    mileage: "10 km/l",
    fuelType: "Petrol",
    engine: "3.8L Twin-Turbo V8"
  },
  { 
    image: benz, 
    name: "Benz", 
    type: "Sedan",
    description: "A refined and sophisticated sedan from Mercedes-Benz, offering comfort, luxury, and advanced safety features.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "RWD",
    year: 2023,
    mileage: "14 km/l",
    fuelType: "Petrol/Diesel",
    engine: "2.0L Turbocharged Engine"
  },
  { 
    image: volkswagen, 
    name: "Volkswagen", 
    type: "Hatchback",
    description: "A reliable and practical hatchback with German engineering, known for efficiency and durability.",
    body: "Hatchback",
    seats: 5,
    doors: 5,
    luggage: "Medium",
    transmission: "Manual/Automatic",
    drive: "FWD",
    year: 2022,
    mileage: "18 km/l",
    fuelType: "Petrol/Diesel",
    engine: "1.5L TSI Engine"
  },
  { 
    image: whiteJaguar, 
    name: "White Jaguar", 
    type: "Luxury",
    description: "A stunning luxury vehicle that offers a combination of performance, elegance, and cutting-edge features.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "AWD",
    year: 2023,
    mileage: "11 km/l",
    fuelType: "Petrol",
    engine: "5.0L Supercharged V8"
  },
  { 
    image: a6, 
    name: "Audi A6", 
    type: "Sedan",
    description: "A premium executive sedan from Audi, featuring advanced technology, comfort, and performance.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "AWD",
    year: 2023,
    mileage: "13 km/l",
    fuelType: "Petrol",
    engine: "2.0L Turbocharged Inline-4"
  },
  { 
    image: wrangler, 
    name: "Wrangler", 
    type: "Off-Road",
    description: "A legendary off-road vehicle with rugged styling and exceptional off-road capabilities.",
    body: "SUV",
    seats: 5,
    doors: 5,
    luggage: "Medium",
    transmission: "Manual/Automatic",
    drive: "4WD",
    year: 2023,
    mileage: "9 km/l",
    fuelType: "Petrol/Diesel",
    engine: "3.6L V6"
  },
  { 
    image: verzel, 
    name: "Verzel", 
    type: "SUV",
    description: "A stylish and versatile SUV, offering a balance of performance, comfort, and efficiency.",
    body: "SUV",
    seats: 5,
    doors: 5,
    luggage: "Medium",
    transmission: "Automatic",
    drive: "FWD/AWD",
    year: 2023,
    mileage: "16 km/l",
    fuelType: "Hybrid",
    engine: "1.5L Hybrid Petrol"
  },
  { 
    image: audi, 
    name: "Audi", 
    type: "Luxury",
    description: "A premium luxury car with state-of-the-art technology, refined design, and thrilling performance.",
    body: "Sedan",
    seats: 5,
    doors: 4,
    luggage: "Large",
    transmission: "Automatic",
    drive: "AWD",
    year: 2023,
    mileage: "12 km/l",
    fuelType: "Petrol",
    engine: "3.0L Turbocharged V6"
  },
];


const Extend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carData.length);
  };

  const prevCar = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carData.length) % carData.length);
  };

  return (
    <div className="extend">
      <div className="success-brand-name">LuxeDrive</div>
      <div className="car-details">
     
        <div className="car">
          <div className="car-image">
            <IoMdArrowBack onClick={prevCar} className="arrow-button" aria-label="Previous Car" />
            <img src={carData[currentIndex].image} alt={carData[currentIndex].name} />
            <IoMdArrowForward onClick={nextCar} className="arrow-button" aria-label="Next Car" />
          </div>
<div className="carspecc">
  <p>{carData[currentIndex].description}</p>
  <div className="specs">
    <h1>Specifications</h1>
    <p><span>Body Type </span> {carData[currentIndex].body}</p>
    <p><span>Seats </span> {carData[currentIndex].seats}</p>
    <p> <span>Doors</span> {carData[currentIndex].doors}</p>
    <p> <span>Luggage</span> {carData[currentIndex].luggage}</p>
    <p> <span>Transmission</span> {carData[currentIndex].transmission}</p>
    <p> <span>Drive</span>{carData[currentIndex].drive}</p>
    <p><span>Year</span> {carData[currentIndex].year}</p>
    <p><span>Mileage </span> {carData[currentIndex].mileage}</p>
    <p> <span>Fuel Type</span> {carData[currentIndex].fuelType}</p>
    <p> <span>Engine</span> {carData[currentIndex].engine}</p>

  </div>
</div>


        </div>

  
        <div className="details">
          <label htmlFor="location">
            <FaLocationDot /> Location
          </label>
          <input type="text" id="location" placeholder="Enter location" />

          <div className="date-time-group">
            <label htmlFor="pickup-date">
              <CiCalendar /> Pick-Up
            </label>
            <div className="date-time-inputs">
              <input type="date" id="pickup-date" />
              <input type="time" id="pickup-time" />
            </div>
          </div>

          <div className="date-time-group">
            <label htmlFor="dropoff-date">
              <CiCalendar /> Drop-Off
            </label>
            <div className="date-time-inputs">
              <input type="date" id="dropoff-date" />
              <input type="time" id="dropoff-time" />
            </div>
          </div>

         
          <div className="duration">
            <label htmlFor="duration">Duration</label>
            <div className="duration-details">
              <p className="duration-time">4h 30m</p>
              <p className="duration-price">$100</p>
            </div>
          </div>

         
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Extend;
