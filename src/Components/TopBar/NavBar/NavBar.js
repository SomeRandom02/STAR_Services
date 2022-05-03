import react from "react";

const NavBar = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a className = "f3 link dim black pa3 pointer" href="#">Home</a>
            <a className="f3 link dim black pa3 pointer" href="#webpages">Web Pages</a>
            <a className="f3 link dim black pa3 pointer" href="#techrepair">Tech Repair</a>
        </nav>
    )
}

export default NavBar