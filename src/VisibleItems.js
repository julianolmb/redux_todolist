import React from "react";
import Table from "react-bootstrap/Table";
import Item from "./Item";

function VisibleItems(props) {
  console.log(props)
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th> ID</th>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item) => (
            <Item
              key={item.id}
              {...item}
              onClick={() => props.onItemClick(item.id)}
              removeClick={() => props.removeClick(item.id)}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default VisibleItems;
