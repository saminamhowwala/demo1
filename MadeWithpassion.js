import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../../Assets/ccs/dbstyle.css'
// import { Link, NavLink } from 'react-router-dom';
function MadeWithpassion() {
  return (
   <>
   <div className='db_made_with_passion'>
    <Container>
     <div className='db_titel_made'>
        <h3>Made with passion</h3>
        <p>Our dedicated artisans include diamond setters, 
            jewelry and polishers who work together to guarantee 
            high standards in craftsmanship.</p>
                {/* <NavLink to="/">   */}
                <Button variant="dark" className='db_shopnow'>LEARN MORE</Button>
                {/* </NavLink> */}
     </div>
    </Container>
   </div>
   </>
  )
}

export default MadeWithpassion
