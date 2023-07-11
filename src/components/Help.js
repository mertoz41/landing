import React from "react";
import "../App.css";
import Logo from "../pics/cezslogo.png";
import { withRouter } from "react-router-dom";

import { animated, useSpring } from "react-spring";

const Help = () => {
  const animation = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={animation}>
      <div className="container">
        <div className="logobox">
          <div>
            <img src={Logo} className="logo" alt="logo" />
            <h1 className="coloredfont">Get in touch</h1>
            <h2 className="title">support@cezsmusic.com</h2>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default withRouter(Help);
