import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";


function Header() {
  const [InputSearch, setInputSearch] = useState("")

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to='/'>
          <img
            className="header_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header_input">
        <input onChange={(e) => setInputSearch(e.target.value)}
          value={InputSearch} placeholder="Search" type="text" />
        <Link to={`/search/${InputSearch}`}>
          <SearchIcon className="header_inputbutton" />

        </Link>
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icons" />
        <AppsIcon className="header_icons" />
        <NotificationsIcon className="header_icons" />
        <Avatar className="header_icons" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
    </div>
  );
}

export default Header;
