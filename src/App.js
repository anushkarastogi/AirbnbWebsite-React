import airbnb from "./images/airbnblogo.png"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Heading from "./components/Heading";
import Data from "./Data"
import Card from "./components/Card"
import headerlogo from "./images/headerlogo.png"
import starlogo from "./images/Star1.png"
import './App.css';

export default function App(){
  const cardsvar = Data.map((carditem) => {
    return (
      <Card
        key={carditem.id}
        starimg={starlogo}
        carditem={carditem}
      />
    )
  })

  return (
    <div className="react--container">
      <div className="app--container">
        <Navbar img={airbnb} />
        <Header headerImage={headerlogo} />
        <Heading />
        <div class="scrolling-wrapper">
          {cardsvar}

        </div>
      </div>

    </div>

  );
}
