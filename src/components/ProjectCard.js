import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, tech }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
       <h3 style={{fontFamily:"cursive"}}>{title}</h3>
        <div className="proj-txtx">
          <h4 style={{fontFamily:"cursive"}}>{title}</h4>
          <span style={{fontFamily:"cursive"}}>{description}</span><br/>
          <span style={{fontFamily:"cursive"}}>{tech}</span>
        </div>
          
      </div>
    </Col>
  )
}