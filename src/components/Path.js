import React, { useState, useEffect } from "react";
import Course from "./Course";
import Section from "./Section";
import contentList from "../ContentList";

function Path(props) {
  const [pathContentList, setPathContentList] = useState([]);
  const [contentInput, setContentInput] = useState({});
  const [selectedContent, setSelectedContent] = useState("");
  const [selectMode, setSelectMode] = useState(false);

  const renderedOptions = contentList.map((item, index) => (
    <option key={index} value={item.description}>
      {item.description}
    </option>
  ));

  function handleContentSelection(e) {
    console.log("selected course: ", e.target.value);
    setPathContentList([
      ...pathContentList,
      { type: "course", description: e.target.value },
    ]);

    setSelectMode(false);
  }

  function addNewSection() {
    setPathContentList([
      ...pathContentList,
      { type: "section", description: "New Section" },
    ]);
  }

  function handleChange(e) {
    setContentInput({ type: "course", description: e.target.value });
  }

  function addNewCourse(e) {
    e.preventDefault();
    setPathContentList([...pathContentList, contentInput]);
    console.log("path content list: ", pathContentList);
    console.log("content input: ", contentInput);

    setContentInput({});
  }

  const renderedContent = pathContentList.map((item, index) =>
    item.type === "course" ? (
      <Course
        key={index}
        item={item}
        pathContentList={pathContentList}
        setPathContentList={setPathContentList}
        index={index}
      />
    ) : (
      <Section
        key={index}
        item={item}
        pathContentList={pathContentList}
        setPathContentList={setPathContentList}
        index={index}
      />
    )
  );

  //   const renderedContent = contentList.map((item, index) => {
  //     if (item.type === "course") {
  //       <Course
  //         key={index}
  //         item={item}
  //         pathContentList={pathContentList}
  //         setPathContentList={setPathContentList}
  //         index={index}
  //       />;
  //     } else if (item.type === "section") {
  //       <Section
  //         key={index}
  //         item={item}
  //         pathContentList={pathContentList}
  //         setPathContentList={setPathContentList}
  //         index={index}
  //       />;
  //     } else <div></div>;
  //   });

  return (
    <div className="pathContainer">
      <button onClick={addNewSection}>+ Add Section</button>

      <ul>{renderedContent}</ul>

      {selectMode === false ? (
        <button onClick={() => setSelectMode(true)}>Add Content</button>
      ) : (
        <form>
          <select onChange={(e) => handleContentSelection(e)}>
            {renderedOptions}
          </select>
        </form>
      )}
    </div>
  );
}

export default Path;
