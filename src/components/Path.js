import React, { useState, useEffect } from "react";
import Course from "./Course";
import Section from "./Section";

function Path(props) {
  const [contentList, setContentList] = useState([]);
  const [contentInput, setContentInput] = useState({});
  //   const [sectionList, setSectionList] = useState([]);

  //   const currentSection = contentList[contentList.length - 1];

  function addNewSection() {
    // adds new section obj to array?
    setContentList([...contentList, { type: "section", name: "New Section" }]);
  }

  function handleChange(e) {
    setContentInput({ type: "course", name: e.target.value });
  }

  function addNewCourse(e) {
    e.preventDefault();
    setContentList([...contentList, contentInput]);
    console.log("content list: ", contentList);
    console.log("content input: ", contentInput);

    setContentInput({});
  }

  //   const renderedSections = contentList.map((item, index) => (
  //     <Course key={index} item={item} />
  //   ));

  const renderedSections = contentList.map((item, index) =>
    item.type === "course" ? (
      <Course
        key={index}
        item={item}
        contentList={contentList}
        setContentList={setContentList}
        index={index}
      />
    ) : (
      <Section
        key={index}
        item={item}
        contentList={contentList}
        setContentList={setContentList}
        index={index}
      />
    )
  );

  //   const renderedSections = contentList.map((item, index) => {
  //     if (item.type === "course") {
  //       <Course key={index} item={item} />;
  //     } else if (item.type === "section") {
  //       <Section key={index} item={item} />;
  //     } else <div></div>;
  //   });

  //   const renderedContent = sectionList.map((section, index) => (
  //     <Section key={index} section={section} />
  //   ));

  return (
    <div className="pathContainer">
      <button onClick={addNewSection}>+ Add Section</button>

      <ul>{renderedSections}</ul>
      {/* <ul>{renderedContent}</ul> */}

      <form onSubmit={(e) => addNewCourse(e)}>
        <input
          onChange={(e) => handleChange(e)}
          value={contentInput.name}
          placeholder="Add Content"
        />
      </form>
    </div>
  );
}

export default Path;
