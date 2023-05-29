import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import security_logo from '../assets/security_logo.png';
const Admin: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#EBE2E2', minHeight: '100vh' }}>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: '100vh' }}
            >
                <Row>
                    <Col>
                        <Card className="p-4" style={{ minWidth: '400px' }}>
                            <div className="text-center mb-4">
                                <h1
                                    style={{
                                        fontWeight: 'bold',
                                        fontFamily: 'Arial, sans-serif',
                                        display: 'inline',
                                    }}
                                >
                                    Admin Page
                                </h1>
                            </div>
                            <div className="text-center mt-5">
                                <Button
                                    variant="secondary"
                                    style={{
                                        width: '100%',
                                        minWidth: '400px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    Manage Problems
                                </Button>
                                <Button
                                    variant="secondary"
                                    style={{
                                        width: '100%',
                                        minWidth: '400px',
                                        marginBottom: '100px',
                                    }}
                                >
                                    Manage Users
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;
