import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import aboutwo from '../../Assets/images/db-images/about-2.png'
import '../../Assets/ccs/dbstyle.css'
// import { Link, NavLink } from 'react-router-dom';
const TogetherForever = () => {
  return (
   <>
    <div className='db_together_forever db_space_one'>
   <Container>
    <Row>
        <Col lg={6} md={6} sm={12} className='d-flex align-items-center'>
        <div className='db_wedding_unique'>
            <div className='bd_wedding_content'>
                <h5 className='db_heading_one'>WEDDING RINGS</h5>
                <h2  className='db_headingtwo'>Together forever</h2>
                <p className='bd_para_text'>
                View our gorgeous collection of wedding rings, 
                purposefully designed to enhance the overall beauty 
                of your engagement ring and symbolise the love you share for one another.
                </p>
                {/* <NavLink to="/">   */}
                <Button variant="dark" className='db_shopnow'>SHOP NOW</Button>
                {/* </NavLink> */}

            </div>
        </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
        <div className='db_wedding_ring'>
            <div className='bd_wedding_img'>
             <img src={aboutwo} alt='ENGAGEMENT RINGS' className="img-fluid" />
            </div>
        </div>
        </Col>
    </Row>
 </Container>
   </div>
   </>
  )
}

export default TogetherForever
