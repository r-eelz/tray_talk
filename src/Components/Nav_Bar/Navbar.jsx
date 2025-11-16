import { Link } from "react-router-dom"
import "./main.css"

import tray_talk from "../../assets/TrayTalk.png"

const Navbar = () => {
  return (
    <div className="main">
        <div className="container_div">
         <li className="navbar">
        <img src={tray_talk} alt="" className="logo"></img>
        <Link to="/student-questionaire">
            <button>Student Questions</button>
        </Link>
        <Link to="/student-results">
            <button>Student Results</button>
        </Link>
        <div className="blocker"></div>
        <Link to="/">
            <button>Login</button>
        </Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar
