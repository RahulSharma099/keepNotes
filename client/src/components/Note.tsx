import { MdDelete } from "react-icons/md";

const Note = ({ title, content, onDelete, id }) => {
  return (
    <div className="bg-white w-60 rounded-lg shadow-lg p-3 m-2 float-left">
      <h1 className="text-base font-medium mb-2">{title}</h1>
      <p className="text-base mb-3 whitespace-pre-wrap break-words">
        {content}
      </p>
      <button
        className="relative float-right text-yellow-600 bg-none cursor-pointer outline-none"
        onClick={() => onDelete(id)}
      >
        <MdDelete size={25} />
      </button>
    </div>
  );
};

export default Note;
