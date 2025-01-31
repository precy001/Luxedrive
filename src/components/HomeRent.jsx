import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import scorpio from '../assets/images/Products/cars/scorpio.png'
import linea from '../assets/images/Products/cars/linea.png'
import jaguar from '../assets/images/Products/cars/jaguar.png'
import maserati from '../assets/images/Products/cars/maserati.png'
import quattroporte from '../assets/images/Products/cars/quattroporte.png'
import benz from '../assets/images/Products/cars/benz.png'
import volkswagen from '../assets/images/Products/cars/volkswagen.png'
import whiteJaguar from '../assets/images/Products/cars/whiteJaguar.png'
import a6 from '../assets/images/Products/cars/a6.png'
import wrangler from '../assets/images/Products/cars/wrangler.png'
import verzel from '../assets/images/Products/cars/verzel.png'
import audi from '../assets/images/Products/cars/audi.png'

const images = [scorpio, linea, jaguar, maserati, quattroporte, benz, volkswagen, whiteJaguar, a6, wrangler, verzel, audi]

const HomeRent = () => {

    const baseUrl = "http://localhost/luxedrive/backend/productsApi/car_api.php"
    const[data, setData] = useState([])

    useEffect(() => {
        fetch(baseUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return response.json();
        })
        .then((data) => setData(data))
        .catch((err) => console.log("error fetching data:", err))
    }, [])

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
        {data.map((datalist, key) => (
            
            <div
            key={key}
            className='each-car-product'
            >
            <img src={images[key]} />
            <div className="product-name">{datalist.productName}</div>

            
            <div className="specs-container">
                <div className="specs-left">
                    <div className="seats">
                        Seats : {datalist.seats}
                    </div>

                    <div className="luggage">
                        Luggage : {datalist.luggages}
                    </div>

                    <div className="doors">
                        Doors: {datalist.door}
                    </div>

                    <div className="fuel">
                        Fuel: {datalist.fuel}
                    </div>

                    <div className="price">
                        Per hour <br />
                        <div className="price-tag">
                        ${datalist.price}
                        </div>
                    </div>
                </div>

                <div className="specs-right">
                    <div className="horsepower">
                        Horsepower: {datalist.horsepower}
                    </div>

                    <div className="engine">
                        Engine: {datalist.engine}
                    </div>

                    <div className="drive">
                        Drive: {datalist.drive}
                    </div>

                    <div className="type">
                        Type: {datalist.type}
                    </div>

                    <div className="rent-btn">
                        <button className='black-rent-btn'>Rent</button>
                    </div>
                </div>
            </div>

            </div>
        ))} 
        </div>
    </div>
  )
}

export default HomeRent