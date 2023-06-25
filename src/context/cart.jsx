import { createContext,  useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext()

 function useCartReducer() {
    const [state, dispatch] =useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = product => dispatch({ type: 'CLEAR_CART' })
   
    return {state, addToCart, clearCart, removeFromCart}
}


    export function CartProvider ({children}) {
    //const cart [cart, setCart] = useState([])    
        const { state, addToCart, removeFromCart, clearCart} = useCartReducer()

     return (
        <CartContext.Provider value={{
            cart: state, 
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
     )
}












//creamos el provider
// siempre le vamos a pasar el children como parametro
// export function CartProvider({ children }){
//     que necesitamos aqui
//     un estado con el cart y el set cart que vamos a hacer que sea un array para que sea lo mas sencillo
//     const [cart, setCart ] = useState([])

//     vamos a hacer el add cart le pasamos un producto y esto añade un producto al carrito
 
//     iniciamos con la forma sencilla de añadir productos al carrito
//     const addToCart = product => {
//         check if the product is already in the cart
//         vamos a buscar en el carrito "cart.findIndex" el indice de ese item donde el item.id sea igual al producto que estamos intentando añadir    
//             const productInCartIndex = cart.findIndex(item => item.id === product.id)
//         si ha encontrado el productICart significa que hay un indice mayor a 0 entonces crea un nuevo carrito utilizando el structured clone    
//         if (productInCartIndex >= 0) {
//             el structuredClone hace copias profundas de los arrays o arreglos
//             aqui estariamos creando un carrito nuevo
//             const newCart = structuredClone(cart)
            
//             entonces vamos a utilizar el indice que hemos recuperado e incrementar la cantidad porque este no es parte del estado, la copia la estamos modificando
//             newCart[productInCartIndex].quantity += 1
//             return setCart(newCart)
//             }

//             si no se cumple entonces producto no esta en el carrito
//             lo unico que tenemos que hacer es setCart
//             setCart(prevState => ([
//                 ...prevState,
//                 {
//                     ...product,
//                     quantity: 1
//                 }
//             ]))
//     }
// const removeFromCart = product => {
    //     setCart(prevState => prevState.filter(item => item.id !== product.id))
    // }

    // debemos crear el hook para leer el contexto useCart.js
    // tambien vamos a necesitar limpiar el carrito
    // const clearCart = product => { 
    //     setCart([])
    //  }
