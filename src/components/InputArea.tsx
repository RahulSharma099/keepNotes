import React from "react";

const InputArea = (props) => {
  return (
    <div>
      <form className="flex flex-col relative w-600 mt-8 mr-auto mb-12 ml-auto p-2 rounded-lg shadow-lg">
        <input
          className="border-none outline-none py-1.5 px-3 mb-5 text-base resize-none"
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="border-none placeholder-gray-500 outline-none py-1.5 px-3 text-base resize-none"
          name="content"
          placeholder="Take a note..."
        >
          {" "}
        </textarea>
      </form>
    </div>
  );
};

export default InputArea;
