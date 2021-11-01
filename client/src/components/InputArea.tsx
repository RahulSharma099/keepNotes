import { useState } from "react";
import { IoIosAdd, IoIosColorPalette } from "react-icons/io";
import { BiBellPlus, BiImage } from "react-icons/bi";
import { BsPin } from "react-icons/bs";
import { toast } from "react-toastify";
import { format } from "date-fns";
import * as yup from "yup";

export interface NoteData {
  title: string;
  content: string;
  id: string;
  date: string;
}

const defaultNote: NoteData = {
  title: "",
  content: "",
  id: "",
  date: format(new Date(), "yyyy-MM-dd"),
};

const validateNote = async (noteData) => {
  const schema = yup.object().shape({
    title: yup.string(),
    content: yup.string().required("Note is a required field"),
    id: yup.string(),
    date: yup.string().required(),
  });
  return await schema.isValid(noteData);
};

const InputArea = (props) => {
  const [note, setNote] = useState<NoteData>({ ...defaultNote });
  const [focus, setFocus] = useState<boolean>(false);

  const handleSubmit = async (event): Promise<void> => {
    try {
      event.preventDefault();

      if (!(await validateNote(note))) {
        throw new Error("You need to pass some data in order to save it");
      }

      props.onAdd({ ...note, date: Date.now() });
      toast.success("Added Note");

      setNote(defaultNote);
    } catch (error: any) {
      console.error(error);
      toast.error(error.message);
    }
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
        className="flex flex-col relative w-1/3 mt-8 mr-auto mb-12 ml-auto p-2 rounded-lg shadow-lg"
      >
        {focus && (
          <div className="flex justify-between ">
            <input
              className="border-none outline-none py-1.5 px-3 mb-5 text-base resize-none"
              type="text"
              value={note.title}
              onClick={() => setFocus(true)}
              placeholder="Title"
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              name="title"
            />
            <BsPin className="" />
          </div>
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
        <div className="flex pb-4 text-gray-600">
          <IoIosColorPalette className="ml-3" size={20} />
          <BiBellPlus className="ml-8" size={20} />
          <BiImage className="ml-8" size={20} />
        </div>
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
