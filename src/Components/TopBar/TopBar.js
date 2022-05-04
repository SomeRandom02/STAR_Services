import react from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import './TopBar.css';

const TopBar = () => {
    return(
        <div className="topBar">
            <div className="logo">
                <Logo />    
            </div> 
            <div className="nav" >
                <NavBar />
            </div>
        </div>




    )
}


export default TopBar