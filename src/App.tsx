import { useState } from "react";
import Header from "./components/Header";
import InputArea, { NoteData } from "./components/InputArea";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  const addNote = (newNote) => {
    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  };

  return (
    <div className="App">
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default App;
