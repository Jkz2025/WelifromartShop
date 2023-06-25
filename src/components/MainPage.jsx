import { useState } from "react";
import { Products } from "./Products";
import { products as initialProducts } from "../mocks/products.json";
import { Header } from "./Header";
// import { Filters } from "./components/Filters"
import { Footer } from "./Footer";
import { IS_DEVELOPMENT } from "../config.js";
import { useFilters } from "../Hooks/useFilter";
import { Cart } from "./Cart";
import { CartProvider } from "../context/cart";
import { AuthDetails } from "./AuthDetails";

export const MainPage = () => {
  const [products] = useState(initialProducts);
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        {/* <Header>
      <Filters onChage={setFilters} />
    </Header> */}
        <Products products={filteredProducts} />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    <AuthDetails />
    </>
  );
};
