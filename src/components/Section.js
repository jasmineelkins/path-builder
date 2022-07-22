import React, { useState } from "react";
import useBoolean from "../hooks/useBoolean";
import { BsTrash } from "react-icons/bs";

function Section({ item, index, pathContentList, setPathContentList }) {
  const [isToggled, { setToggled }] = useBoolean(false);
  const [sectionName, setSectionName] = useState();

  function handleChange(e) {
    setSectionName(e.target.value);
  }

  function updateSectionName(e) {
    e.preventDefault();
    const updatedList = pathContentList.map((i, idx) => {
      if (idx === index) {
        return { ...item, description: sectionName };
      } else return i;
    });
    setPathContentList(updatedList);
    setToggled();
  }

  function removeItem() {
    const updatedList = pathContentList.filter((i, idx) => idx !== index);
    setPathContentList(updatedList);
  }

  return (
    <div className="sectionContainer">
      {isToggled ? (
        <form onSubmit={(e) => updateSectionName(e)}>
          <input
            onChange={(e) => handleChange(e)}
            value={sectionName}
            placeholder="New Section"
          />
        </form>
      ) : (
        <span onClick={setToggled}>
          {sectionName ? sectionName : item.description}
        </span>
      )}

      <button className="btn hidden" onClick={removeItem}>
        <BsTrash />
      </button>
    </div>
  );
}

export default Section;
