import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function AppNavbar () {
    const [small, setSmall] = useState(false);
   useEffect(()=> {
  const handle = () => {
      if(window.scrollY > 50) {
          setSmall(true);
      }else {
          setSmall(false)
      }
  };
  window.addEventListener("scroll", handle);
  return ()=> window.removeEventListener("scroll",handle)
   })
  return (
    <>
     <nav className={`navbar navbar-expand-lg z-1 ${small ? "navbar-small" : ""}` }>
  <div className="container">
    <Link className="navbar-brand text-white fw-bold fs-3" to="/">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item text-white">
          <NavLink className={({isActive})=> `${isActive ? "active":""} nav-link fw-bold text-white`} aria-current="about" to="/about">About</NavLink>
        </li>
        <li className="nav-item text-white">
          <NavLink className={({isActive})=> `${isActive ? "active" : ""} nav-link fw-bold text-white`} to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item text-white">
          <NavLink className={({isActive})=> `${isActive ? "active" : ""} nav-link fw-bold text-white`} to="content">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default  AppNavbar;

/*














*/