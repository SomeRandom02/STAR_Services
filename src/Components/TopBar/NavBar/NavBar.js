import react from "react";
import "./NavBar.scss"


const NavBar = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a className="btn btn1 ma2" id = "button" href="#">Home</a>
            <a className="btn btn2 ma2" id = "button" href="#webpages">Web Pages</a>
            <a className="btn btn3 ma2" id = "button" href="#techrepair">Tech Repair</a>
        </nav>
    )
}

export default NavBar