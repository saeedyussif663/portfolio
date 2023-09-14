
const About = () => {
    return (
        <section id="about">
            <div className="about-me">
                <h1>About Me</h1>
                <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</p>
            </div>
            <div className="work-experience">
                <h1>Work Experience</h1>
                <article>
                    <div className="job-title">
                        <h3>Sports Prenseter</h3>
                        <div>
                            <p>Baina Multimedia</p>
                            <p>Madina - Accra</p>
                        </div>
                        <div>
                            <p>Internship</p>
                            <p>March 2023 - Nov 2023</p>
                        </div>
                    </div>
                </article>
            </div>
            <div className="education">
                <h1>Education</h1>
                <div className="details">
                    <h3>B. A in Political Science & Philosophy</h3>
                    <p>University Of Ghana</p>
                </div>
                <div className="duration">
                    <p>Full Time</p>
                    <p>Sep 2019 - August 2023</p>
                </div>
            </div>
        </section>
    )
}

export default About