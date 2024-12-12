import React, { act, useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link, useLocation } from 'react-router-dom'
import newRequest from '../../utils/newRequest';
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate()

  const handleLogout = async ()=>{
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className={active || pathname !=="/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className='logo'>
          <Link to="/" className='link'>
          <span className='text'>fichain</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Fichain Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} />
              <span>{currentUser?.username}</span>
              {open && <div className='options'>
                {currentUser?.isSeller && (
                  <>
                    <Link className='link' to="/mygigs">Gigs</Link>
                    <Link className='link' to="/add">Add New Gigs</Link>
                  </>
                )}
                <Link className='link' to="/orders">Orders</Link>
                <Link className='link' to="/messages">Messages</Link>
                <Link className='link' onClick={handleLogout}>Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !=="/") && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to="/">
            Graphics & Design
            </Link>
            <Link className='link menuLink' to="/">
            Video & Animatin
            </Link>
            <Link className='link menuLink' to="/">
            Writing & Translation
            </Link>
            <Link className='link menuLink' to="/">
            AI Services
            </Link>
            <Link className='link menuLink' to="/">
            Digital Marketing
            </Link>
            <Link className='link menuLink' to="/">
            Programming & Tech
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar