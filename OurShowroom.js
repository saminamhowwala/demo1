import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dh from '../../Assets/images/db-images/h-diamond.png'
const OurShowroom = () => {
  return (
   <>
<div className='db_learn_daimond_showroom'>
        <Container>
        <Row>
         <Col md={6} sm={12} lg={6}>
         <div className='db_learn_Diamonds'>
          <div className='db_until'>
            <div className='img-hove-zoom image-box'>
                <img src={dh} alt='kearn' className='img-fluid' />
            </div>
          </div>
         </div>
         </Col>
        </Row>
        </Container>
    </div>
   </>
  )
}

export default OurShowroom
