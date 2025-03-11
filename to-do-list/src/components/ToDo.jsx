import React, { useState } from "react";

function ToDo({ todo, updateTodo, deleteTodo }) {
  const [content, setContent] = useState(todo.content);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleClickDelete = () => {
    deleteTodo(todo.id);
  };

  const handleClickEdit = () => {
    setIsEditMode(true);
  };

  const handleClickCancelEditing = () => {
    setIsEditMode(false);
    setContent(todo.content);
  };

  const handleClickSaveEditing = () => {
    const id = todo.id;
    updateTodo(id, content);
    setIsEditMode(false);
  };

  const handleChangeInput = (e) => {
    setContent(e.target.value);
  };

  if (isEditMode)
    return (
      <div className="flex items-center gap-2">
        <input
          value={content}
          onChange={handleChangeInput}
          className="border px-2 grow"
        />
        <button
          onClick={handleClickCancelEditing}
          className="text-white px-2 py-0.5 font-semibold bg-red-400"
        >
          수정 취소
        </button>
        <button
          className="text-white px-2 py-0.5 font-semibold bg-blue-400"
          onClick={handleClickSaveEditing}
        >
          수정 완료
        </button>
      </div>
    );

  return (
    <div className="flex items-center gap-2">
      <span className="grow">{todo.content}</span>
      <button
        onClick={handleClickEdit}
        className="text-white px-2 py-0.5 font-semibold bg-yellow-400"
      >
        수정하기
      </button>
      <button
        className="text-white px-2 py-0.5 font-semibold bg-red-400"
        onClick={handleClickDelete}
      >
        삭제하기
      </button>
    </div>
  );
}

export default ToDo;
