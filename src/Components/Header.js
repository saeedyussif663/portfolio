import { useState } from "react"

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const openNavBar = () => {
        setIsNavOpen(prev => !prev)
    }

    const mobileWidth = isNavOpen ? "navlinks" : "hide-links";
    const icon = isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";

    return (
        <header >
            <h1 className="logo">Saeed</h1>
            <nav>
                <ul className={mobileWidth} onClick={openNavBar}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#techstack">Tech Stack</a></li> 
                    <li><a href="#projects">Projects</a></li> 
                    <li><a href="#contact">Contacts</a></li> 
                    <div className="socials">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </ul>   
            </nav>
            <i className={icon} onClick={openNavBar}></i>
        </header>
    )
}

export default Header