import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Section({ item, index, pathContentList, setPathContentList }) {
  const [clicked, setClicked] = useState(false);
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
    setClicked(false);
  }

  function removeItem() {
    const updatedList = pathContentList.filter((i, idx) => idx !== index);
    setPathContentList(updatedList);
  }

  return (
    <div className="sectionContainer">
      {clicked ? (
        <form onSubmit={(e) => updateSectionName(e)}>
          <input
            onChange={(e) => handleChange(e)}
            value={sectionName}
            placeholder="New Section"
          />
        </form>
      ) : (
        <span onClick={() => setClicked(true)}>
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
