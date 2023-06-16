import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/as (2).png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { AlignMiddle } from "react-bootstrap-icons";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={4}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={4} style={{fontFamily:"cursive" , alignItems:"center", display:"flex",justifyContent:"center",flexDirection:'column',marginTop:-10}}>
           <h2 >{`Contact us:`}</h2><br/>
           <ul style={{listStyleType:'none'}}>
            <li ><b>Email Id: </b>abhirajshrivastva321@gmail.com</li><br/>
            <li><b>Phone No.: </b> 9630991848</li>
           </ul>
            
          
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhiraj-shrivastava-768677224/"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/mr.abhiraj.16/"><img src={navIcon3} alt="Icon" /></a>
            </div>
           
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
