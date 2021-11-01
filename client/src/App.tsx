import { nanoid } from "nanoid";
import { useState } from "react";
import Header from "./components/Header";
import InputArea, { NoteData } from "./components/InputArea";
import Note from "./components/Note";
import { ToastContainer } from "react-toastify";
import { format } from "date-fns";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [notes, setNotes] = useState<NoteData[]>([]);

  const addNote = (newNote: NoteData) => {
    setNotes((prevValue) => {
      return [
        ...prevValue,
        { ...newNote, id: nanoid(), date: format(Date.now(), "eee MMM dd") },
      ];
    });
  };

  const handleDelete = (id: string) => {
    setNotes((preValue: NoteData[]) => {
      return [...preValue.filter((note) => note.id !== id)];
    });
  };

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
      />
      <Header />
      <InputArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          date={note.date}
          onDelete={handleDelete}
          className="hover:shadow-md"
        />
      ))}
    </div>
  );
}

export default App;
