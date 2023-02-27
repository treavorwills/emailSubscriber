import React from "react";
import Input from "./Input";

export default function Form({ type }) {
  return (
    <form
      className="m-2 p-2 flex flex-col space-y-4 bg-slate-200"
      id="form-sign-up"
    >
      <Input inputType={"name"} />
      <Input inputType={"email"} />
      <div className="flex justify-end">
        <button className="px-4 rounded-full bg-slate-400">
          {type}!
        </button>
      </div>
    </form>
  );
}
