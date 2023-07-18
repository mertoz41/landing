import React from "react";
import "../App.css";
import Logo from "../pics/cezslogo.png";
import { withRouter } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import { animated, useSpring } from "react-spring";
import First from "../pics/first.png";
import Second from "../pics/second.png";
import Third from "../pics/third.png";
import Fourth from "../pics/fourth.png";
const FirstPage = ({ history, handlePageChange, currentPage }) => {
  const animation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={animation}>
      <div className="container">
        <img src={Logo} className="logo" alt="logo" />
        <h1 className="coloredfont">Music from instrumentalists.</h1>
        <h4 className="description">
          Musicians platform focused on instruments and music as performing
          arts. Here, you build a portfolio by playing your favorite songs, then
          discover new music and musicians to follow through our catalog.
        </h4>
        <div className="ssContainer">
          <img src={First} alt="discover" className="screenShot" />
          <img src={Second} alt="discover" className="screenShot" />
        </div>
        <h4 className="description">
          Maps allows you to pinpoint upcoming gigs and recruit talent around
          you to collaborate or start a band. Whether you are an enthusiast,
          hobbyist, or professional, join today to be part of an exclusive
          community at Cezs.
        </h4>
        <div className="ssContainer">
          <img src={Third} alt="discover" className="screenShot" />
          <img src={Fourth} alt="discover" className="screenShot" />
        </div>

        <h2 className="title">
          <a
            href="https://apps.apple.com/us/app/cezs/id6450903389"
            target="_blank"
            style={{ color: "white", fontWeight: 400 }}
          >
            Available in App Store.
          </a>
        </h2>
        <div
          style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <h5
            className="title"
            style={{
              cursor: "pointer",
              padding: 5,
              color: "#9370DB",
              textDecoration: "underline",
            }}
            onClick={() => history.push("/privacy")}
          >
            privacy policy
          </h5>
          <h5
            className="title"
            style={{
              cursor: "pointer",
              padding: 5,
              color: "#9370DB",
              textDecoration: "underline",
            }}
            onClick={() => history.push("/help")}
          >
            <a>support</a>
          </h5>
        </div>
      </div>
    </animated.div>
  );
};

export default withRouter(FirstPage);