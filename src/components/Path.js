import React, { useState } from "react";
import Course from "./Course";
import Section from "./Section";
import contentList from "../ContentList";
import useBoolean from "../hooks/useBoolean";

function Path(props) {
  const [pathContentList, setPathContentList] = useState([]);
  const [isToggled, { setToggled }] = useBoolean(false);

  const renderedOptions = contentList.map((item, index) => (
    <option key={index} value={item.description}>
      {item.description}
    </option>
  ));

  function handleContentSelection(e) {
    setPathContentList([
      ...pathContentList,
      { type: "course", description: e.target.value },
    ]);

    setToggled();
  }

  function addNewSection() {
    setPathContentList([
      ...pathContentList,
      { type: "section", description: "New Section" },
    ]);
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

  return (
    <div className="pathContainer">
      <button onClick={addNewSection}>+ Add Section</button>

      <ul>{renderedContent}</ul>

      {isToggled === false ? (
        <button onClick={setToggled}>Add Content</button>
      ) : (
        <form onChange={(e) => handleContentSelection(e)}>
          <select>{renderedOptions}</select>
        </form>
      )}
    </div>
  );
}

export default Path;
