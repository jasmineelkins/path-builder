import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Course({ item, index, pathContentList, setPathContentList }) {
  function removeItem() {
    const updatedList = pathContentList.filter((i, idx) => idx !== index);
    setPathContentList(updatedList);
  }
  return (
    <div className="courseContainer">
      <span>{item.description}</span>
      <button className="btn hidden" onClick={removeItem}>
        <BsTrash />
      </button>
    </div>
  );
}

export default Course;
