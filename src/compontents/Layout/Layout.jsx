import { Outlet } from "react-router-dom";
import AppNavbar from "../Padge/Navbar/Navbar.jsx";
function Layout () {
    return(
        <>
        <AppNavbar/>
        <Outlet/>
        </>
    )
}
export default Layout;