import React from "react";

const Loading = ({ message }) => {
  return (
    <>
      <main className="flex flex-col items-center gap-2">
        <div className="w-6 h-6 rounded-full  border-l-2 border-r-2 border-b-2 border-cyan-900 animate-spin"></div>
        <div className="text-cyan-900 font-semibold ">{message}</div>
      </main>
    </>
  );
};

export default Loading;