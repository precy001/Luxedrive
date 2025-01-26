import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import scorpio from '../assets/images/Products/cars/scorpio.png'

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

        <center>
        <button>Rent Car</button>
        <button>Rent Bike</button>
        </center>
        
        <div className="products-container">
        {data.map((datalist, key) => (
            
            <div
            key={key}
            className='each-car-product'
            >
            <img src={scorpio} />
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
                        Doors: {datalist.doors}
                    </div>

                    <div className="fuel">
                        Fuel: {datalist.fuel}
                    </div>

                    <div className="price">
                        Per hour <br />
                        <div className="price-tag">
                            {datalist.pricePerHour}
                        </div>
                    </div>
                </div>

                <div className="specs-right">
                    <div className="horsepower">
                        Horsepower: {datalist.horsePower}
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

export default HomeRent