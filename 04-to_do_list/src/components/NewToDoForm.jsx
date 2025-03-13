import React, { useState } from "react";

function NewToDoForm({ addNewTodo }) {
  const [content, setContent] = useState("");

  const handleChangeContent = (e) => {
    const content = e.target.value;
    setContent(content);
  };

  const handleClickAdd = () => {
    if (content.trim() === "") return;

    addNewTodo(content);
    setContent("");
  };

  return (
    <div className="flex">
      <input
        className="grow px-4 border border-gray-500 outline-none h-12"
        value={content}
        onChange={handleChangeContent}
        type="text"
      />

      <button
        className="transition active:bg-blue-900 hover:bg-blue-700 shrink-0 bg-blue-500 text-white px-4 py-1 h-12"
        onClick={handleClickAdd}
      >
        추가하기
      </button>
    </div>
  );
}

export default NewToDoForm;
