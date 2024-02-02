import { useEffect, useState } from "react";
import "./App.css";

const Toggletheme = () => {
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="container">
      <div className="navbar">
        <h2>ThemeChanger</h2>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <div className="images">
            <h2>Gallery</h2>
          <div className="left">
            <img
              src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
          </div>
          <div className="right">
            <img
              src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
          </div>
          <div className="btn">
            <button onClick={() => changeTheme()}>ChangeTheme</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toggletheme;
