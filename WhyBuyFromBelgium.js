import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import perring from '../../Assets/images/db-images/rings_1.png'
import perprism from '../../Assets/images/db-images/rings_2.png'
import perbird from '../../Assets/images/db-images/rings_3.png'
import { Link } from 'react-router-dom';
import '../../Assets/ccs/dbstyle.css'
const WhyBuyFromBelgium = () => {
  return (
    <>
    <div className='db_why_buy_belgium'>
     <Container>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <div className='db_titel_why'>
                <h2 className='db_headingtwo'>Why Buy From Belgium</h2>
            </div>
          </Col>
        </Row>
        <Row>
         <Col  md={4} lg={4} sm={4}>
            <div className='db_personalised'>
                <div className='db_pfyou'>
                    <img src={perring} alt='PERSONALISED FOR YOU' />
                    <h5>PERSONALISED FOR YOU</h5>
                    <p className='bd_para_text'>Experience our friendly service dealing 
                        directly with our expert jewellers in a 
                        relaxed environment.</p>
                </div>
            </div>
         </Col>
         <Col  md={4} lg={4} sm={4}>
            <div className='db_personalised'>
                <div className='db_pfyou'>
                    <img src={perprism} alt='PERSONALISED FOR YOU' />
                    <h5>PERSONALISED FOR YOU</h5>
                    <p className='bd_para_text'>Experience our friendly service dealing 
                        directly with our expert jewellers in a 
                        relaxed environment.</p>
                </div>
            </div>
         </Col>
         <Col  md={4} lg={4} sm={4}>
            <div className='db_personalised'>
                <div className='db_pfyou'>
                    <img src={perbird} alt='PERSONALISED FOR YOU' />
                    <h5>PERSONALISED FOR YOU</h5>
                    <p className='bd_para_text'>Experience our friendly service dealing 
                        directly with our expert jewellers in a 
                        relaxed environment.</p>
                </div>
            </div>
         </Col>
        </Row>
        <div className='db_learnmore'>
        {/* <Link to="/"> <h4>LEARN MORE</h4> </Link> */}
        <h4>LEARN MORE</h4> 
        </div>
     </Container>
    </div>
    </>
  )
}

export default WhyBuyFromBelgium
