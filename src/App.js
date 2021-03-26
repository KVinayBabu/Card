import React from 'react';
import "./App.css";
const products = [
  { id: "1", title: "Mobile", price: "$199", Url: "./mobile.jpg" },
  { id: "2", title: "Laptop", price: "$499", Url: "./Laptop.jpg" },
  { id: "3", title: "Tablet", price: "$249", Url: "./Ipad.jpg" }]
class App extends React.Component {
  render() {
    return (
      <div>
      <h1>
        Shopping Cards
      </h1>
      {products.map((items) => {
            return (
        <div className="container" key={items.id}>
          <div className="cards">
            <img src={items.Url} alt="img" />
            <h1>{items.title}</h1>
            <p>Price:{items.price}</p>
            <button class="add-to-cart">Add to Cart</button>
          </div>
        </div>
      );
    })
  }
    </div>
    );
  }
}

export default App;
