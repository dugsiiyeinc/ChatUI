import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = ["Last 7 Days", "Last 30 Days", "Last 90 Days", "This Year"];

export default function DateRangeDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-700 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center hover:bg-gray-600 transition"
      >
        {selected}
        <ChevronDown className="ml-2 w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-gray-800 text-white rounded-lg shadow-lg z-20">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 hover:bg-gray-700 ${
                selected === option ? "bg-gray-700" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
