import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landing from "../Padge/Landing/Landing";
import About from "../Padge/About/About";
import Portfolio from "../Padge/Portfolio/Portfolio";
import Content from "../Padge/Content/Content";

const x = createBrowserRouter([

    {path:"/", element:<Layout/>,children:[
    {index:true, element:<Landing/>},
    {path:"about", element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"content", element:<Content/>},
 ]}
])
export default x;