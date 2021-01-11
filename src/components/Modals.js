import React, { Component } from "react";
import { Modal, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import hint from "../img/hint.png";
class Modals extends Component {
  state = {
    openFirstModal: false,
    openSecondModal: false,
  };

  openFirstModal = () => {
    this.setState({
      openFirstModal: true,
    });
  };

  openSecondModal = () => {
    this.setState({
      openSecondModal: true,
    });
    this.closeFirstModal();
  };

  closeFirstModal = () => {
    this.setState({
      openFirstModal: false,
    });
  };

  closeSecondModal = () => {
    this.setState({
      openSecondModal: false,
    });
  };
  render() {
    return (
      <div>
        <div>
          <Button className="open-button" onClick={this.openFirstModal}>
            Modal One
          </Button>
          <Button className="open-button ml-3" onClick={this.openSecondModal}>
            Modal Two
          </Button>
        </div>
        <Modal
          show={this.state.openFirstModal}
          onHide={this.closeFirstModal}
          size="lg sm"
          centered
          dialogClassName="modal-border-radius text-center"
        >
          <Modal.Header className="mt-5 p-0 border-0">
            <Modal.Title className="font-weight-bolder w-100">
              Your Simulation is Calculating.
              <img
                src={hint}
                alt="Hint"
                className="ml-3"
                width={"25px"}
                height={"25px"}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-1 text-center">
            <Row className="mb-3">
              <Col lg={12}>
                <p className="m-0">
                  You can wait for your simulation to be finished,
                  <br />
                  get notification via E-mail or start new simultion parallel.
                </p>
              </Col>
              <Col lg={12} className="mt-3 mb-2 pt-0">
                <Loader type="Circles" color="#336699" height={50} width={50} />
              </Col>
              <Col lg={12} className="mt-4 mb-1 pt-0">
                <ProgressBar
                  animated
                  now={30}
                  style={{ marginLeft: "140px", marginRight: "138px" }}
                />
              </Col>
              <Col lg={12} className="mt-0 mb-4 pt-0">
                <p>Estimated Time: XX minutes</p>
              </Col>
              <Col lg={12}>
                <Button className="button mr-2">
                  GET NITIFICATION VIA E-MAIL
                </Button>
                <Button className="button ml-2">START NEW SIMULATION</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0" />
        </Modal>
        <Modal
          show={this.state.openSecondModal}
          onHide={this.closeSecondModal}
          size="lg sm"
          centered
          dialogClassName="modal-border-radius text-center"
        >
          <Modal.Header className="mt-5 p-0 border-0">
            <Modal.Title className="font-weight-bolder w-100">
              Your Simulation is in a Queue.
              <img
                src={hint}
                alt="Hint"
                className="ml-3"
                width={"25px"}
                height={"25px"}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="pt-1 text-center">
            <Row className="mb-3 ">
              <Col lg={12}>
                <p className="m-0">
                  You can wait for your simulation to be finished,
                  <br />
                  get notification via E-mail or start new simultion parallel.
                </p>
              </Col>

              <Col lg={12} className="mt-4 pt-0 mb-4">
                <p className="second-modal-p">Your Place in Queue</p>
                <Row className="justify-content-center mb-3">
                  <Col lg={1}>
                    <Card className="mini-card">
                      <p className="mini-card-text">1</p>
                    </Card>
                  </Col>
                  <Col lg={1}>
                    <Card className="mini-card">
                      <p className="mini-card-text">2</p>
                    </Card>
                  </Col>
                  <Col lg={1}>
                    <Card className="mini-card">
                      <p className="mini-card-text">3</p>
                    </Card>
                  </Col>
                  <Col lg={1}>
                    <Card className="mini-card">
                      <p className="mini-card-text">4</p>
                    </Card>
                  </Col>
                  <Col lg={1}>
                    <Card className="mini-card-5">
                      <p className="mini-card-text">5</p>
                    </Card>
                    <p className="ml-3">YOU</p>
                  </Col>
                  <Col lg={1}>
                    <Card className="mini-card">
                      <p className="mini-card-text">6</p>
                    </Card>
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Button className="button mr-2">
                  GET NITIFICATION VIA E-MAIL
                </Button>
                <Button className="button ml-2">START NEW SIMULATION</Button>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="border-0" />
        </Modal>
      </div>
    );
  }
}

export default Modals;
