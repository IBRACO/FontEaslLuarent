import React from "react";
import {Container,Row,Col} from "react-bootstrap";


function Training() {
  return (
    <div className="dc">
      <h1>Activiés Sporif</h1>
      
      <div className="displayflex">
        <Container>
          <Row>
          <Col>
          <h2>Lieu de l'activité Sortif</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.919583370774!2d3.096143315737865!3d50.62861067950036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5fd58905a77%3A0xcffa7a55b4a8b011!2sStade%20Jean%20Baratte!5e0!3m2!1sfr!2sfr!4v1630402046149!5m2!1sfr!2sfr" title="titre"width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>

            </Col>
            <Col >
            <div>
          {/* <h1>Horaires des entrainement</h1> */}
          <table class="bg-primary">
            <thead>
              <tr>
                <th colspan="2">Horaires des entrainement</th>
              </tr>
              <tr>
                <th>Jour</th>
                <th>Heur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Samedi</td>
                <td>12H00</td>
              </tr>
            </tbody>
          </table>
        </div>
            </Col>
            
          </Row>
         
        </Container>

      
      </div>
    </div>
  );
}

export default Training;
