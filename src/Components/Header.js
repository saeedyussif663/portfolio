import { useGlobalContext } from "../Context";

const Header = () => {
    const { state, openNavBar} = useGlobalContext();


    const mobileWidth = state.isModalopen ? "navlinks" : "hide-links";
    const icon = state.isModalopen  ? "fa-solid fa-xmark" : "fa-solid fa-bars";

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
                        <a href="https://github.com/saeedyussif663" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a href="http://linkedin.com/in/saeed-yussif-369b111a6" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a href="http://twitter.com/iamsaeedyussif" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </ul>   
            </nav>
            <i className={icon} onClick={openNavBar}></i>
        </header>
    )
}

export default Header