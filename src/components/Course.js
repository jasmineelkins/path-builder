import React, { useState } from "react";

function Course({ course }) {
  return (
    <div className="courseContainer">
      <span>{course}</span>
    </div>
  );
}

export default Course;
