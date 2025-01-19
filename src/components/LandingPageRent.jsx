import React from 'react'
import '../styles/lrent.css'
import { Link } from 'react-router-dom'
import scorpio from '../assets/images/Products/cars/scorpio.png'
import verzel from '../assets/images/Products/cars/verzel.png'
import cbr from '../assets/images/Products/bikes/cbr.png'
import ktm from '../assets/images/Products/bikes/ktm.png'

const LandingPageRent = () => {

    const carProducts = [

        {
            path: scorpio,
            productName : "Scorpio",
            category:"Car",
            seats:4,
            luggages:4,
            doors:4,
            drive:4,
            fuel:"petrol",
            horsePower:500,
            engine:3000,
            type:"Hatchback",
            pricePerHour:"$56"
        },

      
        {
            path: verzel,
            productName : "Verzel",
            category:"Car",
            seats:4,
            luggages:4,
            doors:4,
            drive:4,
            fuel:"petrol",
            horsePower:500,
            engine:3000,
            type:"Hatchback",
            pricePerHour:"$56"
        },        

    ]

    const bikeProducts = [

        {
            path: cbr,
            productName : "CBR",
            category:"Bike",
            seats:2, 
            fuel:"petrol",
            frontbrake:"Disc",
            gearBox:"6-speed",
            horsePower:500,
            engine:3000,
            stroke:"58.7Mm",
            overallMileage:"40 kmpl",
            pricePerHour:"$56"
        },

        {
            path: ktm,
            productName : "KTM",
            category:"Bike",
            seats:2, 
            fuel:"petrol",
            frontbrake:"Disc",
            gearBox:"6-speed",
            horsePower:500,
            engine:3000,
            stroke:"58.7Mm",
            overallMileage:"40 kmpl",
            pricePerHour:"$56"
        }


    ]

  return (
    <div>
        <div className="top">
            Rent a Vehicle
        </div>    

        <center>
        <hr className="default-rule" />
        </center>

        <div className="lrent-short-note">
        Rent a car with ease—flexible options, great rates, and reliable service. Book now!
        </div>

        <div className="products-container">
            {carProducts.map((carProduct) => (
                <div
                key={carProduct.productName}
                className='each-car-product'
                >
                <img src={carProduct.path} />
                <div className="product-name">{carProduct.productName}</div>

                
                <div className="specs-container">
                    <div className="specs-left">
                        <div className="seats">
                            Seats : {carProduct.seats}
                        </div>

                        <div className="luggage">
                            Luggage : {carProduct.luggages}
                        </div>

                        <div className="doors">
                            Doors: {carProduct.doors}
                        </div>

                        <div className="fuel">
                            Fuel: {carProduct.fuel}
                        </div>

                        <div className="price">
                            Per hour <br />
                            <div className="price-tag">
                                {carProduct.pricePerHour}
                            </div>
                        </div>
                    </div>

                    <div className="specs-right">
                        <div className="horsepower">
                            Horsepower: {carProduct.horsePower}
                        </div>

                        <div className="engine">
                            Engine: {carProduct.engine}
                        </div>

                        <div className="drive">
                            Drive: {carProduct.drive}
                        </div>

                        <div className="type">
                            Type: {carProduct.type}
                        </div>

                        <div className="rent-btn">
                            <Link to="/signin" className='black-rent-btn'>Rent</Link>
                        </div>
                    </div>
                </div>

                </div>
            ))}

            {bikeProducts.map((bikeProduct) => (
                <div
                key={bikeProduct.productName}
                className='each-bike-product'
                >
                <img src={bikeProduct.path} />
                <div className="product-name">{bikeProduct.productName}</div>

                <div className="specs-container">
                    <div className="specs-left">
                        <div className="seats">
                            Seats: {bikeProduct.seats}
                        </div>

                        <div className="fuel">
                            Fuel: {bikeProduct.fuel}
                        </div>

                        <div className="front-brake">
                            Front Brake: {bikeProduct.frontbrake}
                        </div>

                        <div className="gear-box">
                            Gear Box: {bikeProduct.gearBox}
                        </div>

                        <div className="price">
                            Per hour
                            <div className="price-tag">
                                {bikeProduct.pricePerHour}
                            </div>
                        </div>
                    </div>

                    <div className="specs-right">
                        <div className="horsepower">
                            Horsepower: {bikeProduct.horsePower}
                        </div>

                        <div className="engine">
                            Engine: {bikeProduct.engine}
                        </div>

                        <div className="stroke">
                            Stroke: {bikeProduct.stroke}
                        </div>

                        <div className="mileage">
                            Mileage: {bikeProduct.overallMileage}
                        </div>

                        <div className="rent-btn">
                        <Link to="/signin" className='black-rent-btn'>Rent</Link>
                        </div>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LandingPageRent