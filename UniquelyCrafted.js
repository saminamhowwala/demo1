import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import aboutone from '../../Assets/images/db-images/about-1.png'
import '../../Assets/ccs/dbstyle.css'
// import { Link, NavLink } from 'react-router-dom';

const UniquelyCrafted = () => {
  return (
   <>
   <div className='db_unique_crafed db_space_one'>
   <Container>
    <Row>
        <Col lg={6} md={6} sm={12}>
        <div className='db_engement_ring'>
            <div className='bd_engement_img'>
             <img src={aboutone} alt='ENGAGEMENT RINGS' className="img-fluid" />
            </div>
        </div>
        </Col>
        <Col lg={6} md={6} sm={12} className='d-flex align-items-center'>
        <div className='db_engement_unique'>
            <div className='bd_engement_content'>
                <h5 className='db_heading_one'>ENGAGEMENT RINGS</h5>
                <h2  className='db_headingtwo'>Uniquely crafted just for you</h2>
                <p className='bd_para_text'>The pinicale expression of love, Culet Diamonds Custom-made engagement 
                    rings featuring the rarest D-F colour, eye clean diamonds GIA certified 
                    conflict free. Made to the highest level of detail by our team of 
                    experience Jewellers and Diamond setters.</p>
                    {/* <NavLink to="/"> */}
                        <Button variant="dark" className='db_shopnow'>SHOP NOW</Button>
                        {/* </NavLink> */}

            </div>
        </div>
        </Col>
    </Row>
 </Container>
   </div>
   </>
  )
}

export default UniquelyCrafted
