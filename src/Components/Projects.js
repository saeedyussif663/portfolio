import movies from "../images/movies.png";
import blogs from "../images/blogs.png";
import ecommerce from "../images/ecommerce.png";
import imagesearch from "../images/imagesearch.png"
import weather from "../images/weather.png";
import portfolio from "../images/portfolio.png";



const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <p>Things I've built so far</p>
            <div className="projects-container" >
                {/* project  1 */}
                <div className="project-card" data-aos="fade-down-right" data-aos-duration="1000">
                    <img src={movies} alt="movies" />
                    <div className="project-details">
                        <h4>Movies web-app</h4>
                        <p className="project-description">I developed a dynamic movie app that seamlessly fetches and showcases the latest films from  the moviedb API</p>
                        <div className="actions">
                            <span>
                                <i className="fa-solid fa-link"></i>
                                <a href="https://saeed-movies-app.vercel.app/" target="_blank" rel="noreferrer">Live Preview</a>
                            </span>  
                               <span>
                                <i className="fa-brands fa-github"></i>
                                <a href="https://github.com/saeedyussif663/movies-app" target="_blank" rel="noreferrer">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>
                
                {/* Project 2 */}
                <div className="project-card" data-aos="fade-down" data-aos-duration="1000" >
                    <img src={blogs} alt="blogs" />
                    <div className="project-details">
                        <h4>Blogs web-app</h4>
                        <p className="project-description">I built a sleek blog website powered by Firebase, where you can effortlessly publish and share your thoughts with the world.</p>
                        <div className="actions">
                            <span>
                                <i className="fa-solid fa-link"></i>
                                <a href="https://blogs-clone.vercel.app" target="_blank" rel="noreferrer">Live Preview</a>
                            </span>  
                               <span>
                                <i className="fa-brands fa-github"></i>
                                <a href="https://github.com/saeedyussif663/blogs-clone" target="_blank" rel="noreferrer">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

                {/* project 3 */}

                <div className="project-card"data-aos="fade-down-left" data-aos-duration="1000" >
                    <img src={ecommerce} alt="E-commerce" />
                    <div className="project-details">
                        <h4>project title</h4>
                        <p className="project-description">Crafted a feature-rich e-commerce platform that offers a seamless shopping experience, with secure transactions and a wide array of products to choose from</p>
                        <div className="actions">
                            <span>
                                <i className="fa-solid fa-link"></i>
                                <a href="https://saeed-e-commerce.vercel.app" target="_blank" rel="noreferrer">Live Preview</a>
                            </span>  
                               <span>
                                <i className="fa-brands fa-github"></i>
                                <a href="https://github.com/saeedyussif663/e-commerce" target="_blank" rel="noreferrer">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

                {/* Project 4 */}

                <div className="project-card" data-aos="fade-up-right" data-aos-duration="1000" >
                    <img src={imagesearch}  alt="Img-Search" />
                    <div className="project-details">
                        <h4>Image Search</h4>
                        <p className="project-description">Developed an innovative image search app that utilizes the Pixabay API  to find visually similar images quickly and effortlessly</p>
                        <div className="actions">
                            <span>
                                <i className="fa-solid fa-link"></i>
                                <a href="https://saeed-image-search.vercel.app/" target="_blank" rel="noreferrer">Live Preview</a>
                            </span>  
                               <span>
                                <i className="fa-brands fa-github"></i>
                                <a href="https://github.com/saeedyussif663/image-search" target="_blank" rel="noreferrer">View Code</a>
                            </span> 
                        </div>
                    </div>
                </div>

            {/* Project 5 */}

            <div className="project-card"data-aos="fade-up" data-aos-duration="1000" >
                <img src={weather} alt="weather-app" />
                <div className="project-details">
                    <h4>Weather web-app</h4>
                    <p className="project-description">Built a user-friendly weather app that provides up-to-date forecasts and real-time weather data from the OpenWeather API, keeping you prepared for any weather condition</p>
                    <div className="actions">
                        <span>
                            <i className="fa-solid fa-link"></i>
                            <a href="saeed-weather-app.netlify.app/" target="_blank">Live Preview</a>
                        </span>  
                        <span>
                            <i className="fa-brands fa-github"></i>
                            <a href="https://github.com/saeedyussif663/weather-app" target="_blank" rel="noreferrer" >View Code</a>
                        </span> 
                    </div>
                </div>
            </div>
                
            {/* Project 6  */}
        <div className="project-card"data-aos="fade-up-left" data-aos-duration="1000" >
            <img src={portfolio} alt="my-portfolio" />
            <div className="project-details">
                <h4>Portfolio</h4>
                <p className="project-description">Built a personalized portfolio website to showcase my skills, projects, and achievements, giving visitors a glimpse into my creative journey and capabilities</p>
                <div className="actions">
                    <span>
                        <i className="fa-solid fa-link"></i>
                        <a href="saeed-portfolio.vercel.app" target="_blank" rel="noreferrer">Live Preview</a>
                    </span> 
                    <span>
                        <i className="fa-brands fa-github"></i>
                        <a href="https://github.com/saeedyussif663/portfolio" target="_blank" rel="noreferrer">View Code</a>
                    </span> 
                </div>
            </div>
         </div>    
        </div>
        </section>
    )
}

export default Projects