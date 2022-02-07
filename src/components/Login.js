import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const Login = () => (
  <Form className="centered-form">
    <Form.Group className="mb-3">
      <FloatingLabel controlId="floatingInput" label="Username">
        <Form.Control type="input" placeholder="Username" />
      </FloatingLabel>
    </Form.Group>

    <Form.Group className="mb-3">
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </Form.Group>
    <div className="d-grid gap-2">
      <Button variant="danger" size="lg">Log In</Button>
    </div>
  </Form>
);


export default Login;