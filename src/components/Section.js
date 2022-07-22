import React, { useState } from "react";

function Section({ item, index, contentList, setContentList }) {
  const [clicked, setClicked] = useState(false);
  const [sectionName, setSectionName] = useState();

  function handleChange(e) {
    setSectionName(e.target.value);
  }

  function updateSectionName(e) {
    e.preventDefault();
    setClicked(false);
  }

  function removeItem() {
    const updatedList = contentList.filter((i, idx) => idx !== index);
    setContentList(updatedList);
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

      <button className="btn" onClick={removeItem}>
        x
      </button>
    </div>
  );
}

export default Section;
