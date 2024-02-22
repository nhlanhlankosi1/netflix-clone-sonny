import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  // This is a state to hide or show Nav bar when user scrolls
  const [show, handleShow] = useState(false);

  //Hook to handle navigation using the React-Router by "pushing" routes onto the navigation/history stack
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  //Listen to scroll events to animate the nav bar using transitionNavBar()
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    //After we add the event listener, we need to remove it "clean it up" when we return from this method
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  /* The code: `nav ${show && "nav_black"}` is to make nav_bar style show when the state variable "show" is true*/
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          onClick={() => history.push("/")}
          className="nav_netflix_logo"
          src="https://firebasestorage.googleapis.com/v0/b/netflix-clone-f8d43.appspot.com/o/netflix.png?alt=media&token=90b3f27a-d476-48ca-a0c2-b53ca4a4425c"
          alt="Netflix Logo"
        />

        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
