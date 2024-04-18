import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const pizzaData = [
  {
    name: "Neapolitan Style Pizza",
    ingredients:
      "Fresh mozarella, tomatoes, basil leaves, oregano, and olive oil",
    price: 15,
    photoName: "images/neapolitan-pizza.jpg",
    soldOut: false,
  },
  {
    name: "Chicago Style Pizza",
    ingredients:
      "Mozarella, ground beef, sausage, pepperoni, onion, mushrooms, and green peppers",
    price: 20,
    photoName: "images/chicago-pizza.jpg",
    soldOut: false,
  },
  {
    name: "New York Style Pizza",
    ingredients:
      "Tomato sauce, mozarella cheese, pepperoni, sausages, mushrooms, anchovies",
    price: 18,
    photoName: "images/new-york-pizza.jpg",
    soldOut: false,
  },
  {
    name: "Sicilian Style Pizza",
    ingredients: "tomato, onion, anchovies, herbs",
    price: 10,
    photoName: "images/sicilian-pizza.jpg",
    soldOut: false,
  },
  {
    name: "Greek Style Pizza",
    ingredients: "Tomato paste, strong oregano, mix of cheese",
    price: 25,
    photoName: "images/greek-pizza.jpg",
    soldOut: false,
  },
  {
    name: "California Style Pizza",
    ingredients: "Chicken, artichokes, goat cheese, egg",
    price: 15,
    photoName: "images/california-pizza.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div>
      <h1 className="main-title">React Pizza Website by Aldy Rizky Putra</h1>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h2>arudei pizzas co., ltd</h2>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h3>our menu</h3>
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine, Please Choose From Our {numPizzas} Menu
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Kindly please wait a moment, ww are still working in our menu</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h4>{pizzaObject.name}</h4>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "sold out" : pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          Sorry we are closed now, we are happy to serve you within {openHour}
          :00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00, please come in or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
