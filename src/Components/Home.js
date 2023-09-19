import Header from "./Header";
import { useGlobalContext } from "../Context";


import photo from "../images/image.jpg"

const Home = () => {
    const { closeNavBar } = useGlobalContext();

    return (
        <section className="home-container" id="home">
            <Header />
            <main onClick={closeNavBar}>
                <div className="name-section" data-aos="fade-right">
                    <h1>Hi  &#x1F44B;, <br/>My name is <br/> <span>Saeed Yussif </span> <br/> I build things for web</h1>
                </div>
                <div className="picture-section" data-aos="fade-left" >
                    <img src={photo} alt="Saeed Yussif"/>
                    <div className="gradient-div "></div>
                </div>
            </main>
        </section>  
    )
};

export default Home;