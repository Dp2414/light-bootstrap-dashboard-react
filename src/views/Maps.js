import React from "react";
import { Card, Container } from "react-bootstrap";

function Maps() {
  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <Card.Title as="h4">Maps</Card.Title>
          <p className="card-category">Google Maps Integration</p>
        </Card.Header>
        <Card.Body>
          <div style={{height: '400px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ddd'}}>
            <p className="text-muted">Google Maps API not configured. Add your API key to display maps.</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Maps;
