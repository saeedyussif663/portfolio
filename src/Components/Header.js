import { useState } from "react"

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)

    const openNavBar = () => {
        setIsNavOpen(prev => !prev)
    }

    const mobileWidth = isNavOpen ? "navlinks" : "hide-links"



    return (
        <header>
            <h1 className="logo">Saeed</h1>
            <nav>
                <ul className={mobileWidth}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#">Tech Stack</a></li> 
                    <li><a href="#">Projects</a></li> 
                    <li><a href="#">Contacts</a></li> 
                    <div className="socials">
                        <i className="fa-brands fa-github"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                </ul>   
            </nav>
            <i className="fa-solid fa-bars" onClick={openNavBar}></i>
        </header>
    )
}

export default Header