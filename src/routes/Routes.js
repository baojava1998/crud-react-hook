import App from '../App';
import {createBrowserRouter} from "react-router-dom";
import Index from "../components/products/Index";
import Contact from "../components/products/Contact";
import Create from "../components/products/Create";
import Edit from "../components/products/Edit";

const Router = createBrowserRouter([
    {
        path: "/products",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Index />,
            },
            {
                path: "create",
                element: <Create />,
            },
            {
                path: "edit/:productId",
                element: <Edit />,
            },
            {
                path: "contact/:contactId",
                element: <Contact />,
            },
        ],
    },
]);

export default Router;