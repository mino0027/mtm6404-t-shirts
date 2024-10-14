const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'images/bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'images/cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'images/green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'images/blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'images/light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'images/purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'images/red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'images/teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]
// stock code above, my code below

const { useState } = React;

// TShirt component
function TShirt({ tshirt }) {
  const [stock, setStock] = useState(tshirt.stock);
  const [quantity, setQuantity] = useState(1);
  //creating the variables for stock and quantity 
  const handleBuy = () => {
    setStock(stock - quantity);
  }; //function to handle the buy button, stock - quantity

  return ( //returning the tshirt information from the array above (stock code)
    <div> 
      <h2>{tshirt.title}</h2>
      <img src={tshirt.image} alt={tshirt.title} />
      <p>Price: ${tshirt.price}</p> 
      <p className={stock > 0 ? "" : "out"}>
      Stock: {stock > 0 ? stock : "Out of Stock, sorry!"}</p>
      {stock > 0 && ( // stock > 0 means that if the stock is greater than 0, the dropdown will appear, if not, the out of stock message will show. this is done by && which is a logical operator that only returns the second value if the first value is true. in this case, if stock is greater than 0, the dropdown will appear. if not, the out of stock message will appear
      // finally, <p className={stock > 0 ? "" : "out"}> Stock: {stock > 0 ? stock : "Out of Stock"}</p> is basically saying this will be given a class of "out" if the stock is 0, and if the stock is greater than 0, it will be given an empty string which we provide immediately with stock > 0 ? and now this will allow us to make the out of stock message red. I tried just giving the p tag a class but it makes everything red so this way we can only affect the actual string "Out of Stock" and not the other parts of the p tag
        //what <> does is it allows a return of multiple elements without having to wrap them in a div, as it's a shorthand for a div
        <>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {[...Array(stock).keys()].map((value) => ( //creating the quantity dropdown
              <option key={value + 1} value={value + 1}>
                {value + 1} 
              </option> //shorthand for creating the dropdown, value + 1 means the dropdown starts at 1 and goes up to the stock amount, this stock value is set in the array above and ... is the spread operator that takes the array stock value and spreads it out into the dropdown
            ))}
          </select>
          <button onClick={handleBuy}>Buy</button>
        </> //button to handle the buy function, which is the stock - quantity
      )}
    </div>
  );
}

// TShirtList component
function TShirtList({ tshirts }) {
  return (
    <div className="product">
      {tshirts.map((tshirt) => (
        <TShirt key={tshirt.title} tshirt={tshirt} />
      ))}
    </div> //mapping through the tshirts array and returning my components for each tshirt in the array
  );
}

// Render TShirtList to the DOM
ReactDOM.render(<TShirtList tshirts={tshirts} />, document.getElementById('root'));