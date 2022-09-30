import App from '../App';
import {createBrowserRouter} from "react-router-dom";
import Index from "../components/products/Index";
import Contact from "../components/products/Contact";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Index />,
            },
            {
                path: "contact/:contactId",
                element: <Contact />,
            },
        ],
    },
]);

export default Router;