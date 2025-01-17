import styled from "styled-components";
import car from '../assets/bmw.png';
import bike from '../assets/download.png';

const HeroContain = styled.div`
  padding: 50px 100px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const HeroNote = styled.div`
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }
`;

const HeroButton = styled.div`
  display: flex;
  gap: 20px;

  .rentcar {
    background-color: white;
    color: black;
    padding: 12px 20px;
    border-radius: 5px;
    border: 2px solid black;
    cursor: pointer;
    font-size: 1rem;
  }

  .rentbike {
    background-color: black;
    color: white;
    padding: 13px 20px;
    border-radius: 5px;
    border: 2px solid white;
    cursor: pointer;
    font-size: 1rem;
  }
`;

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 400px; // Added height for the container to control positioning

  img {
    width: 100%;
    height: auto;
  }

  .car {
    position: absolute;
    width: 650px;
    right: 20px;
  }

  .bike {
    position: absolute;
    width: 400px;
    top: 220px;
    left: 100px;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;

    .car {
      width: 420px;
      left: -70px;
    }

    .bike {
      width: 290px;
      top: 180px;
      left: 90px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContain>
      <HeroNote>
        <h1>Unlock Endless Possibilities with Luxedrive</h1>
        <p>
          To contribute positive change and achieve our sustainability goals
          with many extraordinary services.
        </p>
        <HeroButton>
          <button className="rentcar">Rent Car</button>
          <button className="rentbike">Rent Bike</button>
        </HeroButton>
      </HeroNote>
      <HeroImage>
        <img src={car} className="car" alt="Car" />
        <img className="bike" src={bike} alt="Bike" />
      </HeroImage>
    </HeroContain>
  );
};

export default Hero;
