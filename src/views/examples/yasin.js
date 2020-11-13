import React from "react";

import {
    Badge,
    Button,
    Card,
    CardBody,
    CardHeader, Col,
    Form,
    FormGroup, Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText, Row, Container
} from "reactstrap";
import CardImg from "reactstrap/es/CardImg";
import CardTitle from "reactstrap/es/CardTitle";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import CardText from "reactstrap/es/CardText";

function YasinComponent() {
    return <div>
            <p>Test Sayfası</p>
            <Container style={{textAlign: "left"}}>
                <Badge color="success" pill className="mr-1">
                    key features
                </Badge>
                <div >
                    <Col style={{textAlign:"left", marginTop:".50rem", marginBottom:"2rem"}} lg={7}>
                        <h5>We will helps you to build beautiful websites that stand out and automatically adapt to your style.</h5>
                    </Col>
                </div>

                <Row className="yk7">
                    <Col lg={3}>
                        <Card className="card-lift--hover shadow border-0 rounded"  style={{textAlign: "left"}}>
                            <CardImg/>
                            <CardBody>
                                <CardTitle id={"hdr"}>Modular</CardTitle>
                                <CardText>All components are built to be used in any combination.</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={3}>

                            <Card className="card-lift--hover shadow border-0" style={{textAlign: "left"}}>
                                <CardImg/>
                                <CardBody>
                                    <CardTitle id={"hdr"}>Scalable</CardTitle>
                                    <CardText>Remain consistent while developing new features.</CardText>
                                </CardBody>
                            </Card>

                    </Col>
                    <Col lg={3}>
                        <Card className="card-lift--hover shadow border-0 rounded"  style={{textAlign: "left"}}>
                            <CardImg/>
                            <CardBody>
                                <CardTitle id={"hdr"}>Scalable</CardTitle>
                                <CardText>Remain consistent while developing new features.</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={3}>
                        <Card className="card-lift--hover shadow border-0 rounded" style={{textAlign: "left"}}>
                            <CardImg/>
                            <CardBody>
                                <CardTitle id={"hdr"}>Customizable</CardTitle>
                                <CardText>Change a few variables and the whole theme adapts.</CardText>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
}


export default YasinComponent;