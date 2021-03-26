import React from 'react';
import "./App.css";
const products = [
  { id: "1", title: "Iphone11", price: "$199",description: "Iphone11 comes with IOS and has triple camera setup experience the best picture quality ", Url: "./mobile.jpg" },
  { id: "2", title: "Hp Laptop", price: "$499",description: "This laptop has the latest intel core and is fast has touch screen with good battery backup", Url: "./Laptop.jpg" },
  { id: "3", title: "Ipad", price: "$249",description: "Ipad comes with IOS and  has big screen that supports 4k and hdr modes", Url: "./Ipad.jpg" }]
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
            <h2>Price:<span class="price">{items.price}</span></h2>
            <p>{items.description}</p>
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
