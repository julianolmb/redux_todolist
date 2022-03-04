import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addItem } from "./actions";

const Add = (props) => {
  const [state, cState] = useState("");
  const handleChange = (event) => {
  
    cState({ ...state, description: event.target.value });
  };

  let input;

  return (
    <>
      <Card className="mb-5 mt-2">
        <Card.Body>
          <Form 
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              props.dispatch(addItem(input.value));
              input.value = ""
            }}
          >
            <input
            ref={(node) => {
              input = node;
            }}
              type="text"
              name="description"
              value={state.description}
              onChange={(e) => handleChange(e)}
            />
            <Button className="ml-5" type="submit">
              Add Item{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect()(Add);
