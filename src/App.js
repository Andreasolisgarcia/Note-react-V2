import { useState, useEffect } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Main from "./components/Main";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [isActiveNote, setIsActiveNote] = useState(false);
  const [activeNote, setActiveNote] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleSubmit = () => {
    var newNote = {
      id: uuid(),
      title: "Untilted Note",
      content: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);

  };

  const handleDelete = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const handleUpdate = (id, updatedTitle, updatedContent) => {
    setNotes(notes.map(note => {
      if (note.id === id) {
        return {
          ...note,
          title: updatedTitle,
          content: updatedContent,
          lastModified: Date.now()
        }
      }
      return note;
    }));
window.location.reload()
  }

  return (
    <div className="App">
      <Bar
        notes={notes}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        isActiveNote={isActiveNote}
        setIsActiveNote={setIsActiveNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={activeNote}
        title = {title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        setActiveNote={setActiveNote}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
