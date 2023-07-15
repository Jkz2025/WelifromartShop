import {
  AddToCartIcon,
  RemoveFromCartIcon,
  ClearCartIcon,
  CartIcon,
  BuyIcon,
} from "../components/Icons/Icons";
import axios from "axios";
import { useEffect, useId, useState } from "react";
import "./Cart.css";
import { useCart } from "../Hooks/useCart";
import { useNavigate } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import PropTypes from 'prop-types';

export function CartItem({
  thumbnail,
  price,
  title,
  quantity,
  addToCart,
  product,
}) {
  const precioPesosColombianos = (price) => {
    const precioReal = price 
    return precioReal.toLocaleString();
  };

  CartItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
  };

  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${precioPesosColombianos(price)}
      </div>
      <footer>
        <small>Qty:{quantity}</small>
        <button onClick={() => addToCart(product)}>+</button>

      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  const [redirectPaymentMethod, setRedirectPaymentMethod] = useState(false);
  const [precioTotal, setPrecioTotal] = useState(0);
  const [quantity, setQuantity] = useState(1); // Agrega el estado para almacenar la cantidad
  const navigate = useNavigate();
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-68c80dca-40a2-453a-a967-22974afd11b9");

  const createPreference = async (title, price, quantity) => {
    try {
      const response = await axios.post("http://localhost:4000/create_preference", {
        title: title,
        price: price,
        quantity: quantity,
        currency_id: "COP" 
      });
  
      const { id } = response.data;
      return id;
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const handleBuy = async (title) => {
    const id = await createPreference( title, precioTotal, parseInt(quantity));
    if (id) {
      setPreferenceId(id);
    }
  };



  function calcularPrecioTotal() {
    const total = cart.reduce(
      (acumulador, producto) => acumulador + producto.price * producto.quantity,
      0
    );
    setPrecioTotal(total);
  }

  function totalPesosColombianos(total) {
    const precioFinal =  total;
    return precioFinal;
  }

  useEffect(() => {
    calcularPrecioTotal();
  }, [cart]);

  if (redirectPaymentMethod) {
    return navigate("/paymentMethod");
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
            product={product}
    key={product.id}
    addToCart={addToCart}
    cart={cart}
    title={product.title}
    price={product.price}
    quantity={product.quantity}
    thumbnail={product.thumbnail}
            />
          ))}
        </ul>

        <button onClick={(product) => handleBuy(product.title)}>
          <BuyIcon />
          Comprar COP - ${totalPesosColombianos(precioTotal)}
        </button>
        {preferenceId && (
          <Wallet initialization={{ preferenceId: preferenceId }} />
        )}
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>

      
    </>
  );
}


