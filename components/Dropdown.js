import { TokensContextWrapper, useTokensContext } from "@/context/tokenContext";
import React, {useState} from "react";

const options = [{ name: "BSC" }, { name: "CIC" }, { name: "EXX" }];

function DropDown() {
const {selected, setSelected} = useTokensContext()


  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600" onChange={(e)=>{setSelected(e.target.value)}}>
        <option>{options[0].name}</option>
        <option>{options[1].name}</option>
        <option>{options[2].name}</option>
      </select>
    </div>
  );
}

export default DropDown;
