import "./landing.css"

const Landing = () => {
  return (
    <div className="landing">
        <div className="landingImgContainer">
            <img src="/assets/home.png" alt="home" className="landingImg" />
        </div>
      <div className="landingInfo">
        <h2 className="landingTitle">Are you looking for Freelancers?</h2>
        <p className="landingDesc">Hire Great Freelancers, Fast. Spacelance helps you hire elite freelancers at a moment's notice</p>
        <div className="landingSearch">
            <i className="fa-solid fa-magnifying-glass landingSearchIcon"></i>
            <input type="text" className="landingInput" placeholder="Search freelancing work" />
            <button className="landingBtn">Search</button>
        </div>
        <div className="landingTags">
        <b>Popular:</b> UI Design <span>.</span> Web Design <span>.</span> Logo Design <span>.</span> NFT Art
        </div>
      </div>
    </div>
  )
}

export default Landing
