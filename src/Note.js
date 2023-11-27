// Note.js
import React from "react";

const Note = ({ note }) => {
  return (
    <div className="note">
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <p>{note.createdDate.toDateString()}</p>
      {note.image && <img src={note.image} alt="Note Image" />}
    </div>
  );
};

export default Note;
