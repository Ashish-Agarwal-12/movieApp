import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  return (
    // <div>
    //     <Container>
    //         <Card>
    //             <Card.Body>
    //                 <Button variant='primary' onClick={() =>{
    //                     localStorage.clear();
    //                     navigate("/");
    //                 }}>Logout</Button>
    //             </Card.Body>
    //         </Card>

    //     </Container>
    // </div>
    <Row style={{ width: "100%", height: "100%" }}>
      <Col
        style={{
          paddingLeft: "530px",
          paddingRight: "530px",
          paddingTop: "150px",
          alignContent: "center",
        }}
      >
        <Card className="bg-black text-white">
          <Card.Body>
            <p>Are you sure you want to Logout?</p>
            <Button
              variant="primary"
              onClick={() => {
                localStorage.clear();
                navigate("/");
                
              }}
              className="text-center"
            >Logout</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
