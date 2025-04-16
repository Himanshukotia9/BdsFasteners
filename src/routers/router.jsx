import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import WhyChooseUs from "../pages/WhyChooseUs";
import ContactUs from "../pages/ContactUs";
import ProductsPage from "../pages/ProductsPage";
import ProductsCategories from "../pages/ProductsCategories";
import PageNotFound from "../pages/PageNotFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/about-us',
                element: <AboutUs/>
            },
            {
                path: '/why-choose-us',
                element: <WhyChooseUs/>
            },
            {
                path: '/products',
                element: <ProductsPage/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            },
            {
                path: '/products/:title',
                element: <ProductsCategories/>
            },
        ]
    },
    {
        path: '*',
        element: <PageNotFound/>,
    }
]);

export default router;