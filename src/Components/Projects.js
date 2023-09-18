import movies from "../images/movies.png";


const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="projects-container">
                {/* project  1 */}
                <div className="project-card">
                    <img src={movies} alt="movies" />
                    <div className="project-details">
                        <h4>project title</h4>
                        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="actions">
                            <span>
                                <i class="fa-solid fa-link"></i>
                                <a href="#" target="_blank">Live Preview</a>
                            </span>  
                               <span>
                                <i class="fa-brands fa-github"></i>
                                <a href="#" target="_blank">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>
                
                {/* Project 2 */}
                <div className="project-card">
                    <img src={movies} alt="movies" />
                    <div className="project-details">
                        <h4>project title</h4>
                        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="actions">
                            <span>
                                <i class="fa-solid fa-link"></i>
                                <a href="#" target="_blank">Live Preview</a>
                            </span>  
                               <span>
                                <i class="fa-brands fa-github"></i>
                                <a href="#" target="_blank">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

                {/* project 3 */}

                <div className="project-card">
                    <img src={movies} alt="movies" />
                    <div className="project-details">
                        <h4>project title</h4>
                        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="actions">
                            <span>
                                <i class="fa-solid fa-link"></i>
                                <a href="#" target="_blank">Live Preview</a>
                            </span>  
                               <span>
                                <i class="fa-brands fa-github"></i>
                                <a href="#" target="_blank">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

                {/* Project 4 */}

                <div className="project-card">
                    <img src={movies} alt="movies" />
                    <div className="project-details">
                        <h4>project title</h4>
                        <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="actions">
                            <span>
                                <i class="fa-solid fa-link"></i>
                                <a href="#" target="_blank">Live Preview</a>
                            </span>  
                               <span>
                                <i class="fa-brands fa-github"></i>
                                <a href="#" target="_blank">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

            {/* Project 5 */}

            <div className="project-card">
                <img src={movies} alt="movies" />
                <div className="project-details">
                    <h4>project title</h4>
                    <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <div className="actions">
                        <span>
                            <i class="fa-solid fa-link"></i>
                            <a href="#" target="_blank">Live Preview</a>
                        </span>  
                        <span>
                            <i class="fa-brands fa-github"></i>
                            <a href="#" target="_blank">View Code</a>
                        </span> 
                    </div>
                </div>
            </div>
                
            {/* Project 6  */}
        <div className="project-card">
            <img src={movies} alt="movies" />
            <div className="project-details">
                <h4>project title</h4>
                <p className="project-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="actions">
                    <span>
                        <i class="fa-solid fa-link"></i>
                        <a href="#" target="_blank">Live Preview</a>
                    </span>  
                    <span>
                        <i class="fa-brands fa-github"></i>
                        <a href="#" target="_blank">View Code</a>
                    </span> 
                </div>
            </div>
         </div>    
        </div>
        </section>
    )
}

export default Projects