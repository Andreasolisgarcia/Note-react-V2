import React from "react";

const Bar = ({
  notes,
  handleSubmit,
  handleDelete,
  isActiveNote,
  setIsActiveNote,
  setActiveNote,
}) => {
  const dateFormater = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    return newDate;
  };

  return (
    <div className="app-sidebar">
      <div clasName="app-sidebar-header">
        <h1>note</h1>
        <button onClick={handleSubmit}>Add</button>
      </div>

      <div className="app-sidebar-notes">
        {notes.map((note) => (
                    <div
            className={`app-sidebar-note ${note.id === isActiveNote && "active"}`}
            onClick={() => {
              setIsActiveNote(note.id);
              setActiveNote(note);
            }}
          >
            <div className="sidebar-note-tittle">
              <strong>{note.title}</strong>

              <button
                onClick={() => {
                  if (window.confirm("Are you sure ?")) {
                    handleDelete(note.id);
                  }
                }}
              >
                Delete
              </button>
            </div>

            <p>
              {note.content.length > 100
                ? note.content.substr(0, 97) + "..."
                : note.content}
            </p>
            <div className="note-meta">
              last modified {dateFormater(note.lastModified)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
