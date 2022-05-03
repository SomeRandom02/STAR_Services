import react from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";
import './TopBar.css';

const TopBar = () => {
    return(
        <div className="topBar">
            <Logo />
            <NavBar />
        </div>




    )
}


export default TopBar