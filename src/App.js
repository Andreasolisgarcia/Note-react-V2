import { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Main from "./components/Main";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [isActiveNote, setIsActiveNote] = useState(false)
  const [activeNote, setActiveNote] = useState([])

  const handleSubmit = () => {
    var newNote = {
      id: uuid(),
      title: "Untilted Node",
      content: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const handleDelete = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  };

  return (
    <div className="App">
      <Bar
        notes={notes}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        isActiveNote= {isActiveNote} 
        setIsActiveNote = {setIsActiveNote}
        
        setActiveNote= {setActiveNote}
      />
      <Main activeNote = {activeNote}/>
    </div>
  );
}

export default App;
