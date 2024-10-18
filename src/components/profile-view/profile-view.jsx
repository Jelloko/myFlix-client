import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { UserInfo } from './user-info';
import { UserUpdate } from './user-update';

export const ProfileView = ({user, token, updatedUser, onLoggedOut}) => {

    const ProfileDelete = () => {
        fetch(`https://my-flix-cf-fd6a3633859c.herokuapp.com/users/${user.Name}`, 
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            
        }
        ).then((response) => {
            console.log(response);
            if (response.ok) {
                console.log("Account deleted successfully!");
                onLoggedOut();
            } else {
            alert("Failed to delete account!");
            }
        })
    }
    
    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Header>
                            <UserInfo name={user.Name} email={user.Email}/>
                        </Card.Header>
                    </Card>
                </Col>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                        <UserUpdate
                            user={user}
                            token={token}
                            updatedUser={updatedUser}
                        />
                        </Card.Body>
                        <Card.Body>
                         <Button 
                            variant="danger"
                            onClick={() => {
                                ProfileDelete();
                            }}>
                                Delete account
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};