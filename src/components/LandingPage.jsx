import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="bg" />
        <Container className="content">
          <div className="case">
            <div className="assist">
              <h1 id="header">Assisting Companies Since 2016</h1>
            </div>

            <div className="content-number">
              <Row id="total">
                <Col className="total-each">
                  <div>
                    <h2 className="amount">
                      4,000<span className="plus">+</span>
                    </h2>
                  </div>
                  <div className="info">Applicants Applied</div>
                </Col>
                <Col className="total-each">
                  <div>
                    <h2 className="amount">
                      2,000<span className="plus">+</span>
                    </h2>
                  </div>
                  <div className="info">Candidates Hired</div>
                </Col>
                <Col className="total-each">
                  <div>
                    <h2 className="amount">
                      5,000<span className="plus">+</span>
                    </h2>
                  </div>
                  <div className="info">Company Subscriptions</div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
