import { useState } from "react";

export interface NoteData {
  title: string;
  content: string;
}

const formData: NoteData = {
  title: "",
  content: "",
};

const InputArea = (props) => {
  const [note, setNote] = useState<NoteData>({ ...formData });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote(formData);
  };

  return (
    <div>
      <form className="flex flex-col relative w-600 mt-8 mr-auto mb-12 ml-auto p-2 rounded-lg shadow-lg">
        <input
          className="border-none outline-none py-1.5 px-3 mb-5 text-base resize-none"
          type="text"
          value={note.title}
          placeholder="Title"
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          name="title"
        />
        <textarea
          className="border-none placeholder-gray-500 outline-none py-1.5 px-3 text-base resize-none"
          name="content"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          placeholder="Take a note..."
        >
          {" "}
        </textarea>
        <button
          className="absolute flex items-center justify-center right-5 -bottom-5 bg-yellow-400 text-white border-none cursor-pointer outline-none rounded-full w-9 h-9 shadow"
          onClick={handleSubmit}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputArea;
