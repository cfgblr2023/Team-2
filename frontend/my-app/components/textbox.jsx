import React, { useState } from "react";
import Image from "next/image";
import ErrorHandler from "./error";

// INPUT BOX
// lable - the name to display
// action - fucntion to be fired onChange event
// error - error messages to be shown if the field is empty or any other validation error
const TextBox = ({ lable, action, type, placeholder, error }) => {
  return (
    <>
      <main>
        <div className="flex flex-col gap-1">
          <div className="text-sm font-bold text-gray-600">{lable}</div>
          <input
            required
            className="outline-none p-2 text-base text-gray-600 bg-gray-100 rounded"
            type={type || "text"}
            onChange={action}
            placeholder={placeholder}
          />
          {error && <ErrorHandler error={error} />}
        </div>
      </main>
    </>
  );
};

// Custom select box
// list - contains all possible options
// multiselect - boolean value, if true you can select multiple items
export const SelectBox = ({
  list,
  lable,
  placeholder,
  action,
  multiSelect,
}) => {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState(null);
  const [arr, setArr] = useState([]);
  const handleSelect = (e) => {
    if (!multiSelect) {
      setValue(e.target.textContent);
      action(e.target.textContent);
    } else {
      setArr([...arr, e.target.textContent]);
      action([...arr, e.target.textContent]);
    }
    setShow(false);
  };
  return (
    <>
      <main className="flex flex-col gap-1">
        <div className="text-gray-600 text-sm font-bold">{lable}</div>
        <div className="flex relative w-full flex-col gap-2">
          <div
            onClick={() => setShow(!show)}
            className="flex  bg-gray-100  justify-between p-2 rounded-lg items-center"
          >
            <div className="text-gray-500 text-base font-medium">
              {value ? value : placeholder}
            </div>
            <Image src={"/icons/down.svg"} width={20} height={20} />
          </div>
          {show && (
            <div
              className="max-h-[200px] z-[9999999] bg-white w-full absolute top-12 shadow-lg flex flex-col gap-1 rounded-lg border-[1px] border-gray-100"
              onMouseLeave={() => setShow(false)}
            >
              {list.map((item, index) => (
                <div
                  className=" hover:bg-gray-200 p-2 hover:font-bold"
                  key={index}
                  onClick={(e) => {
                    handleSelect(e);
                  }}
                >
                  {" "}
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default TextBox;