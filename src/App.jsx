import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductPage from "./pages/Marketplace/Marketplace";
import Drop from "./pages/Drop/Drop";
import Auctions from "./pages/Auctions/Auctions";
import { ContextProvider } from "./Context";
import ProductItem from "./pages/ProductItemPage/ProductItem";
import Cart from "./pages/cart/Cart";
import CartShippingDetails from "./pages/cart/CartShippingDetails";
import PaymentCheckout from "./pages/PaymentCheckout";
import Confirmation from "./pages/cart/confirmation/Confirmation";
import Livebid from "./pages/livebid/Livebid";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="marketplace" element={<ProductPage />} />
      <Route path="marketplace/:productId" element={<ProductItem />} />
      <Route path="cart" element={<Cart />} />
      <Route path="shipping-details" element={<CartShippingDetails />} />
      <Route path="checkout" element={<PaymentCheckout />} />
      <Route path="checkout-success" element={<Confirmation />} />
      <Route path="auctions" element={<Auctions />} />
      <Route path="/live-bid/:productId" element={<Livebid />} />
      <Route path="drop" element={<Drop />} />
    </Route>
  )
);

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
