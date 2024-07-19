import { useGlobalContext } from "../Context";

import movies from "../images/movies.png";
import blogs from "../images/blogs.png";
import ecommerce from "../images/ecommerce.png";
import imagesearch from "../images/imagesearch.png";
import weather from "../images/weather.png";
import portfolio from "../images/portfolio.png";

const Projects = () => {
  const { closeNavBar } = useGlobalContext();

  return (
    <section id="projects" onClick={closeNavBar}>
      <h1>Projects</h1>
      <p>Things I've built so far</p>
      <div className="projects-container">
        {/* Project 1 */}
        <div
          className="project-card"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={blogs} alt="blogs" />
          <div className="project-details">
            <h4>Blogs web-app</h4>
            <p className="project-description">
              I built a sleek blog website powered by Firebase, where you can
              effortlessly publish and share your thoughts with the world.
            </p>
            <div className="actions">
              <span>
                <i className="fa-solid fa-link"></i>
                <a
                  href="https://next-blog-mauve-three.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              </span>
              <span>
                <i className="fa-brands fa-github"></i>
                <a
                  href="https://github.com/saeedyussif663/next-blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* project  2 */}
        <div
          className="project-card"
          data-aos="fade-down-right"
          data-aos-duration="1000"
        >
          <img src={movies} alt="movies" />
          <div className="project-details">
            <h4>Movies web-app</h4>
            <p className="project-description">
              I developed a dynamic movie app that seamlessly fetches and
              showcases the latest films from  the moviedb API
            </p>
            <div className="actions">
              <span>
                <i className="fa-solid fa-link"></i>
                <a
                  href="https://saeed-movies-app.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              </span>
              <span>
                <i className="fa-brands fa-github"></i>
                <a
                  href="https://github.com/saeedyussif663/movies-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* project 3 */}

        <div
          className="project-card"
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <img src={ecommerce} alt="E-commerce" />
          <div className="project-details">
            <h4>project title</h4>
            <p className="project-description">
              Crafted a feature-rich e-commerce platform that offers a seamless
              shopping experience, with secure transactions and a wide array of
              products to choose from
            </p>
            <div className="actions">
              <span>
                <i className="fa-solid fa-link"></i>
                <a
                  href="https://saeed-e-commerce.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Preview
                </a>
              </span>
              <span>
                <i className="fa-brands fa-github"></i>
                <a
                  href="https://github.com/saeedyussif663/e-commerce"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
