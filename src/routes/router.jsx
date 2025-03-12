import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import WhyChooseUs from "../pages/WhyChooseUs";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";

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
                element: <Products/>
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            },
        ]
    }
]);

export default router;