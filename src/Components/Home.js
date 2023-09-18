import Header from "./Header";

import photo from "../images/image.jpg"

const Home = () => {
    return (
        <section className="home-container" id="home">
            <Header />
            <main>
                <div className="name-section">
                    <h1>Hi  &#x1F44B;, <br/>My name is <br/> <span>Saeed Yussif </span> <br/> I build things for web</h1>
                </div>
                <div className="picture-section">
                    <img src={photo} alt="Saeed Yussif" />
                    <div className="gradient-div "></div>
                </div>
            </main>
        </section>  
    )
};

export default Home;