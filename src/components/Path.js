import React, { useState, useEffect } from "react";
import Course from "./Course";

function Path(props) {
  const [courseList, setCourseList] = useState([]);
  const [contentInput, setContentInput] = useState("");

  function handleChange(e) {
    setContentInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCourseList([...courseList, contentInput]);
    console.log(courseList);

    setContentInput("");
  }

  //   useEffect(() => {

  //   }, []);

  const renderedList = courseList.map((course, index) => (
    <Course key={index} course={course} />
  ));

  return (
    <div className="pathContainer">
      <button>+ Add Section</button>

      <ul>{renderedList}</ul>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          value={contentInput}
          placeholder="Add Content"
        ></input>
      </form>
    </div>
  );
}

export default Path;
