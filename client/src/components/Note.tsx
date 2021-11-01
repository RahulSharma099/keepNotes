import { HTMLAttributes } from "react";
import { cx } from "@emotion/css";
import { MdDelete } from "react-icons/md";

const Note = ({
  id,
  title,
  content,
  date,
  onDelete,
  className,
  ...rest
}: {
  title: string;
  content: string;
  date: string;
  onDelete: (id: string) => void;
  id: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cx(
        "relative bg-white w-60 rounded-lg shadow-lg p-3 m-2 float-left",
        className
      )}
      {...rest}
    >
      <h4 className="absolute top-1 right-0 text-gray-500 px-2 text-sm">
        {date}
      </h4>
      <div>
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
    </div>
  );
};

export default Note;
