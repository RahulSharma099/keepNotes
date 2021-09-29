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

  const handleDelete = (id) => {
    setNotes((preValue) => {
      return [...preValue.filter((note, index) => index !== id)];
    });
  };

  return (
    <div className="App">
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
