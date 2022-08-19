import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navLeft">
            <span className="logo">LOGO</span>
            {/* <div className="navSearchContainer">
                <input type="text" />
                <button>search</button>
            </div> */}
        </div>
        <div className="navCenter">
            <div className="navMenu">
                <div className="menuItem">Freelance Business</div>
                <div className="menuItem">Explore</div>
                <div className="menuItem"><i className="fa-solid fa-globe menuItemIcon"></i><p>English</p></div>
                <div className="menuItem">US$ USD</div>
                <div className="menuItem">Become a seller</div>
                
            </div>
        </div>
        <div className="navRight">
            <button className="navRight btn btn-signin">Sign-in</button>
            <button className="navRight btn btn-join">Join</button>
        </div>
      
    </div>
  )
}

export default Navbar
