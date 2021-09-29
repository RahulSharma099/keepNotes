import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";

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
  const [focus, setFocus] = useState<boolean>(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(note);
    setNote(formData);
  };

  const handleBlur = (event) => {
    if (
      event.target.tagName === "TEXTAREA" ||
      event.target.tagName === "BUTTON"
    ) {
      console.log(event.target.tagName);
      return;
    }
    console.log(event.target.tagName);
    setFocus(false);
  };

  return (
    <div>
      <form
        onBlur={handleBlur}
        className="flex flex-col relative w-600 mt-8 mr-auto mb-12 ml-auto p-2 rounded-lg shadow-lg"
      >
        {focus && (
          <input
            className="border-none outline-none py-1.5 px-3 mb-5 text-base resize-none"
            type="text"
            value={note.title}
            onClick={() => setFocus(true)}
            placeholder="Title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            name="title"
          />
        )}
        <textarea
          className="border-none placeholder-gray-500 outline-none py-1.5 px-3 text-base resize-none"
          name="content"
          value={note.content}
          onClick={() => {
            setFocus(true);
          }}
          rows={focus ? 3 : 1}
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
          <IoIosAdd size={28} />
        </button>
      </form>
    </div>
  );
};

export default InputArea;
