import React, { Component } from 'react';
import './App.css';
import {
  Button,
  UncontrolledAlert, Alert,
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col
} from 'reactstrap';  

class App extends Component {
  render() {
    return (
      <Col lg="10" className="m-auto">
        <div>
          <Button color="success">I am a button</Button>
          <Alert
            color="danger"
            className="mt-3"
          >I am a simple alert</Alert>
          <Button>Learn React</Button>
          <UncontrolledAlert
            color="info"
            fade={true}
            className="mt-3"
          >
            I can be disappear!
            </UncontrolledAlert>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: 80 + "%",
            margin: "auto"
          }}>
            <Card style={{ width: 300, margin: 20 + "px", textAlign: "left" }}>
              <CardImg top width="20%" src="https://picsum.photos/318/180/?random" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card style={{ width: 300, margin: 20 + "px", textAlign: "left" }}>
              <CardImg top width="20%" src="https://picsum.photos/318/180/?random" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card style={{ width: 300, margin: 20 + "px", textAlign: "left" }}>
              <CardImg top width="20%" src="https://picsum.photos/318/180/?random" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card style={{ width: 300, margin: 20 + "px", textAlign: "left" }}>
              <CardImg top width="20%" src="https://picsum.photos/318/180/?random" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card style={{ width: 300, margin: 20 + "px", textAlign: "left" }}>
              <CardImg top width="20%" src="https://picsum.photos/318/180/?random" alt="Card image cap" />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
    );
  }
}

export default App;
