import meter1 from "../assets/img/react.png";
import meter2 from "../assets/img/node.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/html.png";
import meter5 from "../assets/img/css.png";
import meter6 from "../assets/img/c.png";
import meter7 from "../assets/img/mongodb.png";
import meter8 from "../assets/img/mysql.png";
import meter9 from "../assets/img/reactnative.png";
import meter10 from "../assets/img/ExpressJS.png";
import meter11 from "../assets/img/jquery.png";
import meter12 from "../assets/img/json-file.png";
import meter13 from "../assets/img/bootstrap.png";
import meter14 from "../assets/img/material.png";
import meter15 from "../assets/img/python.png";
import meter16 from "../assets/img/deployment.png";
import meter17 from "../assets/img/github-logo-silhouette-in-a-square.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> Strong problem-solving abilities, attention to detail, and effective collaboration skills to deliver high-quality websites that meet client objectives.</p>
                        <Carousel responsive={responsive}  infinite={true} className="owl-carousel owl-theme skill-slider" autoPlay autoPlaySpeed={2000} >
                            <div className="item">
                                
                                <img src={meter1} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JavaScript</h5>
                            </div>

                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>CSS</h5>
                            </div>

                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>C Programming</h5>
                            </div>

                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>

                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>MySQL</h5>
                            </div>

                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>ReactNative</h5>
                            </div>


                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Express JS</h5>
                            </div>

                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>jQuery</h5>
                            </div>

                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>JSON</h5>
                            </div>

                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>Material UI</h5>
                            </div>

                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>Python</h5>
                            </div>

                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Deployment</h5>
                            </div>

                            <div className="item">
                                <img src={meter17} alt="Image" />
                                <h5>GitHub</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
