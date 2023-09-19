import { useGlobalContext } from "../Context"

const About = () => {
    const { closeNavBar } = useGlobalContext();

    return (
        <section id="about"data-aos="fade-down" data-aos-duration="2000" onClick={closeNavBar} >
            <div className="about-me">
                <h1>About Me</h1>
                <p> 👋 Hello! I'm Saeed, a self-taught front-end developer with a passion for crafting user-friendly web experiences. 💻 I thrive on turning ideas into clean, elegant code, and I'm constantly learning and evolving to stay at the forefront of web development.🌟 My goal is to create visually stunning and intuitive websites that not only meet but exceed user expectations. <br/>Let's turn your digital dreams into reality together! 🚀
                </p>
            </div>
            <div className="education">
                <h1>Education</h1>
                <div className="education-details ">
                    <div className="institution">
                        <h3>B. A in Political Science & Philosophy</h3>
                        <p>University Of Ghana</p>
                    </div>
                    < div className="duration">
                        <small>Full Time</small>
                        <p><i className="fa-solid fa-calendar-days"></i>Sep 2019 - August 2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About