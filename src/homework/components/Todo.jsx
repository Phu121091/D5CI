import React from "react";

const Todo = ({ category, name, price,description,rate, id,image }) => {
  return (
    <div className="todo">
      <div className="info">
      <p className="id" style={{ color: "red" }}>
        {id}
      </p>
      <p className="name" style={{ color: "orange" }}>
        Name : {name}
      </p>
      <p className="price" style={{ color: "green" }}>
        Price : {price}
      </p>
      <p>Description: {description}</p>
      <p>Category : {category}</p>
      <p>Rate : {rate.rate}- Count : {rate.count}</p>
      </div>
      <img src={image}></img>
      
    </div>
  );
};

export default Todo;
