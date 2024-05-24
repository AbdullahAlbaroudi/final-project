import React, { useState } from 'react';
import menu1 from '../images/menu1.png';
import menu2 from '../images/menu2.png';
import menu3 from '../images/menu3.png';
import menu4 from '../images/menu4.png';
import menu5 from '../images/menu5.png';
import menu6 from '../images/menu6.png';

function Menu() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, price) => {
    const existingItem = cartItems.find(item => item.product === product);
    if (existingItem) {
      const updatedCartItems = cartItems.map(item =>
        item.product === product ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, price, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 1) {
      updatedCartItems[index].quantity--;
    } else {
      updatedCartItems.splice(index, 1);
    }
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add items to your cart before checkout.');
      return;
    }

    const total = calculateTotal();
    alert(`Thank you for your purchase! Your total: SAR${total}`);
    setCartItems([]);
  };

  const handlePrintReceipt = () => {
    const total = calculateTotal();
    if (total === 0) {
      alert("Cannot print receipt for an empty cart.");
      return;
    }

    const receiptWindow = window.open('', '_blank');
    const receiptContent = `
      <html>
      <head>
        <title>Receipt</title>
        <style>
          body {
            font-family: 'Poppins', sans-serif;
          }
          .receipt-container {
            padding: 1rem;
          }
          .receipt-header {
            text-align: center;
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          .receipt-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }
          .receipt-total {
            text-align: right;
            font-weight: bold;
            margin-top: 1rem;
          }
        </style>
      </head>
      <body>
        <div class="receipt-container">
          <div class="receipt-header">
            <h2>Receipt</h2>
          </div>
          <div class="receipt-items">
            ${cartItems.map((item, index) => `
              <div class="receipt-item">
                <span>${item.product}</span>
                <span>SAR${item.price.toFixed(2)} x ${item.quantity}</span>
              </div>
            `).join('')}
          </div>
          <div class="receipt-total">
            Total: SAR${calculateTotal().toFixed(2)}
          </div>
        </div>
      </body>
      </html>
    `;
    receiptWindow.document.open();
    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close();

    receiptWindow.onload = () => {
      receiptWindow.print();
      receiptWindow.close();
    };
  };

  return (
    <section className="menu" id="menu">
      <h1 className="heading">products</h1>
      <div className="box-container">
        <div className="box">
          <img src={menu1} alt="Coffee Grinder" />
          <div className="content">
            <h3>Coffee Grinder</h3>
            <p>
            1Zpresso Q2 S Manual Coffee Grinder Heptagonal Version, Foldable Handle, Mini Slim Travel Sized Fits in the plunger, Assembly Stainless Steel Conical Burr, Numerical Adjustable Setting
            </p>
            <span>485SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Coffee Grinder', 485)}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="box">
          <img src={menu2} alt="Dripper" />
          <div className="content">
            <h3>Dripper</h3>
            <p>V60 Wooden Glass Dripper </p>
            <span>30SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Dripper', 30)}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="box">
          <img src={menu3} alt="Server" />
          <div className="content">
            <h3>Server</h3>
            <p>
            ☕ 600ml Server Transparent without lid and text complete for suitable for V60.            </p>
            <span>35SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Server', 35)}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="box">
          <img src={menu4} alt="Coffee Scale" />
          <div className="content">
            <h3>Coffee Scale</h3>
            <p>
            TIMEMORE Coffee Scale Basic 2.0 Electronic Espresso Scale with with Timer,2000 Grams and Water Flow Rate and Timer Function            </p>
            <span>225SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Coffee Scale', 22)}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="box">
          <img src={menu5} alt="Kettle" />
          <div className="content">
            <h3>Kettle</h3>
            <p>
            900ml Ultra Fast Boiling Hot Water Kettle, Stainless Steel Electric Kettle, Automatic Temperature Control and Constant            </p>
            <span>185SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Kettle', 18)}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="box">
          <img src={menu6} alt="Ice Cube Trays" />
          <div className="content">
            <h3>Ice Cube Trays</h3>
            <p>
            Silicone Ice Cube Trays with No Leaking Lid, Easy - Release and Flexible 15- Cavities Square Ice Cube Mold            </p>
            <span>35SAR</span>
            <button className="add-to-cart" onClick={() => addToCart('Ice Cube Trays', 35)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <section className="cart">
        <h2>Your Cart</h2>
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.product}</span>
              <span>SAR{item.price.toFixed(2)} x {item.quantity}</span>
              <button className="btn remove-item" onClick={() => removeFromCart(index)}>-</button>
              <button className="btn add-item" onClick={() => addToCart(item.product, item.price)}>+</button>
            </li>
          ))}
        </ul>
        <p className="cart-total">Total: SAR<span>{calculateTotal()}</span></p>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        <button className="print-btn" onClick={handlePrintReceipt}>Print Receipt</button>
      </section>
    </section>
  );
}

export default Menu;
