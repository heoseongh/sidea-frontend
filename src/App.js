import logo from './logo.svg';
import './App.css';

import React from "react";
import axios from "axios";

function MainPageComponent() {
  const [products, setProducts] = React.useState([]);
  React.useState(function () {
    axios
      .get(
        "https://localhost:8080/test"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://naver.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainPageComponent;
