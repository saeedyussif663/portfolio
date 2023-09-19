import { useGlobalContext } from "../Context";

import HTML from "../images/Html.png";
import CSS from "../images/Css.png";
import JS from "../images/Js.png";
import REACT from "../images/React.png";
import TAILWIND from "../images/TailwindCss.png";
import GIT from "../images/Git.png";
import GITHUB from "../images/Github.png";
import VSCODE from "../images/VsCode.png"

const TechStack = () => {
    const { closeNavBar } = useGlobalContext();

    return (
        <section id="techstack"data-aos="zoom-in" data-aos-duration="2000" onClick={closeNavBar}>
            <h1>My Tech Stack</h1>
            <p>Technologies I've been working with recently</p>
            <div className="icons-container">
                    <img src={HTML} alt="HTML" />
                    <img src={CSS} alt="CSS" />
                    <img src={JS} alt="JS" />
                    <img src={REACT} alt="REACT" />
                    <img src={TAILWIND} alt="TAILWIND" />
                    <img src={GIT} alt="GIT" />
                    <img src={GITHUB} alt="GITHUB" />
                    <img src={VSCODE} alt="VSCODE" />
            </div>
        </section>
    )
}

export default TechStack