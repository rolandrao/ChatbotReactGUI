import '../css/index.css';
import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';

export default function InteractionWindow() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  function handleQueryChange(e) {
    setQuery(e.target.value);
    console.log(query);
  }

  function updateResponse(e) {
    // TODO add code to make http request and populate response textarea
    // with the response from the request
  }


  return (
        <>
            <Form className="centered-form" >

      <Form.Group  className="mb-3" >
        <FloatingLabel controlId="floatingInput" label="Query">
          <Form.Control type="input" onChange={handleQueryChange} placeholder="Query" />
        </FloatingLabel>
      </Form.Group>
      <Button className="float-end" variant="danger" onClick={updateResponse}>
        Submit
      </Button>
      <br></br>
      <Form.Group  className="mb-3">
        <Form.Label>Response</Form.Label>
          <Form.Control id="responseField" as="textarea" wrap="hard" placeholder="Response"/>
      </Form.Group>

    </Form>
        </>
  );
}

