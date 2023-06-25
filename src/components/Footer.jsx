import { useFilters } from '../Hooks/useFilter'
import './Footer.css'
import { useCart } from '../Hooks/useCart'

export function Footer () {
    const { cart } = useCart()

    return (
             
             <footer className='footer'>
                 <h4>WeliveFromArt Company _ 🌈   
                 <span> @welivefromart</span>
                 </h4>
                 <h5>Shopping Cart </h5>
             </footer>
              
           
    )
}

 {/* {
                JSON.stringify(cart, null, 2)
            } */}