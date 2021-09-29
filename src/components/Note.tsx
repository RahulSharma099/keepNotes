const Note = ({ title, content }) => {
  return (
    <div className="bg-white w-60 rounded-lg shadow-lg p-3 float-left">
      <h1 className="text-base font-medium mb-2">{title}</h1>
      <p className="text-base mb-3 whitespace-pre-wrap break-words">
        {content}
      </p>
    </div>
  );
};

export default Note;
