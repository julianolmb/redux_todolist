import React from "react";
import Button from "react-bootstrap/Button";

function Item(props) {
  return (
    <tr>
      <td>{props.id}</td>

      <td>
        <span
          style={{
            textDecoration: props.completed ? "line-through" : "none",
          }}
          onClick={props.onClick}
        >
          {props.description}
        </span>
      </td>

      <td>
        <Button variant="danger" onClick={props.removeClick}>
          remove
        </Button>
      </td>
    </tr>
  );
}

export default Item;
