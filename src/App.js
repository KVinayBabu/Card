import React from 'react';
import "./App.css";
const products = [
  { id: "1", category:'mobile', title: "Iphone11", price: "199",description: "Iphone11 comes with IOS and has triple camera setup experience the best picture quality ", Url: "./mobile.jpg" },
  { id: "2", category:'laptop' ,title: "Hp Laptop", price: "499",description: "This laptop has the latest intel core and is fast has touch screen with good battery backup", Url: "./Laptop.jpg" },
  { id: "3", category:'Tablet' ,title: "Ipad", price: "249",description: "Ipad comes with IOS and  has big screen that supports 4k and hdr modes", Url: "./Ipad.jpg" },
  { id: "4",  category:'mobile',title: "Iphone10", price: "149",description: "Iphone11 comes with IOS and has triple camera setup experience the best picture quality ", Url: "./mobile.jpg" },
  { id: "5", category:'laptop', title: "Acer Laptop", price: "399",description: "This laptop has the latest intel core and is fast has touch screen with good battery backup", Url: "./Laptop.jpg" },
  { id: "6", category:'tablet', title: "Ipad pro", price: "899",description: "Ipad comes with IOS and  has big screen that supports 4k and hdr modes", Url: "./Ipad.jpg" },
  { id: "7", category:'mobile' ,title: "Iphone11", price: "199",description: "Iphone11 comes with IOS and has triple camera setup experience the best picture quality ", Url: "./mobile.jpg" },
  { id: "8",  category:'laptop', title: "Hp Laptop", price: "499",description: "This laptop has the latest intel core and is fast has touch screen with good battery backup", Url: "./Laptop.jpg" }]
class App extends React.Component {
  state = {
    min: '0',
    max:'999'
    }
    Min = (e) => {
      this.setState({
      min: e.target.value,
      })
      if(e.target.value === ""){
        this.setState.min=0;
      }
      }
      Max = (evt) => {
        this.setState({
        max: evt.target.value,
        })
        if(evt.target.value === ""){      
          this.setState.max='999';
        }
        }
  
  render() {
    return (
      <div>
      <h1>
        Shopping Cards
      </h1>
      <input type="text" value={this.state.text} onChange={this.Min} placeholder="Enter Min value">
      </input>
      <br></br>
      <br></br>
      <input type="text" value={this.state.text} onChange={this.Max} placeholder="Enter Max value">
      </input>
     { products.filter(person => person.price >= this.state.min && person.price <= this.state.max).map(filteredProduct => (
        <div className="container" key={filteredProduct.id}>
          <div className="cards">
            <img src={filteredProduct.Url} alt="img" />
            <h1>{filteredProduct.title}</h1>
            <h2>Price:<span className="price">{filteredProduct.price}</span></h2>
            <p>{filteredProduct.description}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
    
     ))
  }
  </div>
    )
}
}
export default App;
