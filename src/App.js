import React from 'react';
import "./index.css";
import Navbar from "./components/Navbar/NavbarComponent"
import {Col, Container, Row} from 'react-bootstrap';
import ListCategory from './components/Kategori/ListCategory';
import Content from './components/Kontent/Content';

function App() {
    return (
        <div>
        <Navbar />
        <Container>
            <div className="mt-4">
                <Container fluid>
                    <Row>
                        <ListCategory/>
                        <Col>
                            <h4>
                                <strong>Daftar Product</strong>
                            </h4>
                            <hr/>
                        </Col>
                        <Content/>
                    </Row>
                </Container>
          </div>
          </Container>
        </div>
    );
}

export default App;
