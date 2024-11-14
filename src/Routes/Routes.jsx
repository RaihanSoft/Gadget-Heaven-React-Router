import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import AllProducts from "../Components/AllProducts";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import ContactUs from "../Pages/ContactUs";
import ErrorPage from "../Components/Home/ErrorPage";
import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: (
                  <>
                    <Helmet>
                      <title>Home - Gadgets</title>
                    </Helmet>
                    <Home />
                  </>
                ),
                loader: () => fetch('../category.json'),
                children: [
                    {
                        path: '/',
                        element: (
                          <>
                            <Helmet>
                              <title>All Products - Gadgets</title>
                            </Helmet>
                            <AllProducts />
                          </>
                        ),
                        loader: () => fetch('../gadget.json'),
                    }, 
                    {
                        path: '/category/:name',
                        element: (
                          <>
                            <Helmet>
                              <title>Category - Gadgets</title>
                            </Helmet>
                            <AllProducts />
                          </>
                        ),
                        loader: () => fetch('../gadget.json'),
                    },
                ]
            },
            {
                path: "/statistics",
                element: (
                  <>
                    <Helmet>
                      <title>Statistics - Gadgets</title>
                    </Helmet>
                    <Statistics />
                  </>
                )
            },
            {
                path: "/dashboard",
                element: (
                  <>
                    <Helmet>
                      <title>Dashboard - Gadgets</title>
                    </Helmet>
                    <Dashboard />
                  </>
                ),
                loader: () => fetch('/gadget.json'),
                children: [
                    {
                        path: 'cart',
                        element: (
                          <>
                            <Helmet>
                              <title>Cart - Gadgets</title>
                            </Helmet>
                            <Cart />
                          </>
                        ),
                    },
                    {
                        path: 'wishlist',
                        element: (
                          <>
                            <Helmet>
                              <title>Wishlist - Gadgets</title>
                            </Helmet>
                            <Wishlist />
                          </>
                        )
                    }
                ]
            },
            {
                path: "/contactus",
                element: (
                  <>
                    <Helmet>
                      <title>Contact Us - Gadgets</title>
                    </Helmet>
                    <ContactUs />
                  </>
                )
            },
            {
                path: "/details/:id",
                element: (
                  <>
                    <Helmet>
                      <title>Product Details - Gadgets</title>
                    </Helmet>
                    <ProductDetails />
                  </>
                ),
                loader: () => fetch('../gadget.json'),
            }
        ]
    },
]);

export default router;
