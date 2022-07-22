import React, { useState } from "react";

function Course({ item }) {
  return (
    <div className="courseContainer">
      <span>{item.description}</span>
      <button className="btn">x</button>
    </div>
  );
}

export default Course;
