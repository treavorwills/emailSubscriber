import React from "react";

export default function Input({ inputType }) {
  return (
    <div className="flex justify-center">
      <label className="mx-2" htmlFor={inputType}>{inputType}</label>
      <input className="rounded-full" type="text" name={inputType} id={inputType}></input>
    </div>
  );
}
